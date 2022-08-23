import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../UI/Loading";
import useGetGalleries from "../../../services/useGetGalleries";

const formatTitle = (album) => {
  let albumTitle = album[0].split("/").splice(1, 1).join().replace("-", " ");
  let thumbnail = album[1]?.[0].url;
  let albumName = album[0].split("/")[1];
  return { albumTitle, thumbnail, albumName };
};

export default function Gallery() {
  const { galleries, isLoading } = useGetGalleries();

  const showGalleries = () => {
    const albums = Object.entries(galleries);
    albums.pop();
    return albums?.map((album, idx) => {
      const { albumTitle, thumbnail, albumName } = formatTitle(album);
      return (
        <Link to={`${albumName}`} key={idx} className="album-container">
          <div className="album-thumbnail">
            <img src={thumbnail} alt="" loading="lazy"></img>
          </div>
          <h1 className="thumbnail-title">{albumTitle}</h1>
        </Link>
      );
    });
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="album-photo-wrapper">{showGalleries()}</div>
  );
}
