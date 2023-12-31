const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const CommentSchema = new Schema({
  author: {
    id: { type: String, required: true },
    nickname: { type: String, required: true },
  },
  content: { type: String, required: true, sparse: true },
  created_at: { type: Date, default: Date.now, required: true },
});

// Define Schemes
const PostSchema = new Schema(
  {
    author: {
      id: { type: String, required: true },
      nickname: { type: String, required: true },
    },
    title: { type: String, required: true },
    content: { type: String, required: true, sparse: true },
    comments: [CommentSchema],
    hearts: { type: Array },
    images: { type: Array },
    created_at: { type: Date, default: Date.now, required: true },
  },
  {
    versionKey: false,
  }
);

// Create Model & Export
module.exports = mongoose.model("Post", PostSchema);
