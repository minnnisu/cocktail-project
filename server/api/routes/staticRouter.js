const express = require("express");
const router = express.Router();
const { getCocktailIamge } = require("../../controller/alcoholController");
const { getPostIamge } = require("../../controller/postController");

router.get("/image/cocktail/:imageName", getCocktailIamge);
router.get("/image/post/:imageName", getPostIamge);

module.exports = router;
