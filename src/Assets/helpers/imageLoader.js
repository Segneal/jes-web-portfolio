import { formatUrl } from "./stringHelpers";

export const cacheImages = async (imgs) => {
  // const promises = await imgs.map((img) => {
  //   let { thumbnailUrl } = formatUrl(img);
  //   return new Promise((resolve, reject) => {
  //     const loadImg = new Image();
  //     loadImg.src = thumbnailUrl;
  //     loadImg.onload = () => resolve(img);
  //   });
  // });
  // console.log(promises);
  // return await Promise.allSettled(promises);
};
