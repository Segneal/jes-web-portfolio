import React from "react";
import photosUrls from "../Assets/constants/photosUrls";

export default function Home() {
  const photos = photosUrls;

  const displayPhotos = () => {
    return photos.map((photo, idx) => {
      console.log(photo);
      return (
        <div key={idx} className="grid-photo-item">
          <img src={photo} alt="" loading="lazy"></img>
        </div>
      );
    });
  };

  return <div className="grid-photo-wrapper flex">{displayPhotos()}</div>;
}
