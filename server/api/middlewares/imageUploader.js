const multer = require("multer");
const path = require("path");

// 이미지 업로드를 위한 설정
const cocktailStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "static/image/cocktail"); // 업로드된 파일을 저장할 디렉토리 경로
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // 저장될 파일명 설정
  },
});

const postStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "static/image/post");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // 저장될 파일명 설정
  },
});

const cocktailImageUpload = multer({ storage: cocktailStorage });
const postsImageUpload = multer({ storage: postStorage });

module.exports = { cocktailImageUpload, postsImageUpload };
