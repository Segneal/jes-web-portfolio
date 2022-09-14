//index 0 titulo del album , index 1 array con contenido
const BASE_URL = "https://res.cloudinary.com/segneal/image/upload";
const QUALITY = "/c_scale,w_2000/q_auto:eco/";
const LOW_Q = "/e_blur:1000,q_1,f_auto/";

export const formatThumnail = (album) => {
  const albumTitle = album[0].split("/").splice(1, 1).join().replace("-", " ");
  //send the first photo in the array to be used as thumbnail photo
  const { thumbnailUrl, lowQualityThumnailUrl } = formatUrl(album[1][0]);
  //remove photoshoot prefix
  const albumName = album[0].split("/")[1];

  return { albumTitle, albumName, thumbnailUrl, lowQualityThumnailUrl };
};

export const formatUrl = (photo) => {
  let thumbnailUrl = BASE_URL + QUALITY + photo.public_id;
  let lowQualityThumnailUrl = BASE_URL + LOW_Q + photo.public_id;
  return { thumbnailUrl, lowQualityThumnailUrl };
};

export const filterSamples = (data) => {
  return data.filter((photo) => {
    return !photo.public_id.includes("sample");
  });
};
