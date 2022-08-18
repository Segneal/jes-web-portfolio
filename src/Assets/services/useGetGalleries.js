import React from "react";

const GET_GALLERIES = "getGalleries";

export default function useGetGalleries() {
  const [galleries, setGalleries] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      await fetch(`http://localhost:5500/${GET_GALLERIES}`)
        .then((response) => response.json())
        .then((galls) => setGalleries(galls));
    };
    getData();
  }, []);

  return { galleries };
}
