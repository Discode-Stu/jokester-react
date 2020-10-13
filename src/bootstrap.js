import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Router } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";

import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import firebase from "./components/config/fire";

import Layout from "./components/layout";

import reducers from "./reducers";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCompactDisc,
  faMicrophoneAlt,
  faStopCircle,
  faCloudDownloadAlt,
  faHome,
  faSignInAlt,
  faUserPlus,
  faSignOutAlt,
  faAddressCard,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ getFirebase })))
);

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

import "./style/main.scss";

import history from "./history";

library.add(
  faCompactDisc,
  faMicrophoneAlt,
  faStopCircle,
  faCloudDownloadAlt,
  faHome,
  faSignInAlt,
  faUserPlus,
  faSignOutAlt,
  faAddressCard,
  faCartPlus
);

function main() {
  ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router history={history}>
          <Layout></Layout>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
