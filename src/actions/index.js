import { SET_JOKES, SET_PROFILE_JOKE } from "./types";

import axios from "axios";

export function addJoke() {
  return function (dispatch) {
    axios
      .get("https://dts-jokester-api.herokuapp.com/jokes")
      .then((response) => {
        console.log("response from SET_JOKES actions", response.data);
        dispatch({
          type: SET_JOKES,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error from SET_JOKES actions", error);
      });
  };
}

export function addProfileJoke(id) {
  return function (dispatch, getState, { getFirebase }) {
    const firestore = getFirebase().firestore();
    const authorId = getState().firebase.auth.uid;
    axios
      .get(`https://dts-jokester-api.herokuapp.com/joke/${id}`)
      .then((response) => {
        const profileJoke = response.data;
        firestore
          .collection("profileJokes")
          .add({ profileJoke, authorId: authorId, date: new Date() });
        console.log("response from SET_PROFILE_JOKE actions", response.data);
        dispatch({
          type: SET_PROFILE_JOKE,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error from SET_PROFILE_JOKE actions", error);
      });
  };
}

export const removeProfileJoke = (profileJoke) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("profileJokes")
      .doc(profileJoke.id)
      .delete()
      .then(() => {
        dispatch({
          type: "REMOVE_PROFILE_JOKE",
        });
      })
      .catch((err) => {
        dispatch({
          type: "REMOVE_PROFILE_JOKE_ERR",
          err,
        });
      });
  };
};
