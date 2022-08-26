import React from "react";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { formatUrl } from "../../Assets/helpers/stringHelpers";
import Loading from "../UI/Loading";
import * as api from "../../services/galleries";
import { useQuery } from "react-query";

const HOME_GALLERIE = "jesi-website";
const HOUR = 1000 * 3600;

export default function Home() {
  const { data, isLoading } = useQuery("home-galerie", api.getGalleries, {
    staleTime: HOUR,
  });

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
    <div className="grid-photo-wrapper flex">{displayPhotos()}</div>
  );
}
