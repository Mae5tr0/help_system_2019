import * as types from './actionTypes';
import uuid from 'uuid';

export function signIn() {
  return function(dispatch) {
    setTimeout(() => {
      dispatch(signInSuccess());
    }, 2000);
  };
}

export function signUp() {
  return function(dispatch) {
    setTimeout(() => {
      dispatch({
        type: types.SIGN_UP_SUCCESS,
        authToken: uuid(),  
      });
    }, 2000);
  };
}

export function logout() {
  return {
    type: types.LOGOUT
  };
}

// function singUpSuccess() {
//   return function(dispatch) {
//     setTimeout(() => {
//       dispatch({
//         type: types.SIGN_UP_SUCCESS,
//         authToken: uuid(),  
//       });
//     });
//   };
// }

function signInSuccess() {
  return {
    type: types.SIGN_IN_SUCCESS,
    authToken: uuid(),
  };
}
