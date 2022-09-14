import React, { useEffect, useState } from "react";
import "../Assets/Styles/styles.css";

export default function LazyLoadImage({ props }) {
  const { lowQualtySrc, highQualitySrc } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [currentPhoto, setCurrentPhoto] = useState(lowQualtySrc);

  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = highQualitySrc;
    // When image is loaded replace the image's src and set loading to false
    imageToLoad.onload = () => {
      setIsLoading(false);
      setCurrentPhoto(imageToLoad.src);
    };
  }, []);

  return (
    <img
      src={currentPhoto}
      className="progressive-load"
      style={{
        opacity: isLoading ? 0.5 : 1,
        transition: "opacity .15s linear",
      }}
      alt=""
      loading="lazy"
    />
  );
}
