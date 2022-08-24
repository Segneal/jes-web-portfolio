import React from "react";

const GET_GALLERIES = "getGalleries";

export default function useGetGalleries() {
  const [galleries, setGalleries] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState([false]);

  React.useEffect(() => {
    const getData = async () => {
      await fetch(`http://localhost:5500/${GET_GALLERIES}`)
        .then((response) => response.json())
        .then((data) => {
          setGalleries(groupBy(data.resources));
        });
    };
    getData();
  }, []);

  return { galleries, isLoading: false };
}

const groupBy = (arr) => {
  let property = "folder";
  return arr.reduce((acc, cur) => {
    acc[cur[property]] = [...(acc[cur[property]] || []), cur];
    return acc;
  }, []);
};

// galleries = data.resources.reduce(function (r, a) {
//   r[a.folder] = r[a.folder] || [];
//   r[a.folder].push(a);
//   return r;
// }, Object.create([]));
