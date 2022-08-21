import React from "react";

const GET_GALLERIES = "getGalleries";

export default function useGetGalleries() {
  const [galleries, setGalleries] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await fetch(`http://localhost:5500/${GET_GALLERIES}`)
        .then((response) => response.json())
        .then((galls) => setGalleries(galls));
      setLoading(false);
    };
    getData();
  }, []);

  return { galleries, loading };
}
