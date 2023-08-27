const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const CocktailSchema = new Schema(
  {
    cocktailID: { type: Schema.Types.ObjectId, ref: "Cocktail" },
    name: { type: String, require: true },
  },
  { _id: false }
);

const SubAlcoholSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, sparse: true },
    abv: { type: Number, required: true },
    cocktails: [CocktailSchema],
  },
  { _id: false }
);

// Define Schemes
const AlcoholSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, sparse: true },
    abv: { type: Number, required: false },
    subAlcohols: [SubAlcoholSchema], // unique를 설정하여도 같은 배열 내 subAlcohol의 name의 중복성은 체크하지 못함
    cocktails: [CocktailSchema],
  },
  {
    versionKey: false,
  }
);

// Create Model & Export
module.exports = mongoose.model("Alcohol", AlcoholSchema);
