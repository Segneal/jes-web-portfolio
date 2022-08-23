require("dotenv").config();
const PORT = 5500;
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const cloudinary = require("cloudinary");
const IMAGE_QUALITY = "q_auto:good";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.get("/getGalleries", async (req, res) => {
  let galleries = [];
  await cloudinary.v2.api.resources(
    { max_results: 500, quality_override: "good" },
    function (error, result) {
      //group by folder
      galleries = result.resources.reduce(function (r, a) {
        r[a.folder] = r[a.folder] || [];
        r[a.folder].push(a);
        return r;
      }, Object.create([]));
    }
  );
  console.log(galleries);
  res.json(galleries);
});

app.listen(PORT, () => {
  console.log(`Listening port: ${PORT}`);
});
