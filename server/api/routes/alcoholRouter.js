const AlcoholService = require("../../service/AlcoholService");
const alcoholModel = require("../../models/alcohol");
const nonAlcoholModel = require("../../models/nonAlcohol");
const cocktailModel = require("../../models/cocktail");
const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

router
  .get("/alcohol", (req, res, next) => {
    AlcoholService({ alcoholModel })
      .getAlcohol(req.query)
      .then((data) => res.status(200).send(data))
      .catch((err) => {
        console.error(err);
        next(err);
      });
  })
  .post("/alcohol", (req, res, next) => {
    AlcoholService({ alcoholModel })
      .addAlcohol(req.body)
      .then((result) => {
        res.status(201).send(result);
      })
      .catch((err) => {
        console.error(err);
        next(err);
      });
  });

router
  .get("/non-alcohol", (req, res, next) => {
    AlcoholService({ nonAlcoholModel })
      .getNonAlcohol(req.query)
      .then((data) => {
        console.log(data);
        res.status(200).send(data);
      })
      .catch((err) => {
        console.error(err);
        next(err);
      });
  })
  .post("/non-alcohol", (req, res, next) => {
    AlcoholService({ nonAlcoholModel })
      .addNonAlcohol(req.body)
      .then((result) => {
        res.status(201).send(result);
      })
      .catch((err) => {
        console.error(err);
        next(err);
      });
  });

// 이미지 업로드를 위한 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "static/images/cocktails"); // 업로드된 파일을 저장할 디렉토리 경로
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // 저장될 파일명 설정
  },
});

const upload = multer({ storage });

router
  .get("/cocktail", (req, res, next) => {
    AlcoholService({ cocktailModel })
      .getCocktail(req.query)
      .then((data) => {
        console.log(data);
        res.status(200).send(data);
      })
      .catch((err) => {
        console.error(err);
        next(err);
      });
  })
  .post("/cocktail", (req, res, next) => {
    AlcoholService({ alcoholModel, nonAlcoholModel, cocktailModel })
      .addCocktail(req.body)
      .then((result) => {
        res.status(201).send(result);
      })
      .catch((err) => {
        console.error(err);
        next(err);
      });
  });

router.post("/cocktail/image", upload.single("image"), (req, res, next) => {
  AlcoholService({ cocktailModel })
    .addCocktailImage(JSON.parse(req.body.data), req.file)
    .then(() => {
      res.status(201).send();
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

// error handling 미들웨어
router.use((err, req, res, next) => {
  if (
    err.name === "ValidationError" ||
    (err.name === "MongoServerError" && err.code === 11000) // unique키 중복
  ) {
    return res.status(403).json({ ValidationError: err.message });
  } else if (err.name === "MongoError") {
    return res.status(400).json({ message: err.message });
  }

  next();
});

module.exports = router;
