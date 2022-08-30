import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../UI/Loading";
import { formatThumnail } from "../../../Assets/helpers/stringHelpers";

import useGalleries from "../../../services/useGalleries";

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
          <h1>{albumName}</h1>
        </Link>
      );
    });
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div className="album-photo-wrapper">{showGalleries()}</div>
    </>
  );
}
//  return (
//    <div key={idx} className="album-container">
//      <Link to={`galleries/${albumName}`}>
//        <div className="thumbnail">
//          <img src="" loading="lazy" alt=""></img>
//        </div>
//      </Link>
//      <h1 className="thumbnail-title">{[album]}</h1>
//    </div>
//  );
