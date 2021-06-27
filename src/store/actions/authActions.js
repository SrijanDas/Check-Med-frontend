import * as actiontypes from "./authActionType";
import axios from "../../helpers/axios";

export const authStart = (userCredentials) => {
  return {
    type: actiontypes.AUTH_START,
  };
};

export const load_user = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("access");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
        Accept: "application/json",
      },
    };
    const res = await axios.get("/auth/users/me/", config);

    dispatch({
      type: actiontypes.AUTH_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: actiontypes.AUTH_FAIL,
      payload: error,
    });
  }
};

export const login = (userCredentials) => async (dispatch) => {
  const { email, password } = userCredentials;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = { email: email, password: password };

  try {
    const res = await axios.post("/auth/jwt/create/", body, config);

    dispatch({
      type: actiontypes.AUTH_SUCCESS,
      payload: res.data,
    });

    dispatch(load_user());
  } catch (error) {
    dispatch({
      type: actiontypes.AUTH_FAIL,
      payload: error,
    });
  }
};

export const authFail = (error) => {
  return {
    type: actiontypes.AUTH_FAIL,
    payload: error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  return {
    type: actiontypes.AUTH_LOGOUT,
  };
};

export const checkAuthenticated = () => async (dispatch) => {
  try {
    const access = localStorage.getItem("access");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ token: access });
    const res = await axios.post("/auth/jwt/verify/", body, config);
    if (res.data.code !== "token_not_valid") {
      dispatch({
        type: actiontypes.AUTH_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: actiontypes.AUTH_FAIL,
        error: "token not valid",
      });
    }
  } catch (error) {
    dispatch({
      type: actiontypes.AUTH_FAIL,
      payload: error,
    });
  }
};
