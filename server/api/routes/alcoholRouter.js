const AlcoholService = require("../../service/AlcoholService");
const alcoholModel = require("../../models/alcohol");
const nonAlcoholModel = require("../../models/nonAlcohol");
const cocktailModel = require("../../models/cocktail");
const express = require("express");
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
  })
  .put("/alcohol", (req, res, next) => {
    AlcoholService({ alcoholModel })
      .updateAlcohol(req.query, req.body)
      .then((doc) => {
        if (doc === null) {
          return res.status(403).send("조건에 만족하는 데이터가 없습니다");
        }
        res.status(200).send();
      })
      .catch((err) => {
        console.error(err);
        next(err);
      });
  })
  .delete("/alcohol", (req, res, next) => {
    AlcoholService({ alcoholModel })
      .deleteAlcohol(req.query)
      .then((doc) => {
        if (doc === null) {
          return res.status(403).send("조건에 만족하는 데이터가 없습니다");
        }
        res.status(200).send();
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
  })
  .put("/non-alcohol", (req, res, next) => {
    AlcoholService({ nonAlcoholModel })
      .updateNonAlcohol(req.query, req.body)
      .then((doc) => {
        if (doc === null) {
          return res.status(403).send("조건에 만족하는 데이터가 없습니다");
        }
        res.status(200).send();
      })
      .catch((err) => {
        console.error(err);
        next(err);
      });
  })
  .delete("/non-alcohol", (req, res, next) => {
    NonAlcoholService({ nonAlcoholModel })
      .deleteNonAlcohol(req.query)
      .then((doc) => {
        if (doc === null) {
          return res.status(403).send("조건에 만족하는 데이터가 없습니다");
        }
        res.status(200).send();
      })
      .catch((err) => {
        console.error(err);
        next(err);
      });
  });

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
        console.log(result);
        res.status(201).send(result);
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
