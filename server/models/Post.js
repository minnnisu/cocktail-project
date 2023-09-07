const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const CommentSchema = new Schema({
  author: { type: String, require: true },
  content: { type: String, required: true, unique: true, sparse: true },
  created_at: { type: Date, default: Date.now, required: true },
});

// Define Schemes
const PostSchema = new Schema(
  {
    author: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true, unique: true, sparse: true },
    comments: [CommentSchema],
    hearts: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    images: { type: Array },
    created_at: { type: Date, default: Date.now, required: true },
  },
  {
    versionKey: false,
  }
);

// Create Model & Export
module.exports = mongoose.model("User", PostSchema);
