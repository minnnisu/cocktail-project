const { ObjectId } = require("mongodb");
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
    alcohol.abv = data.abv;
    alcohol.subAlcohols = data.subAlcohols;
    if (alcohol.subAlcohols) {
      alcohol.cocktails = undefined;
    }

    try {
      const result = await alcohol.save();
      return result;
    } catch (err) {
      throw err;
    }
  }

  async function getAlcohol(qurey) {
    return alcoholModel.find(makeFilter(qurey)).exec();
  }

  async function addNonAlcohol(data) {
    const nonAlcohol = new nonAlcoholModel();
    nonAlcohol.name = data.name;

    return nonAlcohol.save();
  }

  async function getNonAlcohol(qurey) {
    return nonAlcoholModel.find(makeFilter(qurey)).exec();
  }

  async function addCocktail(data) {
    const cocktail = new cocktailModel(data);
    cocktail.name = data.name;
    cocktail.tastes = data.tastes;
    cocktail.garnishes = data.garnishes;
    cocktail.recipe = data.recipe;
    cocktail.image_path = "";

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
        console.log(targetAlcoholDoc);

        if (alcohol.subAlcoholName) {
          for (const targetSubAlcohol of targetAlcoholDoc.subAlcohols) {
            if (targetSubAlcohol.name === alcohol.subAlcoholName) {
              return alcohol;
            }
          }

          throw new ValidationError(
            `${alcohol.subAlcoholName}에 대한 데이터가 등록되어 있지 않습니다.`
          );
        } else {
          if (
            targetAlcoholDoc.subAlcohols &&
            targetAlcoholDoc.subAlcohols.length > 0
          ) {
            throw new ValidationError(
              `${alcohol.name}은 하위 알코올이 존재합니다.`
            );
          }
        }

        return alcohol;
      })
    );

    cocktail.nonAlcohols = await Promise.all(
      data.nonAlcohols.map(async (nonAlcohol) => {
        const nonAlcoholDocs = await getNonAlcohol({ name: nonAlcohol.name });
        if (nonAlcoholDocs.length < 1) {
          throw new ValidationError(
            `${nonAlcohol.name}에 대한 데이터가 등록되어 있지 않습니다.`
          );
        }
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

  async function addCocktailImage(filter, file) {
    console.log(filter);
    console.log(file);
    if (!file) {
      throw new ValidationError("이미지가 없습니다.");
    }

    return cocktailModel.findOneAndUpdate(
      makeFilter(filter),
      { $set: { image_path: `${file.path}` } },
      { upsert: false }
    );
  }

  async function getCocktail(qurey) {
    return cocktailModel.find(makeFilter(qurey)).exec();
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
    addCocktailImage,
    getCocktail,
    updateCocktail,
    deleteCocktail,
  };
}

module.exports = AlcoholService;
