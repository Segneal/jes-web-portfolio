import React from "react";
import { Link } from "react-router-dom";
import useGetGalleries from "../../../Assets/services/useGetGalleries";
import Loading from "../../UI/Loading";

export default function Gallery() {
  const { galleries, loading } = useGetGalleries();

  const showGalleries = () => {
    const albums = Object.entries(galleries);
    albums.pop();
    return albums?.map((album, idx) => {
      let albumName = album[0].split("/").splice(1, 1).join().replace("-", " ");
      let thumbnail = album[1]?.[0].url;
      return (
        <div key={idx} className="album-container">
          <Link to={`galleries/${idx}`}>
            <div className="album-thumbnail">
              <img src={thumbnail} loading="lazy"></img>
            </div>
          </Link>
          <h1 className="thumbnail-title">{albumName}</h1>
        </div>
      );
    });
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="album-photo-wrapper">{showGalleries()}</div>
      )}
    </div>
  );
}
