const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

// Define Schemes
const UserSchema = new Schema(
  {
    userid: { type: String, required: true, unique: true, sparse: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    alias: { type: String, required: true, unique: true, sparse: true },
    telephone: { type: String, required: true },
    email: { type: String, required: true },
    created_at: { type: Date, required: true },
  },
  {
    versionKey: false,
  }
);

// Create Model & Export
module.exports = mongoose.model("User", UserSchema);
