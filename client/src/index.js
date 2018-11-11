import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ScrollToTop from "./containers/ScrollToTop/ScrollToTop";
import { unregister as unregisterServiceWorker } from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import authReducer from "./store/AuthReducer/reducer";
import modalReducer from "./store/ModalReducer/reducer";

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
if (process.env.NODE_ENV === "production") {
  composeEnhancers = compose;
}

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

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
