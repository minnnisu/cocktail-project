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

// title, content, image, heart 수정 가능
// image는 imageRemoveTarget, files로 구성

async function updatePost(userId, postId, payload, files) {
  const post = await postModel.findById(postId);
  if (userId !== post.author.id) {
    throw new ValidationError("작성자만 수정이 가능합니다.");
  }

  if (payload.title) {
    post.title = payload.title;
  }

  if (payload.content) {
    post.content = payload.content;
  }

  if (payload.heart) {
    const index = post.hearts.indexOf(userId);
    if (index === -1) {
      post.hearts.push(userId);
    } else {
      post.hearts.splice(index);
    }
  }

  if (payload.imageRemoveTarget) {
    Promise.all(
      payload.imageRemoveTarget.map(async (image) => {
        fs.unlink(`static/image/post/${image}`, function (err) {
          if (err) {
            console.error("이미지 삭제 에러: ", err);
          }
        });
      })
    );

    payload.imageRemoveTarget.map((image) => {
      const index = post.images.indexOf(image);
      if (index !== -1) {
        const tmp = post.images.splice(index);
        console.log(`삭제된 이미지: ${tmp}`);
      }
    });
  }

  if (files) {
    const fileNames = files.map((file) => file.filename);
    post.images = [...post.images, ...fileNames];
    console.log(`files: ${post.images}`);
  }

  console.log(post);

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

exports.patchPostById = async function (req, res, next) {
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

exports.deletePostById = async function (req, res, next) {
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
