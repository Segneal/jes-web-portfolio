import React from "react";
import useGetGalleries from "../../../Assets/services/useGetGalleries";
import Album from "./Album";

const HOME = "jesi-website";

export default function Gallery() {
  const { galleries } = useGetGalleries();
  const albums = Object.entries(galleries);
  albums.pop();

  const showGalleries = () => {
    return albums?.map((album, idx) => {
      let albumName = album[0].split("/").splice(1, 1).join().replace("-", " ");
      let thumbnail = album[1]?.[0].url;
      return (
        <div className="album-container">
          <div key={idx} className="album-thumbnail">
            <img src={thumbnail}></img>
          </div>
          <h1 className="thumbnail-title">{albumName}</h1>
        </div>
      );
    });
  };

  return <div className="album-photo-wrapper">{showGalleries()}</div>;
}
