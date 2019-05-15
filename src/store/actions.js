export const GET_IMAGES = "getImages";
export const GET_IMAGES_SUCCESS = "getImagesSuccess";
export const GET_IMAGES_FAILURE = "getImagesFailure";
export const GET_IMAGES_BY_NAME = "getImagesByName";
export const GET_IMAGES_BY_NAME_SUCCESS = "getImagesByNameSuccess";
export const GET_IMAGES_BY_NAME_FAILURE = "getImagesByNameFailure";
export const LIKE = "like";
export const LIKE_SUCCESS = "likeSuccess";
export const LIKE_FAILURE = "likeFailure";

export function getImagesAction(url) {
  return { type: GET_IMAGES, payload: url };
}

export function getImagesByNameAction(url) {
  return { type: GET_IMAGES_BY_NAME, payload: url };
}

export function likeAction(url) {
  return { type: LIKE, payload: url };
}
