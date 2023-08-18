function AlcoholService(alcoholModel) {
  function getFilter(filter) {
    const { id, name } = filter;
    const processedFilter = {};
    if (id) {
      processedFilter._id = new ObjectId(id);
    }

    if (name) {
      processedFilter.name = name;
    }

    return processedFilter;
  }

  async function addAlcohol(data) {
    const { name, abv, subAlcohol } = data;

    const alcohol = new alcoholModel();
    alcohol.name = name;
    alcohol.abv = abv;
    alcohol.subAlcohol = subAlcohol;

    if (subAlcohol) {
      const subAlcoholArray = subAlcohol.map((item) => item.name);
      const subAlcoholset = new Set(subAlcoholArray);
      console.log(subAlcoholArray);
      console.log(subAlcoholset);
      if (subAlcoholArray.length !== subAlcoholset.size) {
        throw new Error(`${name}의 하위 술들 중 중복된 것이 있습니다.`);
      }
    }

    return alcohol
      .save()
      .then((savedData) => {
        console.log("Data saved successfully:", savedData);
      })
      .catch((error) => {
        if (error.name === "ValidationError") {
          console.error("Validation error:", error.message);
        } else if (error.name === "MongoError" && error.code === 11000) {
          console.error("Duplicate key error:", error.message);
        } else {
          console.error("Error saving data:", error);
        }
      });
  }

  async function getAlcohol(qurey) {
    return alcoholModel.find(getFilter(qurey));
  }

  async function updateAlcohol(filter, update) {
    return alcoholModel.findOneAndUpdate(
      getFilter(filter),
      { ...update },
      { upsert: false }
    );
  }

  async function deleteAlcohol(filter) {
    return alcoholModel.findOneAndDelete(getFilter(filter));
  }

  // ---

  async function addNonAlcohol(data) {
    const { name } = data;

    const nonAlcohol = new nonAlcoholModel();
    nonAlcohol.name = name;

    return nonAlcohol.save();
  }

  async function getNonAlcohol(qurey) {
    return nonAlcoholModel.find(getFilter(qurey));
  }

  async function updateNonAlcohol(filter, update) {
    return nonAlcoholModel.findOneAndUpdate(
      getFilter(filter),
      { ...update },
      { upsert: false }
    );
  }

  async function deleteNonAlcohol(filter) {
    return nonAlcoholModel.findOneAndDelete(getFilter(filter));
  }

  // ---

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

module.exports = AlcoholService;
