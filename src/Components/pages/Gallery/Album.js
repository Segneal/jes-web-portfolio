import React, { useState } from "react";
import "../../../Assets/Styles/masonry.css";
import * as api from "../../../services/galleries";
import Loading from "../../UI/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { formatUrl } from "../../../Assets/helpers/stringHelpers";
import ImageModal from "../../UI/ImageModal";
import { useDisclosure } from "@chakra-ui/react";

const HOUR = 1000 * 3600;
const PREFIX = "photoshoots/";

export default function Album() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { albumName } = useParams();
  const { data, isLoading } = useQuery("current-album", api.getGalleries, {
    staleTime: HOUR,
  });
  const curAlbum = PREFIX + albumName;
  const [currentPhoto, setCurrentPhoto] = useState("");
  const openModal = (url) => {
    onOpen();
    setCurrentPhoto(url);
  };

  const displayAlbum = () => {
    return data?.map((photo, idx) => {
      if (photo.folder === curAlbum) {
        let url = formatUrl(photo);
        return (
          <div
            key={idx}
            className="grid-album-image"
            onClick={() => openModal(url)}
          >
            <img src={url} alt=""></img>
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
      <ImageModal
        currentPhoto={currentPhoto}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </div>
  );
}
