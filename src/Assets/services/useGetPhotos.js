import React from "react";

export default function useGetPhotos() {
  const [photos, setPhotos] = React.useState([]);

  return { photos };
}
