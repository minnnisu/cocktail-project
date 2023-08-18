const alcoholModel = require("../../models/alcohol");
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  AlcoholService(alcoholModel)
    .getNonAlcohol(req.query)
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.post("/", (req, res, next) => {
  AlcoholService(alcoholModel)
    .addNonAlcohol(req.body)
    .then((result) => {
      console.log(result);
      res.status(201).send();
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.put("/", (req, res, next) => {
  AlcoholService(alcoholModel)
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
});

router.delete("/", (req, res, next) => {
  NonAlcoholService(alcoholModel)
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

module.exports = router;
