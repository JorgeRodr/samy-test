import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { registerInterceptor } from "./services/interceptor";
import { store } from "./store";
import Gallery from "./containers/gallery/gallery";

library.add(faThumbsUp);
registerInterceptor();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Gallery />
      </div>
    </Provider>
  );
}

export default App;
