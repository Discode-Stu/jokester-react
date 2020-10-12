// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//   state: (state = {}) => state
// });

// export default rootReducer;


import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';


import jokesReducer from './jokesReducers';
import authReducer from './authReducer'

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form,
    jokesReducer,
    authReducer

});

export default rootReducer;