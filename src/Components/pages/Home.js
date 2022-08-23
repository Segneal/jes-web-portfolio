import React from "react";
import "react-lazy-load-image-component/src/effects/opacity.css";
import useGetGalleries from "../../services/useGetGalleries";
import Loading from "../UI/Loading";

const GALLERIE = "jesi-website";
export default function Home() {
  const { galleries, isLoading } = useGetGalleries();

  const displayPhotos = () => {
    return galleries[GALLERIE]?.map((photo, idx) => {
      return (
        <div key={idx} className="grid-photo-item">
          <img src={photo.secure_url} alt="" loading="lazy" />
        </div>
      );
    });
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="grid-photo-wrapper flex">{displayPhotos()}</div>
  );
}
