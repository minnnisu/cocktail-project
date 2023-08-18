const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

// Define Schemes
const NonAlcoholSchema = new Schema(
  {
    name: String,
    cocktail: [{ type: Schema.Types.ObjectId, ref: "Cocktail" }],
  },
  {
    versionKey: false,
  }
);

// Create Model & Export
module.exports = mongoose.model("NonAlcohol", NonAlcoholSchema);
