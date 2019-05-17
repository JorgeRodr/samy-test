import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp, faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faThumbsUp, faSearch);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});
