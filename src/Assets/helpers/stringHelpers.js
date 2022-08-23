export const formatTitle = (album) => {
  let albumTitle = album[0].split("/").splice(1, 1).join().replace("-", " ");
  let thumbnail = album[1]?.[0].url;
  let albumName = album[0].split("/")[1];
  return { albumTitle, thumbnail, albumName };
};
