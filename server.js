const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/mongodb");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const port = 8080;
const uri = db.MongoURI;

app.use(bodyParser.json());

// 새로운 base-liquor-type 추가(테스트 완료)
app.post("/base-liquor-type", async (req, res) => {
  const newBaseLiquorType = req.body;
  const client = new MongoClient(uri);

  try {
    const database = client.db("cocktail_project");

    //유효성 검증
    const cocktailName = await database
      .collection("base_liquor_type")
      .findOne({ "name.en": newBaseLiquorType.name.en });
    if (cocktailName !== null) {
      res.status(403).json({
        error: "validationError",
        message: "This base liquor type already exists.",
      });
    }

    await database.collection("base_liquor_type").insertOne({
      name: { en: newBaseLiquorType.name.en, ko: newBaseLiquorType.name.ko },
      base_liquor: [],
    });

    res.status(200).send();
  } finally {
    await client.close();
  }
});

// 새로운 base-liquor 추가(테스트 완료)
app.post("/base-liquor", async (req, res) => {
  const newBaseLiquor = req.body;
  const client = new MongoClient(uri);

  try {
    const database = client.db("cocktail_project");

    //유효성 검증
    const cocktailName = await database
      .collection("base_liquor")
      .findOne({ "name.en": newBaseLiquor.name.en });
    if (cocktailName !== null) {
      res.status(403).json({
        error: "validationError",
        message: "This base liquor type already exists.",
      });
    }

    await database.collection("base_liquor").insertOne({
      name: { en: newBaseLiquor.name.en, ko: newBaseLiquor.name.ko },
      type: newBaseLiquor.type,
      cocktails: [],
    });

    const filter = { "name.en": newBaseLiquor.type };
    const update = {
      $push: {
        base_liquor: {
          name: newBaseLiquor.name.en,
        },
      },
    };

    await database.collection("base_liquor_type").updateOne(filter, update);

    res.status(200).send();
  } finally {
    await client.close();
  }
});

// 모든 술에 대한 정보 가져오기(테스트 완료)
app.get("/base-liquor-type", async (req, res) => {
  const client = new MongoClient(uri);
  try {
    const database = client.db("cocktail_project");
    const result = await database
      .collection("base_liquor_type")
      .find({})
      .toArray();

    res.status(200).json(result);
  } finally {
    await client.close();
  }
});

// 칵테일 이름 유효성 검증(테스트 완료)
app.get("/cocktail/name/validation", async (req, res) => {
  const client = new MongoClient(uri);
  try {
    const database = client.db("cocktail_project");
    const cocktailName = await database
      .collection("cocktail")
      .findOne({ "name.en": req.query.name });
    if (cocktailName !== null) {
      res.status(403).json({
        error: "validationError",
        message: "This cocktail already exists.",
      });
    }

    res.status(200).send();
  } finally {
    await client.close();
  }
});

// 칵테일 이름 유효성 검증(테스트 완료)
app.get("/cocktail/name/validation", async (req, res) => {
  const client = new MongoClient(uri);
  try {
    const database = client.db("cocktail_project");
    const cocktailName = await database
      .collection("cocktail")
      .findOne({ "name.en": req.query.name });
    if (cocktailName !== null) {
      res.status(403).json({
        error: "validationError",
        message: "This cocktail already exists.",
      });
    }

    res.status(200).send();
  } finally {
    await client.close();
  }
});

// 칵테일 추가(테스트 완료)
app.post("/cocktail", async (req, res) => {
  const cocktail = req.body;
  const client = new MongoClient(uri);
  try {
    const database = client.db("cocktail_project");

    await Promise.all(
      cocktail.ingredients.map(async (ingredient, index) => {
        const filter = { "name.en": ingredient.base_liquor_name };
        const update = {
          $push: {
            cocktails: {
              name: cocktail.name.en,
            },
          },
        };

        await database.collection("base_liquor").updateOne(filter, update);
      })
    );

    await database.collection("cocktail").insertOne(cocktail);
    res.status(200).send();
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
