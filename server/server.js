const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const config = require("./config/config");
const mongoose = require("mongoose");
const alcoholRouter = require("./api/routes/alcoholRouter");
const staticRouter = require("./api/routes/staticRouter");
const authRouter = require("./api/routes/authRouter");

const app = express();
const port = 8080;

// var SQLiteStore = require("connect-sqlite3")(session);
const passportConfig = require("./passport");
passportConfig();

mongoose
  .connect(config.mongodb_url, {
    dbName: "cocktail_project",
    autoIndex: true,
  })
  .then(() => {
    console.log("Successfully connected to mongodb");
  })
  .catch((err) => console.error(err));

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "OPTIONS"],
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const SQLiteStore = require("connect-sqlite3")(session);
// app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser(config.cookie_id));
app.use(
  session({
    secret: config.cookie_id,
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore({ db: "sessions.db", dir: "./var/db" }),
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

app.use(passport.initialize()); // 요청 객체에 passport 설정을 심음
app.use(passport.session()); // req.session 객체에 passport정보를 추가 저장

// 정적 파일 제공
//사용자가 127.0.0.1:3000/images/cat.jpg 로 접근한다면, 해당 파일을 public/images/cat.jpg에 존재하는지 검색한다.
app.use(express.static("public"));

app.use("/static", staticRouter);
app.use("/api/alcohol-management", alcoholRouter);
app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
