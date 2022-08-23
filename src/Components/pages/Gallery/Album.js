import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetGalleries from "../../../services/useGetGalleries";
import "../../../Assets/Styles/masonry.css";

const CURRENT_GALERIE_PREFIX = "photoshoots/";

export default function Album() {
  const navigate = useNavigate();
  const { albumName } = useParams();
  const { galleries, loading } = useGetGalleries();
  const currentAlbum = CURRENT_GALERIE_PREFIX + albumName;
  const pageTitle = albumName.replace("-", " ");

  const displayAlbum = () => {
    return galleries[currentAlbum]?.map((photo, idx) => {
      return (
        <div key={idx} className="grid-album-image">
          <img src={photo.url}></img>
        </div>
      );
    });
  };

  return (
    <div className="album-wrapper">
      <h1 className="album-title">{pageTitle}</h1>
      <div className="grid">{displayAlbum()}</div>
      <button
        className="previous-page-button"
        onClick={() => navigate(-1)}
      ></button>
    </div>
  );
}
