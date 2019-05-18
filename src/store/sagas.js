import { call, put, takeLatest } from "redux-saga/effects";
import { get, getByName, like } from "../services/image.service";
import {
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE,
  GET_IMAGES,
  LIKE,
  LIKE_SUCCESS,
  LIKE_FAILURE,
  GET_IMAGES_BY_NAME,
  GET_IMAGES_BY_NAME_SUCCESS,
  GET_IMAGES_BY_NAME_FAILURE
} from "./actions";

export function* getImages(action) {
  try {
    const images = yield call(get, action.payload);
    yield put({ type: GET_IMAGES_SUCCESS, payload: images });
  } catch (e) {
    yield put({ type: GET_IMAGES_FAILURE, payload: e });
  }
}

export function* getImagesByName(action) {
  try {
    const images = yield call(getByName, action.payload);
    yield put({ type: GET_IMAGES_BY_NAME_SUCCESS, payload: images });
  } catch (e) {
    yield put({ type: GET_IMAGES_BY_NAME_FAILURE, payload: e });
  }
}

export function* likeImage(action) {
  try {
    const image = yield call(like, action.payload);
    yield put({ type: LIKE_SUCCESS, payload: image });
  } catch (e) {
    yield put({ type: LIKE_FAILURE, payload: e });
  }
}

export function* saga() {
  yield takeLatest(GET_IMAGES, getImages);
  yield takeLatest(GET_IMAGES_BY_NAME, getImagesByName);
  yield takeLatest(LIKE, likeImage);
}
