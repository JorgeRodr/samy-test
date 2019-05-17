import React from "react";
import ReactDOM from "react-dom";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import { Gallery } from "./gallery";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp, faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faThumbsUp, faSearch);

Enzyme.configure({ adapter: new Adapter() });

describe("Gallery container", () => {
  let wrapper;
  const mockGetImagesAction = jest.fn();
  const imageMock = {
    type: "Image",
    id: 10,
    title: "Train in India-Agra",
    author: "SamyRoad",
    created_at: "2012-12-12T21: 08: 20Z",
    main_attachment: {
      big: "http://lorempixel.com/400/500/",
      small: "http://lorempixel.com/100/125/"
    },
    likes_count: 8,
    liked: true,
    links: [
      {
        rel: "avatar",
        uri: "http://lorempixel.com/250/250/",
        methods: "GET"
      },
      {
        rel: "like",
        uri: "http://localhost:8080/images/10-train-in-india-a-gra/like",
        methods: "POST"
      }
    ]
  };

  it("should call getImagesAction on init", () => {
    wrapper = shallow(<Gallery getImagesAction={mockGetImagesAction} />);
    expect(mockGetImagesAction).toHaveBeenCalled();
  });

  it("should call scrollEventListener on init", () => {
    const spy = jest.spyOn(Gallery.prototype, "scrollEventListener");
    wrapper = shallow(<Gallery getImagesAction={mockGetImagesAction} />);
    expect(spy).toHaveBeenCalled();
  });

  it("should create gallery if images has been received", () => {
    const spy = jest.spyOn(Gallery.prototype, "loadGallery");
    wrapper = shallow(
      <Gallery images={[imageMock]} getImagesAction={mockGetImagesAction} />
    );
    expect(spy).toHaveBeenCalled();
  });

  it("should call loadReturnToGallery if onSearch is true", () => {
    const spy = jest.spyOn(Gallery.prototype, "loadReturnToGallery");
    wrapper = shallow(
      <Gallery
        images={[imageMock]}
        getImagesAction={mockGetImagesAction}
        onSearch={true}
      />
    );
    expect(spy).toHaveBeenCalled();
  });

  it("should show loader if loading equals true", () => {
    const spy = jest.spyOn(Gallery.prototype, "showLoader");
    wrapper = shallow(
      <Gallery
        images={[imageMock]}
        getImagesAction={mockGetImagesAction}
        loading={true}
      />
    );
    expect(spy).toHaveBeenCalled();
  });

  it("should call likeAction on handleClickOnLike", () => {
    const mockLikeAction = jest.fn();
    wrapper = shallow(
      <Gallery
        getImagesAction={mockGetImagesAction}
        likeAction={mockLikeAction}
      />
    );
    wrapper.instance().handleClickOnLike();
    expect(mockLikeAction).toHaveBeenCalled();
  });

  it("should call getImagesByNameAction on handleSearch", () => {
    const mockGetImagesByNameAction = jest.fn();
    wrapper = shallow(
      <Gallery
        getImagesAction={mockGetImagesAction}
        getImagesByNameAction={mockGetImagesByNameAction}
      />
    );
    wrapper.instance().handleSearch();
    expect(mockGetImagesByNameAction).toHaveBeenCalled();
  });
});
