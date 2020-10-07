import {
    SET_JOKES,
    SET_PROFILE_JOKE
} from '../actions/types';

const INIT_STATE = {
    jokes: [],
    profileJokes: []
}

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case SET_JOKES:
            const jokes = action.payload
            return {
                ...state,
                jokes
            }
        case SET_PROFILE_JOKE:
            // const profileJokes = action.payload
            return {
                ...state,
                profileJokes: state.profileJokes.concat(action.payload)
            }
        default:
            return state;
    }
}
// return Object.assign({}, state, {
//     pages: state.pages.concat(action.payload)
//   });
