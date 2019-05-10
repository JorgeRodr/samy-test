export const GET_IMAGES = "getImages";
export const GET_IMAGES_SUCCESS = "getImagesSuccess";
export const GET_IMAGES_FAILURE = "getImagesFailure";
export const LIKE = "like";
export const LIKE_SUCCESS = "likeSuccess";
export const LIKE_FAILURE = "likeFailure";

export function getImages(page) {
  return { type: GET_IMAGES };
}

export function like(id) {
  // ...
}
