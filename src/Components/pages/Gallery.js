import React from "react";
import useGetGalleries from "../../Assets/services/useGetGalleries";

export default function Gallery() {
  const { galleries } = useGetGalleries();
  return <div>{galleries}sasrasa</div>;
}
