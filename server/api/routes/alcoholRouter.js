const express = require("express");
const router = express.Router();
const alcoholController = require("../../controller/alcoholController");
const { cocktailImageUpload } = require("../middlewares/imageUploader");

router
  .get("/alcohol", alcoholController.getAlcohol)
  .post("/alcohol", alcoholController.postAlcohol)
  .put("/alcohol", alcoholController.putAlcohol);

router
  .get("/non-alcohol", alcoholController.getNonAlcohol)
  .post("/non-alcohol", alcoholController.postNonAlcohol);

router
  .get("/cocktail", alcoholController.getCocktail)
  .post("/cocktail", alcoholController.postCocktail);

router.post(
  "/cocktail/image",
  cocktailImageUpload.single("image"),
  alcoholController.postCocktailImage
);

module.exports = router;
