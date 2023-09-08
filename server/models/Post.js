const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const CommentSchema = new Schema({
  author: { type: String, require: true },
  content: { type: String, required: true, sparse: true },
  created_at: { type: Date, default: Date.now, required: true },
});

const HeartSchema = new Schema({
  userid: { type: Schema.Types.ObjectId, ref: "User", required: true },
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
    hearts: [HeartSchema],
    images: { type: Array },
    created_at: { type: Date, default: Date.now, required: true },
  },
  {
    versionKey: false,
  }
);

// Create Model & Export
module.exports = mongoose.model("Post", PostSchema);
