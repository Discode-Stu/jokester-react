import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router } from "react-router-dom";
import Layout from "./components/layout";
import reducers from "./reducers";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompactDisc, 
  faMicrophoneAlt,
  faStopCircle,
  faCloudDownloadAlt,
  faHome,
  faSignInAlt,
  faUserPlus


} from "@fortawesome/free-solid-svg-icons";

const createStoreWithMiddleware = applyMiddleware()(compose((window.__REDUX_DEVTOOLS_EXTENSION__? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)(createStore)));



import "./style/main.scss";

import history from './history';

library.add(faCompactDisc, faMicrophoneAlt, faStopCircle, faCloudDownloadAlt, faHome, faSignInAlt, faUserPlus)

function main() {

  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
          
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
// document.querySelector('button').addEventListener('click', function() {
//     var context = new AudioContext();
//   });

