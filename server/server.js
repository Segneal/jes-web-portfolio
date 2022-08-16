const PORT = 5500;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/api", (req, res) => {
  console.log(req);
  console.log("api req");
  res.json("data api");
});

app.get("/ShowPhotoshoots", (req, res) => {
  res.json("Photos");
});

app.listen(PORT, () => {
  console.log(`listening at "${PORT}`);
});
