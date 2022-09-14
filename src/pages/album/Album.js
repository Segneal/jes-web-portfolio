import React, { useEffect, useState } from "react";
import "./masonry.css";
import Loading from "../../Components/UI/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { formatUrl } from "../../Assets/helpers/stringHelpers";
import ImageModal from "../gallery/ImageModal";
import { Image, useDisclosure } from "@chakra-ui/react";
import useGalleries from "../../services/useGalleries";
import { motion } from "framer-motion";
import { cacheImages } from "../../Assets/helpers/imageLoader";
import LazyLoadImage from "../../Components/LazyLoadImage";
const PREFIX = "photoshoots/";

export default function Album() {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState({ current: "", id: "" });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { albumName } = useParams();
  const curAlbum = PREFIX + albumName;
  const { data, isLoading } = useGalleries();

  const openModal = (url, idx) => {
    setCurrentPhoto({ current: url, id: idx });
    onOpen();
  };

  const preloadImages = async () => {
    await cacheImages(data[curAlbum]).then(setIsImagesLoaded(true));
  };

  const displayAlbum = () => {
    data.pop();
    return data[curAlbum]?.map((photo, idx) => {
      let { thumbnailUrl, lowQualityThumnailUrl } = formatUrl(photo);
      return (
        <div
          onClick={() => openModal(thumbnailUrl, idx)}
          className="grid-album-image"
        >
          <LazyLoadImage
            key={idx}
            props={{
              lowQualtySrc: lowQualityThumnailUrl,
              highQualitySrc: thumbnailUrl,
            }}
          />
        </div>
      );
    });
  };

  useEffect(() => {
    preloadImages();
  }, [data]);

  //checks if api call is finished
  return isLoading ? (
    <Loading />
  ) : (
    <motion.div
      className="album-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="album-header">
        <h1 className="album-title">{albumName}</h1>
        <button className="previous-page-button" onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>
      <div className="grid">{displayAlbum()}</div>
      <ImageModal
        currentPhoto={currentPhoto.current}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </motion.div>
  );
}
