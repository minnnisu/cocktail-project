const fs = require("fs");
const postModel = require("../models/post");
const userModel = require("../models/user");
const path = require("path");
const { ValidationError } = require("./ErrorHandler");

async function readPost(postId, { author, summary }) {
  const qurey = {};
  if (author) {
    qurey["author.id"] = author;
  }

  if (postId) {
    qurey["_id"] = postId;
  }

  const posts = await postModel.find(qurey);
  return posts.map((post) => {
    const filteredPost = {
      postId: post._id,
      author: post.author,
      title: post.title,
      content: post.content,
      images: post.images,
      heartSize: post.hearts.length,
      created_at: post.created_at,
    };

    if (!summary) {
      filteredPost["comments"] = post.comments;
    }

    return filteredPost;
  });
}

async function readComment(postId) {
  const qurey = {};

  if (postId) {
    qurey["_id"] = postId;
  }

  const comments = await postModel.findOne(qurey, ["comments"]);
  return comments.comments;
}

function addPost(user, title, content, files) {
  const newPost = new postModel({
    author: { id: user.id, nickname: user.nickname },
    title,
    content,
  });

  if (files) {
    const fileNames = files.map((file) => file.filename);
    newPost.images = fileNames;
  }

  return newPost.save().catch((error) => {
    if (files) {
      Promise.all(
        newPost.images.map(async (filename) => {
          fs.unlink(`static/image/post/${filename}`, function (err) {
            if (err) {
              console.error("이미지 삭제 에러: ", err);
            }
          });
        })
      );
    }

    throw error;
  });
}

async function updatePost(userId, postId, body, files) {
  const post = await postModel.findById(postId);
  if (userId !== post.author.id) {
    throw new ValidationError("작성자만 수정이 가능합니다.");
  }

  if (body.title) {
    post.title = body.title;
  }

  if (body.content) {
    post.content = body.content;
  }

  if (body.heart) {
    const index = post.hearts.indexOf(userId);
    if (index === -1) {
      post.hearts.push(userId);
    } else {
      post.hearts.splice(index, 1);
    }
  }

  console.log(`기존 이미지: ${post.images}`);
  console.log(`삭제 할 이미지: ${body.imageRemoveTarget}`);

  if (body.imageRemoveTarget && body.imageRemoveTarget.length > 0) {
    Promise.all(
      body.imageRemoveTarget.map(async (image) => {
        fs.unlink(`static/image/post/${image}`, function (err) {
          if (err) {
            console.error("이미지 삭제 에러: ", err);
          }
        });
      })
    );

    body.imageRemoveTarget.map((image) => {
      const index = post.images.indexOf(image);
      if (index !== -1) {
        post.images.splice(index, 1);
      }
    });
  }

  if (files) {
    const fileNames = files.map((file) => file.filename);
    post.images = [...post.images, ...fileNames];
  }

  console.log(`수정 후 이미지: ${post.images}`);

  return post.save().catch((error) => {
    if (files) {
      Promise.all(
        post.images.map(async (filename) => {
          fs.unlink(`static/image/post/${filename}`, function (err) {
            if (err) {
              console.error("이미지 삭제 에러: ", err);
            }
          });
        })
      );
    }

    throw error;
  });
}

async function removePost(userId, postId) {
  const post = await postModel.findById(postId);
  if (userId !== post.author.id) {
    throw new ValidationError("작성자만 삭제가 가능합니다.");
  }

  Promise.all(
    post.images.map(async (image) => {
      fs.unlink(`static/image/post/${image}`, function (err) {
        if (err) {
          console.error("이미지 삭제 에러: ", err);
        }
      });
    })
  );

  await postModel.deleteOne({ _id: postId });
}

async function addComment(userId, postId, body) {
  const user = await userModel.findOne({ id: userId });
  if (!user || user.length < 1) {
    throw new ValidationError("유저 정보가 없습니다.");
  }

  const post = await postModel.findById(postId);
  if (!post || post.length < 1) {
    throw new ValidationError("게시물이 없습니다.");
  }

  if (!body.content) {
    throw new ValidationError("댓글의 내용이 없습니다.");
  }

  const newCommnet = {
    author: { id: user.id, nickname: user.nickname },
    content: body.content,
  };

  post.comments.push(newCommnet);

  return post.save();
}

async function updateComment(userId, postId, commentId, body) {
  const post = await postModel.findById(postId);
  if (!post || post.length < 1) {
    throw new ValidationError("게시물이 없습니다.");
  }

  if (!body.content) {
    throw new ValidationError("댓글의 내용이 없습니다.");
  }

  let isFindSameComment = false;

  post.comments.map((comment) => {
    if (comment._id.equals(commentId)) {
      isFindSameComment = true;
      if (comment.author.id !== userId) {
        throw new ValidationError("작성자만 수정이 가능합니다.");
      }

      comment.content = body.content;
    }
  });

  if (!isFindSameComment) {
    throw new ValidationError("댓글이 없습니다.");
  }

  return post.save();
}

async function removeComment(userId, postId, commentId) {
  const post = await postModel.findById(postId);
  if (!post || post.length < 1) {
    throw new ValidationError("게시물이 없습니다.");
  }

  let isFindSameComment = false;

  post.comments = post.comments.filter((comment) => {
    if (comment._id.equals(commentId)) {
      isFindSameComment = true;
      if (comment.author.id !== userId) {
        throw new ValidationError("작성자만 삭제 가능합니다.");
      }
      return false;
    }

    return true;
  });

  if (!isFindSameComment) {
    throw new ValidationError("댓글이 없습니다.");
  }

  return post.save();
}

exports.getPost = async function (req, res, next) {
  try {
    const posts = await readPost(req.params.id, req.query);
    return res.status(200).send(posts);
  } catch (error) {
    next(error);
  }
};

exports.postPost = async function (req, res, next) {
  try {
    const { id, nickname } = await userModel.findOne({ id: req.user.id });
    const { title, content } = JSON.parse(req.body.data);
    const user = { id, nickname };

    if (req.files && req.files.length > 0) {
      await addPost(user, title, content, req.files);
    } else {
      await addPost(user, title, content);
    }

    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

exports.patchPost = async function (req, res, next) {
  try {
    const savedPost = await updatePost(
      req.user.id,
      req.params.id,
      JSON.parse(req.body.data),
      req.files
    );

    return res.status(201).send(savedPost);
  } catch (error) {
    next(error);
  }
};

exports.deletePost = async function (req, res, next) {
  try {
    await removePost(req.user.id, req.params.id);
    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};

exports.getPostIamge = function (req, res) {
  const imageName = req.params.imageName;
  const imagePath = path.join("./static/image/post/", imageName);
  console.log(imagePath);

  fs.readFile(imagePath, (err, data) => {
    if (err) {
      res.status(404).send("Image not found");
      console.log(err);
    } else {
      res.writeHead(200, { "Content-Type": "image/jpeg" }); // 이미지의 Content-Type을 설정
      res.end(data); // 이미지 데이터를 클라이언트에게 전송
    }
  });
};

exports.getComment = async function (req, res, next) {
  try {
    const posts = await readComment(req.params.id);
    return res.status(200).send(posts);
  } catch (error) {
    next(error);
  }
};

exports.postComment = async function (req, res, next) {
  try {
    await addComment(req.user.id, req.params.id, req.body);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

exports.patchComment = async function (req, res, next) {
  try {
    await updateComment(
      req.user.id,
      req.params.postId,
      req.params.commentId,
      req.body
    );
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

exports.deleteComment = async function (req, res, next) {
  try {
    await removeComment(req.user.id, req.params.postId, req.params.commentId);
    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};
