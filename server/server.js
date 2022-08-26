require("dotenv").config();
const PORT = 5500;
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const cloudinary = require("cloudinary");
const IMAGE_QUALITY = "q_auto:40";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.get("/getGalleries", async (req, res) => {
  await cloudinary.v2.api.resources(
    { max_results: 500 },
    function (error, result) {
      //group by folder
      console.log(result);
      res.json(result);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Listening port: ${PORT}`);
});
