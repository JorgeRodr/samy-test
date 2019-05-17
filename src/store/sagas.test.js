import saga from "./sagas";
import {
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE,
  GET_IMAGES_BY_NAME,
  GET_IMAGES_BY_NAME_SUCCESS,
  GET_IMAGES_BY_NAME_FAILURE,
  LIKE,
  LIKE_SUCCESS,
  LIKE_FAILURE
} from "./actions";
import { getImages, getImagesByName, likeImage } from "./sagas";
import { call, put, select } from "redux-saga/effects";
import { get, like } from "../services/image.service";

describe("Redux sagas", () => {
  it("should call get service", () => {
    const action = {
      type: GET_IMAGES,
      payload: "url"
    };
    const iterator = getImages(action);
    const expectedYield = call(get, action.payload);

    const actualYield = iterator.next().value;

    expect(actualYield).toStrictEqual(expectedYield);
  });

  it("should call get by name service", () => {
    const action = {
      type: GET_IMAGES_BY_NAME,
      payload: "url"
    };
    const iterator = getImagesByName(action);
    const expectedYield = call(get, action.payload);

    const actualYield = iterator.next().value;

    expect(actualYield).toStrictEqual(expectedYield);
  });

  it("should call like image service", () => {
    const action = {
      type: LIKE,
      payload: "id"
    };
    const iterator = likeImage(action);
    const expectedYield = call(like, action.payload);

    const actualYield = iterator.next().value;

    expect(actualYield).toStrictEqual(expectedYield);
  });

  it("should execute getImage saga", async () => {
    const action = { payload: "url" };
    const expectedPayload = undefined;
    const iterator = getImages(action);

    expect(iterator.next().value).toEqual(call(get, action.payload));
    expect(iterator.next().value).toEqual(
      put({ type: GET_IMAGES_SUCCESS, payload: expectedPayload })
    );
    expect(iterator.throw(new Error("error")).value).toEqual(
      put({ type: GET_IMAGES_FAILURE, payload: new Error("error") })
    );
  });

  it("should execute getImageByNameSaga", async () => {
    const action = { payload: "url" };
    const expectedPayload = undefined;
    const iterator = getImagesByName(action);

    expect(iterator.next().value).toEqual(call(get, action.payload));
    expect(iterator.next().value).toEqual(
      put({ type: GET_IMAGES_BY_NAME_SUCCESS, payload: expectedPayload })
    );
    expect(iterator.throw(new Error("error")).value).toEqual(
      put({ type: GET_IMAGES_BY_NAME_FAILURE, payload: new Error("error") })
    );
  });

  it("should fail get cause no connection", async () => {
    const action = { payload: "id" };
    const expectedPayload = undefined;
    const iterator = likeImage(action);

    expect(iterator.next().value).toEqual(call(like, action.payload));
    expect(iterator.next().value).toEqual(
      put({ type: LIKE_SUCCESS, payload: expectedPayload })
    );
    expect(iterator.throw(new Error("error")).value).toEqual(
      put({ type: LIKE_FAILURE, payload: new Error("error") })
    );
  });
});
