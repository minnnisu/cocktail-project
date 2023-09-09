const express = require("express");
const authMiddleware = require("../middlewares/auth");
const postController = require("../../controller/postController");

const multer = require("multer");
const path = require("path");
const { postsImageUpload } = require("../middlewares/imageUploader");

const router = express.Router();

router
  .get("/", authMiddleware.isLoggedIn, postController.getPost)
  .post("/", authMiddleware.isLoggedIn, postController.postPost);

router.post(
  "/image",
  authMiddleware.isLoggedIn,
  postsImageUpload.array("images", 10),
  postController.postPostImages
);

module.exports = router;
