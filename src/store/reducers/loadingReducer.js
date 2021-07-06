import * as loadingActionTypes from "../actions/loadingActionTypes";

const initialState = {
  isLoading: false,
  error: null,
};

const loadingReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case loadingActionTypes.LOADING_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case loadingActionTypes.LOADING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case loadingActionTypes.LOADING_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };

    default:
      return state;
  }
};

export default loadingReducer;
