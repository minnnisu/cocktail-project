const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const CocktailSchema = new Schema(
  {
    cocktailID: { type: Schema.Types.ObjectId, ref: "Cocktail" },
    name: { type: String, require: true },
  },
  { _id: false }
);

// Define Schemes
const NonAlcoholSchema = new Schema(
  {
    name: { type: String, unique: true, sparse: true },
    cocktails: [CocktailSchema],
  },
  {
    versionKey: false,
  }
);

// Create Model & Export
module.exports = mongoose.model("NonAlcohol", NonAlcoholSchema);
