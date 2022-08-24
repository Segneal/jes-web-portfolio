export const groupBy = (arr) => {
  let property = "folder";
  return arr.reduce((acc, cur) => {
    acc[cur[property]] = [...(acc[cur[property]] || []), cur];
    return acc;
  }, []);
};

export const removeAlbum = (album) => {};
