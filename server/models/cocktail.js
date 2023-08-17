const mongoose = require("mongoose");

// Define Schemes
const CocktailSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
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
});

// Create Model & Export
module.exports = mongoose.model("Cocktail", CocktailSchema);
