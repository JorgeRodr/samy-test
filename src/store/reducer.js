import { LIKE, GET_IMAGES_SUCCESS } from "./actions";

const initialState = {
  images: null,
  pagination: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LIKE:
      return { ...state, images: updateImages(state.images) };

    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.payload.data,
        pagination: action.payload.pagination
      };

    default:
      return state;
  }
}

function updateImages(images, payload) {
  images.forEach((img, index) => {
    if (img.id === payload.id) {
      images[index].liked = payload.liked;
      images[index].likes_count = payload.likes_count;
    }
  });

  return images;
}
