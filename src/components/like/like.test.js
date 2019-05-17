import React from "react";
import ReactDOM from "react-dom";
import { Like } from "./like";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

library.add(faThumbsUp);

describe("like component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Like />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
