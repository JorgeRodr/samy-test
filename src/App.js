import React from "react";
import "./App.scss";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./store/reducer";
import saga from "./store/sagas";
import Gallery from "./containers/gallery/gallery";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

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
