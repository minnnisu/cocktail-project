const { ObjectId } = require("mongodb");
const postModel = require("../models/post");
const userModel = require("../models/user");
const { ValidationError, NotFoundError } = require("./ErrorHandler");

function readPostWithUserid(userId) {
  return postModel.find({ author: userId });
}

function addPost(user, title, content) {
  const newPost = new postModel({
    author: { id: user.id, nickname: user.nickname },
    title,
    content,
  });

  return newPost.save();
}

async function addPostImages(_id, userId, files) {
  if (!_id) {
    throw new ValidationError("id를 전달해주세요.");
  }

  try {
    const post = await postModel.findById(_id);

    if (post.author.id !== userId) {
      throw new ValidationError("게시물 등록자와 동일한 사용자가 아닙니다.");
    }

    if (!files || files.length < 1) {
      throw new NotFoundError("이미지가 없습니다.");
    }

    const fileNames = files.map((file) => file.filename);

    post.images = fileNames;
    return post.save();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

exports.getPost = async function (req, res, next) {
  try {
    if (req.query.userId) {
      const posts = await readPostWithUserid(query.userId);
      return res.status(200).send(posts);
    } else {
      next(new ValidationError("올바르지 않은 쿼리입니다."));
    }
  } catch (error) {
    next(error);
  }
};

exports.postPost = async function (req, res, next) {
  try {
    const { id, nickname } = await userModel.findOne({ id: req.user.id });
    const { title, content } = req.body;
    const user = { id, nickname };
    const result = await addPost(user, title, content);
    res.status(200).send({ id: result._id });
  } catch (error) {
    next(error);
  }
};

// form(file, data(postId))
exports.postPostImages = async function (req, res, next) {
  const data = JSON.parse(req.body.data);
  addPostImages(data.postId, req.user.id, req.files)
    .then((data) => res.status(201).send(data))
    .catch((error) => next(error));
};
