// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//   state: (state = {}) => state
// });

// export default rootReducer;


import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';

import jokesReducer from './jokesReducers';
import authReducer from './authReducer'

const rootReducer = combineReducers({
    jokesReducer,
    authReducer

});

export default rootReducer;