import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Router } from "react-router-dom";
import Layout from "./components/layout";
import reducers from "./reducers";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Auth0Provider } from "@auth0/auth0-react";
import createAuth0Client from "@auth0/auth0-spa-js";
import {
  reduxFirestore,
  getFirestore,
  createFirestoreInstance,
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import { composeWithDevTools } from "redux-devtools-extension";
import firebase from "./components/config/fire";
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

// const createStoreWithMiddleware = compose(
//   applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//   reduxFirestore(fire),
//   reactReduxFirebase(fire))(compose(
//   ((window.__REDUX_DEVTOOLS_EXTENSION__? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)(createStore))));

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

// const auth0 = await createAuth0Client({
//   domain: 'dev-f2-244jj.us.auth0.com',
//   client_id: '3Tw1ZDNwyCT9GiRvsuA3IZkW8HfvlAyz'
// });

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function main() {
  ReactDOM.render(
    <Provider store={store}>
      {/* <Provider store={createStoreWithMiddleware(reducers)}> */}
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router history={history}>
          {/* <Auth0Provider */}
          {/* // domain={domain}
            // clientId={clientId}
            domain="dev-f2-244jj.us.auth0.com"
            clientId="ty82aHR426NOk6mOehBiryz2bRy72jW5"
            redirectUri="http://localhost:3000/profile"
          > */}
          <Layout></Layout>
          {/* </Auth0Provider> */}
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
