const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

// Define Schemes
const CocktailSchema = new Schema(
  {
    name: String,
    alcohol: [
      {
        id: { type: Schema.Types.ObjectId, ref: "Alcohol" },
        name: String,
        isSub: Boolean,
        volume: Number,
        unit: String,
      },
    ],
    nonAlcohol: [
      {
        id: { type: Schema.Types.ObjectId, ref: "NonAlcohol" },
        name: String,
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
