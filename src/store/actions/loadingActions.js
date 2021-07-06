import * as loadingActionTypes from "./loadingActionTypes";

export const loadingStart = () => async (dispatch) => {
  return dispatch({
    type: loadingActionTypes.LOADING_START,
  });
};

export const loadingSuccess = () => async (dispatch) => {
  return dispatch({
    type: loadingActionTypes.LOADING_SUCCESS,
  });
};

export const loadingFail = (error) => async (dispatch) => {
  return dispatch({
    type: loadingActionTypes.LOADING_FAIL,
    payload: { error },
  });
};
