const mongoose = require("mongoose");

// Define Schemes
const NonAlcoholSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  cocktail: [{ type: Schema.Types.ObjectId, ref: "Cocktail" }],
});

// Create Model & Export
module.exports = mongoose.model("NonAlcohol", NonAlcoholSchema);
