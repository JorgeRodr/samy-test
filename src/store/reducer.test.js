import reducer from "./reducer";
import {
  getImagesSelector,
  getPaginationSelector,
  getLoadingSelector,
  getOnSearchSelector
} from "./reducer";
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

describe("Redux reducer", () => {
  const initialState = {
    images: [],
    pagination: null,
    loading: false,
    onSearch: false,
    error: null
  };

  it("should return loading on get images", () => {
    const expectedState = { ...initialState, loading: true };
    expect(reducer(initialState, { type: GET_IMAGES })).toStrictEqual(
      expectedState
    );
  });

  it("should return loading on get images by name", () => {
    const expectedState = { ...initialState, loading: true };
    expect(reducer(initialState, { type: GET_IMAGES_BY_NAME })).toStrictEqual(
      expectedState
    );
  });

  it("should return images on get images success", () => {
    const expectedState = { ...initialState, images: [{}], pagination: [{}] };
    const action = {
      type: GET_IMAGES_SUCCESS,
      payload: {
        data: [{}],
        pagination: [{}]
      }
    };
    expect(reducer(initialState, action)).toStrictEqual(expectedState);
  });

  it("should return images by name on success and on search should equal true", () => {
    const expectedState = {
      ...initialState,
      images: [{}],
      pagination: [{}],
      onSearch: true
    };
    const action = {
      type: GET_IMAGES_BY_NAME_SUCCESS,
      payload: {
        data: [{}],
        pagination: [{}]
      }
    };
    expect(reducer(initialState, action)).toStrictEqual(expectedState);
  });

  it("should return updated images on like success", () => {
    const imageMock = {
      id: 1
    };
    const expectedState = {
      ...initialState,
      images: [
        {
          id: 1,
          liked: false,
          likes_count: 4
        }
      ]
    };

    const state = {
      ...initialState,
      images: [
        {
          id: 1,
          liked: true,
          likes_count: 5
        }
      ]
    };
    const action = {
      type: LIKE_SUCCESS,
      payload: {
        id: 1,
        liked: false,
        likes_count: 4
      }
    };
    expect(reducer(state, action)).toStrictEqual(expectedState);
  });

  it("should return error when images error action is called", () => {
    const expectedState = { ...initialState, error: "error" };
    const action = {
      type: GET_IMAGES_FAILURE,
      payload: "error"
    };
    expect(reducer(initialState, action)).toStrictEqual(expectedState);
  });

  it("should return error when images by name error action is called", () => {
    const expectedState = { ...initialState, error: "error" };
    const action = {
      type: GET_IMAGES_BY_NAME_FAILURE,
      payload: "error"
    };
    expect(reducer(initialState, action)).toStrictEqual(expectedState);
  });

  it("should return images", () => {
    expect(getImagesSelector(initialState)).toEqual([]);
  });

  it("should return pagination", () => {
    expect(getPaginationSelector(initialState)).toEqual(null);
  });

  it("should return loading", () => {
    expect(getLoadingSelector(initialState)).toEqual(false);
  });

  it("should return on search", () => {
    expect(getOnSearchSelector(initialState)).toEqual(false);
  });
});
