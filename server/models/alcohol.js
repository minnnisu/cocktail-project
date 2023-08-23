const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const subAlcoholSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, sparse: true },
    abv: { type: Number, required: true },
    cocktails: [{ type: Schema.Types.ObjectId, ref: "Cocktail" }],
  },
  { _id: false }
);

// Define Schemes
const AlcoholSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, sparse: true },
    abv: { type: Number, required: false },
    subAlcohols: [subAlcoholSchema], // unique를 설정하여도 같은 배열 내 subAlcohol의 name의 중복성은 체크하지 못함
    cocktails: [{ type: Schema.Types.ObjectId, ref: "Cocktail" }],
  },
  {
    versionKey: false,
  }
);

// Create Model & Export
module.exports = mongoose.model("Alcohol", AlcoholSchema);
