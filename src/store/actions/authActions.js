import * as actiontypes from "./authActionType";
import axios from "../../helpers/axios";
import { loadingFail } from "./loadingActions";
import { loadShop } from "./shopActions";

export const load_user = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.get("/auth/users/me/", config);

      dispatch({
        type: actiontypes.USER_LOADED_SUCCESS,
        payload: res.data,
      });

      // loading shop of user
      dispatch(loadShop(res.data));
    } catch (error) {
      dispatch({
        type: actiontypes.USER_LOADED_FAIL,
      });
    }
  } else {
    dispatch({
      type: actiontypes.USER_LOADED_FAIL,
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
      type: actiontypes.LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(load_user());
  } catch (error) {
    console.log(error);
    dispatch({
      type: actiontypes.LOGIN_FAIL,
    });
    dispatch(loadingFail("Invalid Credentials"));
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  return {
    type: actiontypes.LOGOUT,
  };
};

export const checkAuthenticated = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({ token: localStorage.getItem("access") });

    try {
      const res = await axios.post("/auth/jwt/verify/", body, config);

      if (res.data.code !== "token_not_valid") {
        dispatch({
          type: actiontypes.AUTH_SUCCESS,
        });
      } else {
        dispatch({
          type: actiontypes.AUTH_FAIL,
        });
      }
    } catch (error) {
      dispatch({
        type: actiontypes.AUTH_FAIL,
      });
    }
  } else {
    dispatch({
      type: actiontypes.AUTH_FAIL,
    });
  }
};

export const signup = (userCredentials) => async (dispatch) => {
  const { email, password, re_password } = userCredentials;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = { email, password, re_password };

  try {
    const res = await axios.post("/auth/users/", body, config);
    dispatch({
      type: actiontypes.SIGNUP_SUCCESS,
      payload: res.data,
    });

    dispatch(load_user());
  } catch (error) {
    dispatch({
      type: actiontypes.SIGNUP_FAIL,
    });
  }
};

export const verify = (uid, token) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = { uid, token };

  try {
    const res = await axios.post("/auth/users/activation/", body, config);

    dispatch({
      type: actiontypes.ACTIVATION_SUCCESS,
      payload: res.data,
    });

    dispatch(load_user());
  } catch (error) {
    dispatch({
      type: actiontypes.ACTIVATION_FAIL,
    });
  }
};
