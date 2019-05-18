import React from "react";
import ReactDOM from "react-dom";
import { Reload } from "./reload";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

library.add(faRedo);

describe("Reload component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Reload />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
