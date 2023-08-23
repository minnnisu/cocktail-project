const ValidationError = require("./ErrorHandler");

function AlcoholService({ alcoholModel, nonAlcoholModel, cocktailModel }) {
  function makeFilter(filter) {
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
    const alcohol = new alcoholModel();

    alcohol.name = data.name;

    if (data.subAlcohols && data.subAlcohols.length > 0) {
      if (data.abv) {
        throw new ValidationError(
          "subAlcohols과 abv는 둘 중 하나만 존재해야합니다."
        );
      }

      const subAlcoholNames = data.subAlcohols.map((subAlcohol) => {
        return subAlcohol.name;
      });
      const subAlcoholNameSet = new Set(subAlcoholNames);
      if (subAlcoholNames.length !== subAlcoholNameSet.size) {
        throw new ValidationError(
          `${data.name}의 하위 술 중에서 중복된 것이 있습니다.`
        );
      }
      alcohol.subAlcohols = data.subAlcohols;
    } else {
      if (!data.abv) {
        throw new ValidationError("abv의 값이 없습니다.");
      }

      alcohol.abv = data.abv;
      alcohol.subAlcohols = undefined;
    }

    return alcohol.save();
  }

  async function getAlcohol(qurey) {
    return alcoholModel.find(makeFilter(qurey)).exec();
  }

  // async function updateAlcohol(filter, update) {
  //   return alcoholModel.findOneAndUpdate(
  //     makeFilter(filter),
  //     { ...update },
  //     { upsert: false }
  //   );
  // }

  // async function deleteAlcohol(filter) {
  //   return alcoholModel.findOneAndDelete(makeFilter(filter));
  // }

  // ---

  async function addNonAlcohol(data) {
    const nonAlcohol = new nonAlcoholModel();
    nonAlcohol.name = data.name;

    return nonAlcohol.save();
  }

  async function getNonAlcohol(qurey) {
    return nonAlcoholModel.find(makeFilter(qurey)).exec();
  }

  // async function updateNonAlcohol(filter, update) {
  //   return nonAlcoholModel.findOneAndUpdate(
  //     makeFilter(filter),
  //     { ...update },
  //     { upsert: false }
  //   );
  // }

  // async function deleteNonAlcohol(filter) {
  //   return nonAlcoholModel.findOneAndDelete(makeFilter(filter));
  // }

  // ---

  async function addCocktail(data) {
    const cocktail = new cocktailModel(data);
    cocktail.name = data.name;
    cocktail.tastes = data.tastes;
    cocktail.garnishes = data.garnishes;
    cocktail.recipe = data.recipe;
    cocktail.image_url = data.image_url;

    cocktail.alcohols = await Promise.all(
      data.alcohols.map(async (alcohol) => {
        const alcoholDocs = await getAlcohol({ name: alcohol.name });
        if (alcoholDocs.length < 1) {
          throw new ValidationError(
            `${alcohol.name}에 대한 데이터가 등록되어 있지 않습니다.`
          );
        }

        const targetAlcoholDoc = alcoholDocs[0];
        alcohol.alcoholID = targetAlcoholDoc._id;

        if (alcohol.subAlcoholName) {
          for (const targetSubAlcohol of targetAlcoholDoc.subAlcohols) {
            if (targetSubAlcohol.name === alcohol.subAlcoholName) {
              return alcohol;
            }
          }

          throw new ValidationError(
            `${alcohol.subAlcoholName}에 대한 데이터가 등록되어 있지 않습니다.`
          );
        }

        return alcohol;
      })
    );

    cocktail.nonAlcohols = await Promise.all(
      data.nonAlcohols.map(async (nonAlcohol) => {
        const nonAlcoholDocs = await getNonAlcohol({ name: nonAlcohol.name });

        const targetNonAlcoholDoc = nonAlcoholDocs[0];
        nonAlcohol.nonAlcoholID = targetNonAlcoholDoc._id;

        return nonAlcohol;
      })
    );
    const savedCocktail = await cocktail.save();

    await Promise.all(
      cocktail.alcohols.map(async (alcohol) => {
        if (alcohol.subAlcoholName) {
          const filter = {
            _id: alcohol.alcoholID,
            "subAlcohols.name": alcohol.subAlcoholName,
          };
          const update = {
            $push: {
              "subAlcohols.$.cocktails": cocktail._id,
            },
          };
          await alcoholModel.findOneAndUpdate(filter, update, {
            upsert: false,
          });

          return;
        }

        const filter = {
          _id: alcohol.alcoholID,
        };
        const update = {
          $push: {
            cocktails: cocktail._id,
          },
        };
        await alcoholModel.findOneAndUpdate(filter, update, { upsert: false });
      })
    );

    await Promise.all(
      cocktail.nonAlcohols.map(async (nonAlcohol) => {
        const filter = { _id: nonAlcohol.nonAlcoholID };
        const update = {
          $push: {
            cocktails: cocktail._id,
          },
        };
        await nonAlcoholModel.findOneAndUpdate(filter, update, {
          upsert: false,
        });
      })
    );

    return savedCocktail;
  }

  async function getCocktail() {
    return cocktailModel.find().exec();
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
    addNonAlcohol,
    getNonAlcohol,
    addCocktail,
    getCocktail,
    updateCocktail,
    deleteCocktail,
  };
}

module.exports = AlcoholService;
