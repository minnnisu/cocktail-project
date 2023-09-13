const fs = require("fs");
const postModel = require("../models/post");
const userModel = require("../models/user");
const { ValidationError } = require("./ErrorHandler");
const path = require("path");

function readPostWithUserid(userId) {
  return postModel.find({ author: userId });
}

function readPostAll(userId) {
  return postModel.find({});
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

exports.getPostAll = async function (req, res, next) {
  try {
    const posts = await readPostAll();
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
      // 이미지 이름을 미리 처리
      await addPost(user, title, content, req.files);
    } else {
      await addPost(user, title, content);
    }

    res.status(200).send();
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
