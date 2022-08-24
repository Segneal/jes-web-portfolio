import React from "react";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { formatUrl } from "../../Assets/helpers/stringHelpers";
import useGetGalleries from "../../services/useGetGalleries";
import Loading from "../UI/Loading";

const HOME_GALLERIE = "jesi-website";

export default function Home() {
  const { galleries, isLoading } = useGetGalleries();

  const displayPhotos = () => {
    return galleries[HOME_GALLERIE]?.map((photo, idx) => {
      let url = formatUrl(photo);
      return (
        <div key={idx} className="grid-photo-item">
          <img src={url} alt="" loading="lazy" />
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
