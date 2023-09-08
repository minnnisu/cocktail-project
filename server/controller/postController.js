const postModel = require("../models/post");
const userModel = require("../models/user");
const { ValidationError } = require("./ErrorHandler");

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
