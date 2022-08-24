import React from "react";
import "../../../Assets/Styles/masonry.css";
import * as api from "../../../services/galleries";
import Loading from "../../UI/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";

const HOUR = 1000 * 3600;
const PREFIX = "photoshoots/";

export default function Album() {
  const navigate = useNavigate();
  const { albumName } = useParams();
  const { data, isLoading } = useQuery("current-album", api.getGalleries, {
    staleTime: HOUR,
  });
  const curAlbum = PREFIX + albumName;

  const displayAlbum = () => {
    return data?.map((photo, idx) => {
      if (photo.folder === curAlbum) {
        return (
          <div key={idx} className="grid-album-image">
            <img src={photo.url}></img>
          </div>
        );
      }
    });
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="album-wrapper">
      <div className="album-header">
        <h1 className="album-title">{albumName}</h1>
        <button className="previous-page-button" onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>
      <div className="grid">{displayAlbum()}</div>
    </div>
  );
}
