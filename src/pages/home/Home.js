import React from "react";
import { formatUrl } from "../../Assets/helpers/stringHelpers";
import Loading from "../../Components/UI/Loading";
import useGalleries from "../../services/useGalleries";
import { motion } from "framer-motion";

const HOME_GALLERIE = "jesi-website";

export default function Home() {
  const { data, isLoading } = useGalleries();

  const displayPhotos = () => {
    return data[HOME_GALLERIE]?.map((photo, idx) => {
      const { thumbnailUrl, lowQualityThumnailUrl } = formatUrl(photo);
      return (
        <div key={idx} className="grid-photo-item">
          <img src={thumbnailUrl} alt={lowQualityThumnailUrl} />
        </div>
      );
    });
  };

  return isLoading ? (
    <Loading />
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid-photo-wrapper flex"
    >
      {displayPhotos()}
    </motion.div>
  );
}
