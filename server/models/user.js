const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const CocktailSchema = new Schema(
  {
    cocktailID: { type: Schema.Types.ObjectId, ref: "Cocktail" },
    name: { type: String, require: true },
    created_at: { type: Date, default: Date.now, required: true },
  },
  { _id: false }
);

// Define Schemes
const UserSchema = new Schema(
  {
    id: { type: String, required: true, unique: true, sparse: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    nickname: { type: String, required: true, unique: true, sparse: true },
    telephone: { type: String, required: true },
    email: { type: String, required: true },
    makedCocktails: [CocktailSchema],
    isAdmin: { type: Boolean, required: false },
    created_at: { type: Date, default: Date.now, required: true },
  },
  {
    versionKey: false,
  }
);

// Create Model & Export
module.exports = mongoose.model("User", UserSchema);
