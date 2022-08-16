import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import photosUrls from "../../Assets/services/photosUrls";

export default function Home() {
  const photos = photosUrls;

  const displayPhotos = () => {
    return photos.map((photo, idx) => {
      console.log(photo);
      return (
        <div key={idx} className="grid-photo-item">
          <LazyLoadImage src={photo} alt="" effect="opacity" />
        </div>
      );
    });
  };

  return <div className="grid-photo-wrapper flex">{displayPhotos()}</div>;
}
