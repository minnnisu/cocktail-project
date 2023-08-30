const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const cocktailSchema = new Schema(
  {
    cocktailID: { type: Schema.Types.ObjectId, ref: "Cocktail" },
    name: { type: String, require: true },
  },
  { _id: false }
);

const subAlcoholSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, sparse: true },
    abv: { type: Number, required: true },
    cocktails: [cocktailSchema],
  },
  { _id: false }
);

// Define Schemes
const AlcoholSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, sparse: true },
    abv: {
      type: Number,
      required: [
        function () {
          return this.subAlcohols ? false : true;
        },
        "abv의 값이 없습니다.",
      ],
    },
    subAlcohols: [subAlcoholSchema],
    cocktails: [cocktailSchema],
  },
  {
    versionKey: false,
  }
);

const advValueValidator = function (abv) {
  return abv >= 0 && abv <= 100;
};

const advValidatorWithSubAlcohols = function (abv) {
  if (this.get("subAlcohols") && abv) {
    return false;
  }
  return true;
};

const subAlcoholEmptyValidator = function (subAlcohols) {
  if (subAlcohols.length === 0) {
    return false;
  }

  return true;
};

const subAlcoholDuplicationValidator = function (subAlcohols) {
  const subAlcoholNames = subAlcohols.map((subAlcohol) => {
    return subAlcohol.name;
  });

  const subAlcoholNameSet = new Set(subAlcoholNames);
  if (subAlcoholNames.length !== subAlcoholNameSet.size) {
    return false;
  }
  return true;
};

AlcoholSchema.path("abv").validate({
  validator: advValidatorWithSubAlcohols,
  message: "subAlcohols과 abv는 둘 중 하나만 존재해야합니다.",
});

AlcoholSchema.path("abv").validate({
  validator: advValueValidator,
  message: "도수는 값은 0 이상 100 이하이어야 합니다.",
});

AlcoholSchema.path("subAlcohols").validate({
  validator: subAlcoholEmptyValidator,
  message: "하위 술이 없습니다.",
});

AlcoholSchema.path("subAlcohols").validate({
  validator: subAlcoholDuplicationValidator,
  message: "하위 술 중에서 중복된 것이 있습니다.",
});

// Create Model & Export
module.exports = mongoose.model("Alcohol", AlcoholSchema);
