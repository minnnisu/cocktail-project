const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();

router.get("/images/cocktails/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join("./static/images/cocktails/", imageName);

  fs.readFile(imagePath, (err, data) => {
    if (err) {
      res.status(404).send("Image not found");
      console.log(err);
    } else {
      res.writeHead(200, { "Content-Type": "image/jpeg" }); // 이미지의 Content-Type을 설정
      res.end(data); // 이미지 데이터를 클라이언트에게 전송
    }
  });
});

// error handling 미들웨어
router.use((err, req, res, next) => {
  if (err.name === "NotFoundError") {
    return res.status(404).json({ NotFoundError: err.message });
  }

  next();
});

module.exports = router;
