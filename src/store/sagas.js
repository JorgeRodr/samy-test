import { call, put, takeLatest } from "redux-saga/effects";
import { get } from "../services/image.service";
import { GET_IMAGES_SUCCESS, GET_IMAGES_FAILURE, GET_IMAGES } from "./actions";

function* getImages(action) {
  try {
    const images = yield call(get);
    yield put({ type: GET_IMAGES_SUCCESS, payload: images });
  } catch (e) {
    yield put({ type: GET_IMAGES_FAILURE, payload: e });
  }
}

function* saga() {
  yield takeLatest(GET_IMAGES, getImages);
}

export default saga;
