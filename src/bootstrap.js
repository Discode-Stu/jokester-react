import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import reducers from "./reducers";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompactDisc, 
  faMicrophoneAlt,
  faStopCircle,
  faCloudDownloadAlt


} from "@fortawesome/free-solid-svg-icons";

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));



import "./style/main.scss";

library.add(faCompactDisc, faMicrophoneAlt, faStopCircle, faCloudDownloadAlt)

function main() {

  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Layout>
          
        </Layout>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
// document.querySelector('button').addEventListener('click', function() {
//     var context = new AudioContext();
//   });

