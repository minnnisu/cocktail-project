const express = require("express");
const authMiddleware = require("../middlewares/auth");
const postController = require("../../controller/postController");
const { postsImageUpload } = require("../middlewares/imageUploader");

const router = express.Router();

router
  .get("/", authMiddleware.isLoggedIn, postController.getPost)
  .post(
    "/",
    authMiddleware.isLoggedIn,
    postsImageUpload.array("images", 10),
    postController.postPost
  );

router.get("/all", postController.getPostAll);

module.exports = router;
