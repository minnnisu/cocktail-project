function CocktailService(cocktailModel) {
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
    addCocktail,
    getCocktail,
    updateCocktail,
    deleteCocktail,
  };
}

module.exports = CocktailService;
