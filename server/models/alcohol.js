const mongoose = require("mongoose");

// Define Schemes
const AlcoholSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  subAlcohol: {
    name: String,
    adv: Number,
    cocktail: [{ type: Schema.Types.ObjectId, ref: "Cocktail" }],
  },
  adv: Number,
  cocktail: [{ type: Schema.Types.ObjectId, ref: "Cocktail" }],
});

// Create Model & Export
module.exports = mongoose.model("Alcohol", AlcoholSchema);
