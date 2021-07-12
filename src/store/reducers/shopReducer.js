import * as actionTypes from "../actions/shopActionTypes";

const initialState = {
  shop: null,
};

const shopReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SHOP_LOADED_SUCCESS:
    case actionTypes.SHOP_CREATE_SUCCESS:
      return {
        ...state,
        shop: payload,
      };

    case actionTypes.SHOP_CREATE_FAIL:
    case actionTypes.SHOP_LOADED_FAIL:
      return {
        ...state,
        shop: null,
      };
    default:
      return state;
  }
};

export default shopReducer;
