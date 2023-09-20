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
    postController.patchPost
  )
  .delete("/:id", authMiddleware.isLoggedIn, postController.deletePost);

router
  .get("/:id/comment", postController.getComment)
  .post("/:id/comment", authMiddleware.isLoggedIn, postController.postComment)
  .delete(
    "/:postId/comment/:commentId",
    authMiddleware.isLoggedIn,
    postController.deleteComment
  );

module.exports = router;
