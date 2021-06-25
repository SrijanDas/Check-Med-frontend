import axios from "./axios";
import * as authActions from "../store/actions/authActions";
import { useDispatch } from "react-redux";

export const dispatch = useDispatch();

export const loginCall = (email, password) => {
  return (dispatch) => {
    dispatch(authActions.authStart());
    try {
      const res = axios.post("/token/login/", {
        username: email,
        password: password,
      });
      const token = res.data.auth_token;
      const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
      localStorage.setItem("token", token);
      localStorage.setItem("expirationDate", expirationDate);
      dispatch(authActions.authSuccess(token));
      dispatch(checkAuthTimout(3600));
    } catch (error) {
      dispatch(authActions.authFail(error));
    }
  };
};

// export const signUpCall = (email, password) => {
//   return (dispatch) => {
//     dispatch(authActions.authStart());
//     try {
//       const res = axios.post("/users/", {
//         username: email,
//         email: email,
//         password: password,
//       });
//       const token = res.data.auth_token;
//       const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
//       localStorage.setItem("token", token);
//       localStorage.setItem("expirationDate", expirationDate);
//       dispatch(authActions.authSuccess(token));
//       dispatch(checkAuthTimout(3600));
//     } catch (error) {
//       dispatch(authFail(error));
//     }
//   };
// };

export const checkAuthTimout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(authActions.logout());
    }, expirationTime * 1000);
  };
};
