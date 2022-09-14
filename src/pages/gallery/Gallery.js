import React, { useState } from "react";
import { Link } from "react-router-dom";
import { formatThumnail } from "../../Assets/helpers/stringHelpers";
import Loading from "../../Components/UI/Loading";
import useGalleries from "../../services/useGalleries";
import { motion } from "framer-motion";
import { thumbnailLoader } from "../../Assets/helpers/imageLoader";

export default function Gallery() {
  const { data, isLoading } = useGalleries();
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);

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

  const preloadImages = async () => {
    const albums = Object.entries(data);
    albums.pop();
    const albumThumnails = albums?.map((album, idx) => {
      let { thumbnailUrl } = formatThumnail(album);
      return thumbnailUrl;
    });
    await thumbnailLoader(albumThumnails).then(setIsImagesLoaded(true));
  };

  //checks if api call is finished
  return isLoading ? (
    <Loading />
  ) : //checks if images are loaded
  !isImagesLoaded ? (
    <>
      {preloadImages()}
      <Loading />
    </>
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="album-photo-wrapper transition-fade"
    >
      {showGalleries()}
    </motion.div>
  );
}
