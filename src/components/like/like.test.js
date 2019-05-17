import React from "react";
import ReactDOM from "react-dom";
import { Like } from "./like";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

library.add(faThumbsUp);

describe("like component", () => {
  let wrapper;
  let mockClick = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Like onClick={mockClick} />);
  });
  it("should emit event on click", () => {
    wrapper.find(".gallery__icon-like").simulate("click");
    expect(mockClick).toHaveBeenCalled();
  });
});
