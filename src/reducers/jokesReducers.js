import {
  SET_JOKES,
  SET_PROFILE_JOKE,
  REMOVE_PROFILE_JOKE,
} from "../actions/types";

import { toast } from "react-toastify";

const INIT_STATE = {
  jokes: [],
  profileJokes: []
};

export default function (state = INIT_STATE, action) {
  switch (action.type) {
    case SET_JOKES:
      const jokes = action.payload;
      return {
        ...state,
        jokes,
      };
    case SET_PROFILE_JOKE: {
      toast.success("Joke added to profile!");
      return {
        ...state,
        profileJokes: state.profileJokes.concat(action.payload),
      };
    }

    case REMOVE_PROFILE_JOKE: {
      toast.dark("Removed joke from profile!");
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
