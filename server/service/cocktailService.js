const alcoholModel = require("../models/alcohol");
const nonAlcoholModel = require("../models/nonAlcohol");
const cocktailModel = require("../models/cocktail");

// alcoholModel, nonAlcoholModel, cocktailModel
function CocktailService() {
  async function addAlcohol(alcoholData) {
    const alcohol = new alcoholModel(alcoholData);
    return alcohol.save();
  }

  async function getAlcohol() {
    return alcoholModel.find();
  }

  async function updateAlcohol(filter, update) {
    return alcoholModel.findOneAndUpdate(filter, update);
  }

  async function deleteAlcohol(filter) {
    return alcoholModel.findOneAndDelete(filter);
  }

  async function addNonAlcohol(nonAlcoholData) {
    const nonAlcohol = new nonAlcoholModel(nonAlcoholData);
    return nonAlcohol.save();
  }

  async function getNonAlcohol() {
    return nonAlcoholModel.find();
  }

  async function updateNonAlcohol(filter, update) {
    return nonAlcoholModel.findOneAndUpdate(filter, update);
  }

  async function deleteNonAlcohol(filter) {
    return nonAlcoholModel.findOneAndDelete(filter);
  }

  async function addCocktail(cocktailData) {
    const cocktail = new cocktailModel(cocktailData);
    return cocktail.save();
  }

  async function getCocktail() {
    return cocktailModel.find();
  }

  async function updateCocktail(filter, update) {
    return cocktailModel.findOneAndUpdate(filter, update);
  }

  async function deleteCocktail(filter) {
    return cocktailModel.findOneAndDelete(filter);
  }

  return {
    addAlcohol,
    getAlcohol,
    updateAlcohol,
    deleteAlcohol,
    addNonAlcohol,
    getNonAlcohol,
    updateNonAlcohol,
    deleteNonAlcohol,
    addCocktail,
    getCocktail,
    updateCocktail,
    deleteCocktail,
  };
}

module.exports = CocktailService;
