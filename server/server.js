const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
// pass the session to the connect sqlite3 module
// allowing it to inherit from session.Store
var SQLiteStore = require("connect-sqlite3")(session);
const passport = require("passport");
const passportConfig = require("./api/passport");
const config = require("./config/config");
const mongoose = require("mongoose");

const alcoholRouter = require("./api/routes/alcoholRouter");
const staticRouter = require("./api/routes/staticRouter");
const authRouter = require("./api/routes/authRouter");
const userRouter = require("./api/routes/userRouter");
const postRouter = require("./api/routes/postRouter");

const app = express();
const port = 8080;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: config.cookie_id,
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    store: new SQLiteStore({ db: "sessions.db", dir: "./sessions" }),
    cookie: { maxAge: 3600000 }, // 1 hours (= 1 * 60 * 60 * 1000 ms)
  })
);

passportConfig();
app.use(passport.authenticate("session")); // authenticate the session.

app.use(function (req, res, next) {
  var msgs = req.session.messages || [];
  res.locals.messages = msgs;
  res.locals.hasMessages = !!msgs.length;
  req.session.messages = [];
  next();
});

mongoose
  .connect(config.mongodb_url, {
    dbName: "cocktail_project_dev",
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

// 정적 파일 제공
app.use(express.static("public"));

app.use("/static", staticRouter);
app.use("/api/alcohol-management", alcoholRouter);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);

// error handling 미들웨어
app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    return res.status(403).json({ name: err.name, message: err.message });
  } else if (err.name === "MongoServerError" && err.code === 11000) {
    if (Object.values(err.keyValue)[0]) {
      return res.status(403).json({
        name: "DuplicationError",
        message: `${Object.values(err.keyValue)[0]}는 이미 있습니다.`,
      });
    }
    return res
      .status(403)
      .json({ name: "DuplicationError", message: "중복되는 값이 있습니다" });
  } else if (err.name === "MongoError") {
    return res.status(400).json({ message: err.message });
  } else if (err.name === "NotFoundError") {
    return res.status(404).json({ NotFoundError: err.message });
  }

  console.error(err);
  res.send(err);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
