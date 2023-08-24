const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const alcoholSchema = new Schema(
  {
    alcoholID: {
      type: Schema.Types.ObjectId,
      ref: "Alcohol",
      required: true,
    },
    name: { type: String, required: true, sparse: true },
    subAlcoholName: String,
    volume: { type: Number },
    unit: { type: String, required: true },
  },
  { _id: false }
);

const nonAlcoholSchema = new Schema(
  {
    nonAlcoholID: {
      type: Schema.Types.ObjectId,
      ref: "NonAlcohol",
      required: true,
    },
    name: { type: String, required: true, sparse: true },
    volume: { type: Number },
    unit: { type: String, required: true },
  },
  { _id: false }
);

// Define Schemes
const CocktailSchema = new Schema(
  {
    name: { type: String, unique: true, required: true, sparse: true },
    tastes: { type: Array, required: true },
    garnishes: { type: Array, required: true },
    recipe: { type: String, required: true },
    image_path: { type: String, required: true },
    alcohols: [alcoholSchema],
    nonAlcohols: [nonAlcoholSchema],
  },
  {
    versionKey: false,
  }
);

// Create Model & Export
module.exports = mongoose.model("Cocktail", CocktailSchema);
