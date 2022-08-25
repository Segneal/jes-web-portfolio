import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../UI/Loading";
import { formatThumnail } from "../../../Assets/helpers/stringHelpers";
import { groupBy, removeAlbum } from "../../../Assets/helpers/arrayHelpers";
import { useQuery } from "react-query";
import * as api from "../../../services/galleries";

const HOUR = 1000 * 3600;

export default function Gallery() {
  const { data, isLoading } = useQuery("galerias", api.getGalleries, {
    staleTime: HOUR,
  });

  const showGalleries = () => {
    let galleries = groupBy(data);
    const albums = Object.entries(galleries);
    albums.pop();
    return albums?.map((album, idx) => {
      let { albumName, albumTitle, thumbnailUrl } = formatThumnail(album);
      return (
        <div key={idx} className="album-container">
          <Link to={`/galleries/${albumName}`}>
            <div className="album-thumbnail">
              <img src={thumbnailUrl} loading="lazy" alt=""></img>
            </div>
          </Link>
          <h1 className="thumbnail-title">{albumName}</h1>
        </div>
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
