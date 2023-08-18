const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

// Define Schemes
const CocktailSchema = new Schema(
  {
    name: { type: String, unique: true, sparse: true },
    alcohol: [
      {
        id: { type: Schema.Types.ObjectId, ref: "Alcohol" },
        name: { type: String, unique: true, sparse: true },
        isSub: Boolean,
        volume: Number,
        unit: String,
      },
    ],
    nonAlcohol: [
      {
        id: { type: Schema.Types.ObjectId, ref: "NonAlcohol" },
        name: { type: String, unique: true, sparse: true },
        volume: Number,
        unit: String,
      },
    ],
    garnish: Array,
    recipe: String,
    image: String,
  },
  {
    versionKey: false,
  }
);

// Create Model & Export
module.exports = mongoose.model("Cocktail", CocktailSchema);
