import { get, getByName, like } from "./image.service";

describe("Image service", () => {
  it("should call fetch on get", () => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise
    });
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);
    get().then(res => {
      expect(res).toEqual({});
      expect(global.fetch).toHaveBeenCalled();
    });
  });

  it("should call fetch on like", () => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise
    });
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);
    like().then(res => {
      expect(res).toEqual({});
      expect(global.fetch).toHaveBeenCalled();
    });
  });

  it("should call fetch on getByName", () => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise
    });
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);
    getByName('name').then(res => {
      expect(res).toEqual({});
      expect(global.fetch).toHaveBeenCalled();
    });
  });
});
