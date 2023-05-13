import { createStore } from 'redux';

const initialState = {
  code: 'No code selected'
};

function reducer(state = initialState, action:any) {
  switch (action.type) {
    case 'SET_CODE':
      return { ...state, code: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;