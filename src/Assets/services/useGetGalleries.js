import React from "react";

export default function useGetGalleries() {
  const [showFolders, setShowFolders] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      fetch("/api")
        .then((response) => response)
        .then((data) => {
          setShowFolders(data);
        });
    };
    getData();
  }, []);

  return { showFolders };
}
