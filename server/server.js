const express = require("express");
const morgan = require("morgan");
var cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config/mongodb");
const mongoose = require("mongoose");
const alcoholRouter = require("./api/routes/alcoholRouter");

const app = express();
const port = 8080;

mongoose
  .connect(db.MongoURI, { dbName: "cocktail_project" })
  .then(() => {
    console.log("Successfully connected to mongodb");
  })
  .catch((err) => console.error(err));

app.use(cors());
app.use(bodyParser.json());
// app.use(morgan);

// 정적 파일 제공
//사용자가 127.0.0.1:3000/images/cat.jpg 로 접근한다면, 해당 파일을 public/images/cat.jpg에 존재하는지 검색한다.
app.use(express.static("public"));

app.use("/api/alcohol", alcoholRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
