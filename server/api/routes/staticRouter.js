const express = require("express");
const router = express.Router();
const { getCocktailIamge } = require("../../controller/alcoholController");

router.get("/image/cocktail/:imageName", getCocktailIamge);

module.exports = router;
