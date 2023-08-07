const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
var cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config/mongodb");
const { MongoClient } = require("mongodb");

const app = express();
const port = 8080;
const uri = db.MongoURI;

// 이미지 업로드를 위한 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "static/images/cocktails"); // 업로드된 파일을 저장할 디렉토리 경로
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // 저장될 파일명 설정
  },
});

const upload = multer({ storage });

app.use(cors());
app.use(bodyParser.json());

// 정적 파일 제공
//사용자가 127.0.0.1:3000/images/cat.jpg 로 접근한다면, 해당 파일을 public/images/cat.jpg에 존재하는지 검색한다.
app.use(express.static("public"));

// 새로운 base-spirit-type 추가(테스트 완료)
app.post("/base-spirit-type", async (req, res) => {
  const newBaseSpiritType = req.body;
  const client = new MongoClient(uri);

  try {
    const database = client.db("cocktail_project");

    //유효성 검증
    const cocktailName = await database
      .collection("base_spirit_type")
      .findOne({ name: newBaseSpiritType.name });
    if (cocktailName !== null) {
      return res.status(403).json({
        message: "This base spirit type already exists.",
      });
    }

    await database.collection("base_spirit_type").insertOne({
      name: newBaseSpiritType.name,
      base_spirits: [],
    });

    res.status(201).send();
  } catch (error) {
    res.status(500).send();
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
      .findOne({ name: newBaseSpirit.name });
    if (cocktailName !== null) {
      return res.status(403).json({
        error: "validationError",
        message: "This base spirit type already exists.",
      });
    }

    await database.collection("base_spirit").insertOne({
      name: newBaseSpirit.name,
      base_spirit_type: newBaseSpirit.base_spirit_type,
      alcohol: newBaseSpirit.alcohol,
      cocktails: [],
    });

    const filter = { name: newBaseSpirit.base_spirit_type };
    const update = {
      $push: {
        base_spirits: newBaseSpirit.name,
      },
    };

    await database.collection("base_spirit_type").updateOne(filter, update);

    res.status(201).send();
  } catch (error) {
    res.status(500).send();
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
  } catch (error) {
    res.status(500).send();
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
  } catch (error) {
    res.status(500).send();
  } finally {
    await client.close();
  }
});

// 칵테일 추가(테스트 완료)
app.post("/cocktail", upload.single("image"), async (req, res) => {
  const cocktail = JSON.parse(req.body.data);
  const client = new MongoClient(uri);

  // 칵테일 이미지 확인
  if (!req.file) {
    return res.status(400).send({ message: "please upload with image" });
  }

  cocktail.image_path = `${req.file.path}`;

  try {
    const database = client.db("cocktail_project");

    // 칵테일 이름 유효성 검사
    const cocktailName = await database
      .collection("cocktail")
      .findOne({ name: cocktail.name });
    if (cocktailName !== null) {
      return res.status(403).json({
        error: "validationError",
        message: "This cocktail already exists.",
      });
    }

    await Promise.all(
      cocktail.ingredients.map(async (ingredient, index) => {
        const filter = { name: ingredient.base_spirit_name };
        const update = {
          $push: {
            cocktails: cocktail.name,
          },
        };

        await database.collection("base_spirit").updateOne(filter, update);
      })
    );

    await database.collection("cocktail").insertOne(cocktail);
    res.status(201).send();
  } catch (error) {
    res.status(500).send();
  } finally {
    await client.close();
  }
});

// 모든 칵테일 정보 가져오기
app.get("/cocktail", async (req, res) => {
  const client = new MongoClient(uri);
  try {
    const database = client.db("cocktail_project");
    const result = await database.collection("cocktail").find({}).toArray();

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  } finally {
    await client.close();
  }
});

app.get("/static/images/cocktails/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join("./static/images/cocktails/", imageName);

  fs.readFile(imagePath, (err, data) => {
    if (err) {
      res.status(404).send("Image not found");
      console.log(err);
    } else {
      res.writeHead(200, { "Content-Type": "image/jpeg" }); // 이미지의 Content-Type을 설정
      res.end(data); // 이미지 데이터를 클라이언트에게 전송
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
