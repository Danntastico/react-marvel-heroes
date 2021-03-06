//I wrote this function to construct the path for the image,
//More info: https://developer.marvel.com/documentation/images
export const constructImagePath = (thumbnail, imageVariant) => {
  if (!!thumbnail) {
    return `${thumbnail.path}/${imageVariant}.${thumbnail.extension}`;
  }
};
