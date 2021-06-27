import * as actionTypes from "../actions/authActionType";

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isFetching: false,
  isAuthenticated: false,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        access: payload.access,
        refresh: payload.refresh,
        isAuthenticated: true,
        isFetching: false,
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      };
    case actionTypes.AUTH_LOGOUT:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        user: null,
      };

    default:
      return state;
  }
};

export default authReducer;
