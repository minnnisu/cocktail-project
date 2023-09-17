const express = require("express");
const authMiddleware = require("../middlewares/auth");
const postController = require("../../controller/postController");
const { postsImageUpload } = require("../middlewares/imageUploader");

const router = express.Router();

router
  .get("/", postController.getPost)
  .post(
    "/",
    authMiddleware.isLoggedIn,
    postsImageUpload.array("images", 10),
    postController.postPost
  );

router
  .get("/:id", postController.getPost)
  .patch(
    "/:id",
    authMiddleware.isLoggedIn,
    postsImageUpload.array("images", 10),
    postController.patchPostById
  )
  .delete("/:id", authMiddleware.isLoggedIn, postController.deletePostById);

module.exports = router;
