export const GET_IMAGES = "getImages";
export const GET_IMAGES_SUCCESS = "getImagesSuccess";
export const GET_IMAGES_FAILURE = "getImagesFailure";
export const LIKE = "like";
export const LIKE_SUCCESS = "likeSuccess";
export const LIKE_FAILURE = "likeFailure";

export function getImagesAction(url) {
  return { type: GET_IMAGES, payload: url };
}

export function likeAction(url) {
  return { type: LIKE, payload: url };
}
