import React from "react";
import { useParams } from "react-router-dom";

export default function Album(props) {
  const params = useParams();
  const showAlbum = () => {
    console.log({ ...props });
  };

  return <div>{showAlbum()}</div>;
}
