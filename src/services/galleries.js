import axios from "axios";
import { groupBy } from "../Assets/helpers/arrayHelpers";

const API_URL = "https://jesi-server.herokuapp.com/getGalleries";

export const getGalleries = async () => {
  const res = await axios.get(API_URL);
  return await groupBy(res.data.resources);
};
