import { useQuery } from "react-query";
import axios from "axios";
import { groupBy } from "../Assets/helpers/arrayHelpers";
import { filterSamples } from "../Assets/helpers/stringHelpers";

const API_URL = "https://jesi-server.herokuapp.com/getGalleries";

export default function useGalleries() {
  return useQuery("allGalleries", async () => {
    const res = await axios.get(API_URL);
    const data = await filterSamples(res.data.resources);
    return await groupBy(data);
  });
}
