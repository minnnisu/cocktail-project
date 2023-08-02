const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/mongodb");
var cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const port = 8080;
const uri = db.MongoURI;

app.use(cors());
app.use(bodyParser.json());

// 알코올 값 추가

// 새로운 base-spirit-type 추가(테스트 완료)
app.post("/base-spirit-type", async (req, res) => {
  const newBaseSpiritType = req.body;
  const client = new MongoClient(uri);

  try {
    const database = client.db("cocktail_project");

    //유효성 검증
    const cocktailName = await database
      .collection("base_spirit_type")
      .findOne({ "name.en": newBaseSpiritType.name.en });
    if (cocktailName !== null) {
      res.status(403).json({
        error: "validationError",
        message: "This base spirit type already exists.",
      });
      return;
    }

    await database.collection("base_spirit_type").insertOne({
      name: { en: newBaseSpiritType.name.en, ko: newBaseSpiritType.name.ko },
      base_spirit: [],
    });

    res.status(201).send();
  } finally {
    await client.close();
  }
});

// 새로운 base-spirit 추가(테스트 완료)
app.post("/base-spirit", async (req, res) => {
  const newBaseSpirit = req.body;
  const client = new MongoClient(uri);

  try {
    const database = client.db("cocktail_project");

    //유효성 검증
    const cocktailName = await database
      .collection("base_spirit")
      .findOne({ "name.en": newBaseSpirit.name.en });
    if (cocktailName !== null) {
      res.status(403).json({
        error: "validationError",
        message: "This base spirit type already exists.",
      });
      return;
    }

    await database.collection("base_spirit").insertOne({
      name: { en: newBaseSpirit.name.en, ko: newBaseSpirit.name.ko },
      type: newBaseSpirit.type,
      cocktails: [],
    });

    const filter = { "name.en": newBaseSpirit.type };
    const update = {
      $push: {
        base_spirit: {
          name: newBaseSpirit.name.en,
        },
      },
    };

    await database.collection("base_spirit_type").updateOne(filter, update);

    res.status(201).send();
  } finally {
    await client.close();
  }
});

// 모든 기주에 해당하는 술에 대한 정보 가져오기(테스트 완료)
app.get("/base-spirit-type", async (req, res) => {
  const client = new MongoClient(uri);
  try {
    const database = client.db("cocktail_project");
    const result = await database
      .collection("base_spirit_type")
      .find({})
      .toArray();

    res.status(200).json(result);
  } finally {
    await client.close();
  }
});

// 모든 술에 대한 정보 가져오기
app.get("/base-spirit", async (req, res) => {
  const client = new MongoClient(uri);
  try {
    const database = client.db("cocktail_project");
    const result = await database.collection("base_spirit").find({}).toArray();

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
      return;
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
        const filter = { "name.en": ingredient.base_spirit_name };
        const update = {
          $push: {
            cocktails: {
              name: cocktail.name.en,
            },
          },
        };

        await database.collection("base_spirit").updateOne(filter, update);
      })
    );

    await database.collection("cocktail").insertOne(cocktail);
    res.status(201).send();
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
