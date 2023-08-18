const AlcoholService = require("../../service/AlcoholService");
const alcoholModel = require("../../models/alcohol");
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  AlcoholService(alcoholModel)
    .getAlcohol(req.query)
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.post("/", (req, res, next) => {
  AlcoholService(alcoholModel)
    .addAlcohol(req.body)
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
});

router.delete("/", (req, res, next) => {
  AlcoholService(alcoholModel)
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

module.exports = router;
