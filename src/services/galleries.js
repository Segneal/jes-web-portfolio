import axios from "axios";
import { groupBy } from "../Assets/helpers/arrayHelpers";

export const getGalleries = async () => {
  const res = await axios.get("http://localhost:5500/getGalleries");
  return await groupBy(res.data.resources);
};
