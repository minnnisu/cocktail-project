const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

// Define Schemes
const CocktailSchema = new Schema(
  {
    name: { type: String, unique: true, sparse: true },
    alcohol: [
      {
        alcoholID: { type: Schema.Types.ObjectId, ref: "Alcohol" },
        name: { type: String, unique: true, sparse: true },
        subAlcoholName: String,
        volume: Number,
        unit: String,
      },
    ],
    nonAlcohol: [
      {
        nonAlcoholID: { type: Schema.Types.ObjectId, ref: "NonAlcohol" },
        name: { type: String, unique: true, sparse: true },
        volume: Number,
        unit: String,
      },
    ],
    taste: Array,
    garnish: Array,
    recipe: String,
    image_url: String,
  },
  {
    versionKey: false,
  }
);

// Create Model & Export
module.exports = mongoose.model("Cocktail", CocktailSchema);
