const express = require("express");
var logger = require("morgan");
var cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MemoryStore = require("memorystore")(session);
const passport = require("passport");
const passportConfig = require("./api/passport");
const config = require("./config/config");
const mongoose = require("mongoose");

const alcoholRouter = require("./api/routes/alcoholRouter");
const staticRouter = require("./api/routes/staticRouter");
const authRouter = require("./api/routes/authRouter");

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
    store: new MemoryStore({
      checkPeriod: 86400000, // 24 hours (= 24 * 60 * 60 * 1000 ms)
    }),
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

app.use("/static", staticRouter);
app.use("/api/alcohol-management", alcoholRouter);
app.use("/api/auth", authRouter);

// 정적 파일 제공
//사용자가 127.0.0.1:3000/images/cat.jpg 로 접근한다면, 해당 파일을 public/images/cat.jpg에 존재하는지 검색한다.
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
