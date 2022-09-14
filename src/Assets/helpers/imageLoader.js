import { formatUrl } from "./stringHelpers";

const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    const loadImg = new Image();
    loadImg.src = url;
    loadImg.onerror = (err) => reject(err);
    resolve(url);
  });
};

export const thumbnailLoader = async (thumnails) => {
  const promises = [];
  promises = await thumnails?.forEach((thumnail) => {
    thumnail !== undefined && loadImage(thumnail);
  });
  return await Promise.all(promises);
};

export const imageLoader = async (imageArr) => {
  const promises = [];
  promises = await imageArr?.forEach((image) => {
    let { thumbnailUrl } = formatUrl(image);
    loadImage(thumbnailUrl);
  });
  return await Promise.all(promises);
};
