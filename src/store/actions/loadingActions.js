import * as loadingActionTypes from "./loadingActionTypes";
import { toast } from "react-toastify";

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
  toast.error(error, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  return dispatch({
    type: loadingActionTypes.LOADING_FAIL,
    payload: { error },
  });
};
