//index 0 titulo del album , index 1 array con contenido

const BASE_URL = "http://res.cloudinary.com/segneal/image/upload";
const QUALITY = "/q_50/";

export const formatThumnail = (album) => {
  let albumTitle = album[0].split("/").splice(1, 1).join().replace("-", " ");
  //send the first photo in the array to be used as thumbnail photo
  let thumbnailUrl = formatUrl(album[1][0]);
  //remove photoshoot prefix
  let albumName = album[0].split("/")[1];
  return { albumTitle, albumName, thumbnailUrl };
};

export const formatUrl = (photo) => {
  return BASE_URL + QUALITY + photo.public_id;
};
