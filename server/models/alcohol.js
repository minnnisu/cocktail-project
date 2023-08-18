const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const subAlcoholSchema = new Schema({
  name: { type: String, required: true },
  abv: { type: Number, required: true },
  cocktail: [{ type: Schema.Types.ObjectId, ref: "Cocktail" }],
});

// Define Schemes
const AlcoholSchema = new Schema(
  {
    name: { type: String, required: true },
    abv: { type: Number, required: false },
    subAlcohol: [subAlcoholSchema],
    cocktail: [{ type: Schema.Types.ObjectId, ref: "Cocktail" }],
  },
  {
    versionKey: false,
  }
);

// Create Model & Export
module.exports = mongoose.model("Alcohol", AlcoholSchema);
