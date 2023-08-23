const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

// Define Schemes
const NonAlcoholSchema = new Schema(
  {
    name: { type: String, unique: true, sparse: true },
    cocktails: [{ type: Schema.Types.ObjectId, ref: "Cocktail" }],
  },
  {
    versionKey: false,
  }
);

// Create Model & Export
module.exports = mongoose.model("NonAlcohol", NonAlcoholSchema);
