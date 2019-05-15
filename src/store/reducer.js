import { GET_IMAGES_SUCCESS, GET_IMAGES, LIKE_SUCCESS } from "./actions";

const initialState = {
  images: [],
  pagination: null,
  loading: false,
  likedImage: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES: {
      return { ...state, loading: true };
    }

    case GET_IMAGES_SUCCESS:
      const images = state.images.concat(action.payload.data);
      const pagination = action.payload.pagination;
      return {
        ...state,
        images,
        pagination,
        loading: false
      };

    case LIKE_SUCCESS:
      return { ...state, images: updateImages(state.images, action.payload) };

    default:
      return state;
  }
}

export function getImagesSelector(state) {
  return state.images;
}

export function getPaginationSelector(state) {
  return state.pagination;
}

export function getLoadingSelector(state) {
  return state.loading;
}

function updateImages(images, payload) {
  images.forEach((img, index) => {
    if (img.id === payload.id) {
      images[index].liked = payload.liked;
      images[index].likes_count = payload.likes_count;
    }
  });
  return images.map(function(x) {
    return x;
  });
}
