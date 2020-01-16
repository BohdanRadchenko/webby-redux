const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const bodyParser = require("body-parser");

PORT = config.get("port") || 5000;

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.json({extended: true}));

app.use("/api", require("./routes/films.routes"));

const start = async () => {
  try {
    await mongoose.connect(config.get("mongoUrl"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    app.listen(PORT, () => {
      console.log("Server started on port " + PORT);
      console.log("Local: http://localhost:" + PORT);
    });
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
};

start();
