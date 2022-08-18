import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Album({ album }) {
  console.log(album);
  const showAlbum = () => {
    // return album?.map((photo, idx) => {
    //   return (
    //     <div key={idx} className="grid-photo-item">
    //       <LazyLoadImage src={photo.secure_url} alt="" effect="opacity" />
    //     </div>
    //   );
    // });
  };

  return <div>{showAlbum()}</div>;
}
