import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5500" });

export const getGalleries = async () => {
  const res = await axios.get("http://localhost:5500/getGalleries");
  return await res.data.resources;
};
