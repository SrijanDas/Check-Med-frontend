import * as actionTypes from "../actions/authActionType";

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.LOGIN_SUCCESS:
      localStorage.setItem("access", payload.access);
      localStorage.setItem("refresh", payload.refresh);
      return {
        ...state,
        isAuthenticated: true,
        access: payload.access,
        refresh: payload.refresh,
      };

    case actionTypes.SIGNUP_FAIL:
    case actionTypes.LOGIN_FAIL:
    case actionTypes.LOGOUT:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        user: null,
      };

    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    case actionTypes.USER_LOADED_SUCCESS:
      return {
        ...state,
        user: payload,
      };

    case actionTypes.USER_LOADED_FAIL:
      return {
        ...state,
        user: null,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };
    case actionTypes.ACTIVATION_SUCCESS:
    case actionTypes.ACTIVATION_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default authReducer;
