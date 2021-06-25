import * as actiontypes from "./actionType";

export const authStart = () => {
  return {
    type: actiontypes.AUTH_START,
  };
};
export const authSuccess = (token) => {
  return {
    type: actiontypes.AUTH_SUCCESS,
    token,
  };
};

export const authFail = (error) => {
  return {
    type: actiontypes.AUTH_FAIL,
    error,
  };
};

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("expirationDate");
  return {
    type: actiontypes.AUTH_LOGOUT,
  };
};
