import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5500",
});

export const getGalleries = () => {
  let data = api.get("/getGalleries").then((resp) => {
    console.log(resp.data);
  });
};
