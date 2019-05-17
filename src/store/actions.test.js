import {
  GET_IMAGES,
  GET_IMAGES_BY_NAME,
  LIKE,
  getImagesAction,
  getImagesByNameAction,
  likeAction
} from "./actions";

describe("Redux actions", () => {
  it("should return a valid action for getImagesAction", () => {
    const expectedAction = { type: GET_IMAGES, payload: "url" };
    expect(getImagesAction("url")).toStrictEqual(expectedAction);
  });

  it("should return a valid action for getImagesByNameAction", () => {
    const expectedAction = { type: GET_IMAGES_BY_NAME, payload: "url" };
    expect(getImagesByNameAction("url")).toStrictEqual(expectedAction);
  });

  it("should return a valid action for likeAction", () => {
    const expectedAction = { type: LIKE, payload: "url" };
    expect(likeAction("url")).toStrictEqual(expectedAction);
  });
});
