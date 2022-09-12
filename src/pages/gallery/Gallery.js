import React from "react";
import { Link } from "react-router-dom";
import { formatThumnail } from "../../Assets/helpers/stringHelpers";
import Loading from "../../Components/UI/Loading";
import useGalleries from "../../services/useGalleries";

export default function Gallery() {
  const { data, isLoading } = useGalleries();

  const showGalleries = () => {
    const albums = Object.entries(data);
    albums.pop();
    return albums?.map((album, idx) => {
      let { albumName, thumbnailUrl, lowQualityThumnailUrl } =
        formatThumnail(album);
      return (
        <Link key={idx} className="album-card" to={`/galleries/${albumName}`}>
          <img
            src={thumbnailUrl}
            loading="lazy"
            alt={lowQualityThumnailUrl}
          ></img>
          <h1 className="album-card-title">{albumName}</h1>
        </Link>
      );
    });
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div id="swup" className="album-photo-wrapper transition-fade">
        {showGalleries()}
      </div>
    </>
  );
}
