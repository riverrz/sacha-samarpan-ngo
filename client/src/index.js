import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ScrollToTop from "./containers/ScrollToTop/ScrollToTop";
import { unregister as unregisterServiceWorker } from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./store/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
unregisterServiceWorker();
