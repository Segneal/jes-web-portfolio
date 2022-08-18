import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import useGetGalleries from "../../Assets/services/useGetGalleries";

const GALLERIE = "jesi-website";
export default function Home() {
  const { galleries } = useGetGalleries();

  const displayPhotos = () => {
    console.log(galleries);
    return galleries[GALLERIE]?.map((photo, idx) => {
      return (
        <div key={idx} className="grid-photo-item">
          <img src={photo.secure_url} alt="" loading="lazy" />
        </div>
      );
    });
  };

  return <div className="grid-photo-wrapper flex">{displayPhotos()}</div>;
}
