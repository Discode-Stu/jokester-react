import { SET_JOKES, SET_PROFILE_JOKE } from './types';

import axios from 'axios';


export function addJoke() {
    return function(dispatch) {
        axios
        .get("https://dts-jokester-api.herokuapp.com/jokes")
        .then(response => {
            console.log('response from SET_JOKES actions', response.data);
            dispatch({
                type: SET_JOKES,
                payload: response.data
            })
        })
        .catch(error => {
            console.log('error from SET_JOKES actions', error);
        });
        
    }
}
export function addProfileJoke(id) {
    return function(dispatch, { getFirebase, getFireStore }) {
        axios
        .get(`https://dts-jokester-api.herokuapp.com/joke/${id}`)
        .then(response => {
            console.log('response from SET_PROFILE_JOKE actions', response.data);
            dispatch({
                type: SET_PROFILE_JOKE,
                payload: response.data
            })
        })
        .catch(error => {
            console.log('error from SET_PROFILE_JOKE actions', error);
        });
        
    }
}