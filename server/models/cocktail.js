const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

// Define Schemes
const CocktailSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, sparse: true },
    alcohol: [
      {
        alcoholID: {
          type: Schema.Types.ObjectId,
          ref: "Alcohol",
          required: true,
        },
        name: { type: String, required: true, unique: true, sparse: true },
        subAlcoholName: String,
        volume: { type: Number, required: true },
        unit: { type: String, required: true },
      },
    ],
    nonAlcohol: [
      {
        nonAlcoholID: {
          type: Schema.Types.ObjectId,
          ref: "NonAlcohol",
          required: true,
        },
        name: { type: String, required: true, unique: true, sparse: true },
        volume: { type: Number, required: true },
        unit: { type: String, required: true },
      },
    ],
    taste: { type: Array, required: true },
    garnish: { type: Array, required: true },
    recipe: { type: String, required: true },
    image_url: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

// Create Model & Export
module.exports = mongoose.model("Cocktail", CocktailSchema);
