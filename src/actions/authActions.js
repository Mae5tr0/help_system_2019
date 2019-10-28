import * as types from "./actionTypes";
import uuid from "uuid";
// import api from "api";

export function signIn(email, password) {
  return function(dispatch) {
    dispatch(singInProccess());

    // api.auth.signIn(email, password).then(response =>
    //     dispatch();
    // );
  };
}

export function signUp(email, password) {
  return function(dispatch) {
    dispatch(singUpProccess());

    setTimeout(() => {
      dispatch({
        type: types.SIGN_UP_SUCCESS,
        authToken: uuid()
      });
    }, 2000);
  };
}

export function logout() {
  return {
    type: types.LOGOUT
  };
}

function singUpProccess() {
  return {
    type: types.SIGN_UP_PROCESS
  };
}

// function singUpSuccess(token) {
//   return {
//     type: types.SIGN_UP_SUCCESS,
//     authToken: token
//   };
// }

function singInProccess(token) {
  return {
    type: types.SIGN_IN_PROCESS
  };
}

// function signInSuccess(token) {
//   return {
//     type: types.SIGN_IN_SUCCESS,
//     authToken: token
//   };
// }
