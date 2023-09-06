const path = require("path");
const fs = require("fs");
const { ObjectId } = require("mongodb");
const { ValidationError } = require("./ErrorHandler");
const alcoholModel = require("../models/alcohol");
const nonAlcoholModel = require("../models/nonAlcohol");
const cocktailModel = require("../models/cocktail");

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

function readAlcohol(query) {
  return alcoholModel.find(makeFilter(query)).exec();
}

async function updateAlcohol(filter, update) {
  if (!filter.id) {
    throw new ValidationError("id를 전달해주세요.");
  }
  const alcohol = await alcoholModel.findById(filter.id);

  if (!alcohol) {
    throw new ValidationError("알코올이 존재하지않습니다.");
  }

  if (update.abv) {
    if (!alcohol.abv) {
      throw new ValidationError(
        "기존에 도수가 존재하지 않기 때문에 도수를 수정할 수 없습니다."
      );
    }

    alcohol.abv = update.abv;
    alcohol.subAlcohols = undefined;
  }

  if (update.subAlcohols) {
    console.log(alcohol);

    if (!alcohol.subAlcohols || alcohol.subAlcohols.length < 1) {
      throw new ValidationError(
        "기존에 하위 알코올이 존재하지 않기 때문에 하위 알코올을 수정할 수 없습니다."
      );
    }

    if (!Array.isArray(update.subAlcohols)) {
      throw new ValidationError("추가로 삽입할 하위 알코올은 배열이여야합니다");
    }

    update.subAlcohols.map((subAlcohol) => {
      alcohol.subAlcohols.push(subAlcohol);
    });

    alcohol.abv = undefined;
    alcohol.cocktails = undefined;
  }

  try {
    const result = await alcohol.save();
    return result;
  } catch (error) {
    throw error;
  }
}

async function addNonAlcohol(data) {
  const nonAlcohol = new nonAlcoholModel();
  nonAlcohol.name = data.name;

  return nonAlcohol.save();
}

function readNonAlcohol(query) {
  return nonAlcoholModel.find(makeFilter(query)).exec();
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
      const alcoholDocs = await readAlcohol({ name: alcohol.name });
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
      const nonAlcoholDocs = await readNonAlcohol({ name: nonAlcohol.name });
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

  const updateData = {
    cocktailID: cocktail._id,
    name: cocktail.name,
  };
  await Promise.all(
    cocktail.alcohols.map(async (alcohol) => {
      if (alcohol.subAlcoholName) {
        const filter = {
          _id: alcohol.alcoholID,
          "subAlcohols.name": alcohol.subAlcoholName,
        };
        const update = {
          $push: {
            "subAlcohols.$.cocktails": updateData,
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
          cocktails: updateData,
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
          cocktails: updateData,
        },
      };
      await nonAlcoholModel.findOneAndUpdate(filter, update, {
        upsert: false,
      });
    })
  );

  return savedCocktail;
}

function readCocktail(query) {
  return cocktailModel.find(makeFilter(query)).exec();
}

async function addCocktailImage(filter, file) {
  if (!file) {
    throw new ValidationError("이미지가 없습니다.");
  }

  return cocktailModel.findOneAndUpdate(
    makeFilter(filter),
    { $set: { image_path: `${file.path}` } },
    { upsert: false }
  );
}

exports.getAlcohol = function (req, res, next) {
  readAlcohol(req.query)
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      next(err);
    });
};

exports.postAlcohol = function (req, res, next) {
  addAlcohol(req.body)
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      next(err);
    });
};

exports.putAlcohol = function (req, res, next) {
  updateAlcohol(req.body.filter, req.body.update)
    .then((result) => {
      res.status(203).send(result);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getNonAlcohol = function (req, res, next) {
  readNonAlcohol(req.query)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      next(err);
    });
};

exports.postNonAlcohol = function (req, res, next) {
  addNonAlcohol(req.body)
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getCocktail = function (req, res, next) {
  readCocktail(req.query)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      next(err);
    });
};

exports.postCocktail = function (req, res, next) {
  addCocktail(req.body)
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getCocktailIamge = function (req, res) {
  const imageName = req.params.imageName;
  const imagePath = path.join("./static/image/cocktail/", imageName);
  console.log(imagePath);

  fs.readFile(imagePath, (err, data) => {
    if (err) {
      res.status(404).send("Image not found");
      console.log(err);
    } else {
      res.writeHead(200, { "Content-Type": "image/jpeg" }); // 이미지의 Content-Type을 설정
      res.end(data); // 이미지 데이터를 클라이언트에게 전송
    }
  });
};

exports.postCocktailImage = function (req, res, next) {
  addCocktailImage(JSON.parse(req.body.data), req.file)
    .then(() => {
      res.status(201).send();
    })
    .catch((err) => {
      next(err);
    });
};
