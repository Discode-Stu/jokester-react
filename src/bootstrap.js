import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router } from "react-router-dom";
import Layout from "./components/layout";
import reducers from "./reducers";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Auth0Provider } from "@auth0/auth0-react";
import {
  faCompactDisc, 
  faMicrophoneAlt,
  faStopCircle,
  faCloudDownloadAlt,
  faHome,
  faSignInAlt,
  faUserPlus,
  faSignOutAlt,
  faAddressCard


} from "@fortawesome/free-solid-svg-icons";

const createStoreWithMiddleware = applyMiddleware()(compose((window.__REDUX_DEVTOOLS_EXTENSION__? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)(createStore)));

// window.onload=function(){
   
  
//   document.addEventListener("click", () =>  {
//     const ctx = new (window.AudioContext || window.webkitAudioContext)();

//     ctx.resume().then(() => console.log(ctx.state))
    
//   })
// }

// const ctx = new (window.AudioContext || window.webkitAudioContext)();

// const osc = ctx.createOscillator();

// osc.connect(ctx.destination);

// // console.log(ctx);

// osc.start(0);
// osc.stop(2);


// const btn = document.querySelector("button");

// // if(btn) {

//   window.onload=function(){
   
  
// btn.addEventListener("click", () =>  {
//   ctx.resume().then(() => console.log(ctx.state))
  
// })
//   }
// // }





// btn.addEventListener("click", () =>  {
//   const ctx = new (window.AudioContext || window.webkitAudioContext)();
//   const osc = ctx.createOscillator();
//   osc.connect(ctx.destination);

// })




import "./style/main.scss";

import history from './history';

library.add(faCompactDisc, faMicrophoneAlt, faStopCircle, faCloudDownloadAlt, faHome, faSignInAlt, faUserPlus, faSignOutAlt, faAddressCard)

function main() {

  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Auth0Provider
          domain="dev-f2-244jj.us.auth0.com"
          clientId="ty82aHR426NOk6mOehBiryz2bRy72jW5"
          redirectUri="http://127.0.0.1:3000/"
        >
          <Layout>
            
          </Layout>
        </Auth0Provider>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
// document.querySelector('button').addEventListener('click', function() {
//     var context = new AudioContext();
//   });



// const ctx = new (window.AudioContext || window.webkitAudioContext)();

// const osc = ctx.createOscillator();

// osc.connect(ctx.destination);

// // console.log(ctx);

// osc.start(0);
// osc.stop(2);


// const btn = document.querySelector("button");

// if(btn) {
// btn.addEventListener("click", () =>  {
//   ctx.resume().then(() => console.log(ctx.state))
  
// })
// }


