// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//   state: (state = {}) => state
// });

// export default rootReducer;


import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
    form
});

export default rootReducer;