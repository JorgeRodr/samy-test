import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

library.add(faSearch);

describe("Header component", () => {
  let wrapper;
  let mockSubmit = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Header onSubmit={mockSubmit} />);
  });

  it("should call onSubmit when submit form", () => {
    const eventMock = {
      preventDefault: jest.fn(),
      target: [{ value: "value" }]
    };
    wrapper.instance().submit(eventMock);
    expect(mockSubmit).toHaveBeenCalled();
  });
});
