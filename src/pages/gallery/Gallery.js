import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatThumnail } from "../../Assets/helpers/stringHelpers";
import Loading from "../../Components/UI/Loading";
import useGalleries from "../../services/useGalleries";
import { motion } from "framer-motion";
import LazyLoadImage from "../../Components/LazyLoadImage";

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
          <LazyLoadImage
            props={{
              lowQualtySrc: lowQualityThumnailUrl,
              highQualitySrc: thumbnailUrl,
            }}
          />
          <h1 className="album-card-title">{albumName}</h1>
        </Link>
      );
    });
  };

  //checks if api call is finished
  return isLoading ? (
    <Loading />
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="album-photo-wrapper"
    >
      {showGalleries()}
    </motion.div>
  );
}
