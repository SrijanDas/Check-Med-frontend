import * as shopActionTypes from "./shopActionTypes";
import axios from "../../helpers/axios";

export const loadShop = (user) => async (dispatch) => {
  try {
    const body = { id: user.id };
    const res = await axios.post("get-shop/", body);
    if (res.status === 200) {
      dispatch({
        type: shopActionTypes.SHOP_LOADED_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: shopActionTypes.SHOP_LOADED_FAIL,
      });
      return;
    }
  } catch (error) {
    console.log(error);
    return;
  }
};

export const createShop = (user, formData) => async (dispatch) => {
  const body = {
    user: user.id,
    name: formData.shopName,
    address: formData.stateName,
    state: formData.stateName,
    district: formData.district,
    pincode: formData.pin,
  };

  try {
    const res = await axios.post("/shop/create/", body);
    if (res.status === 201) {
      dispatch({
        type: shopActionTypes.SHOP_CREATE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: shopActionTypes.SHOP_CREATE_FAIL,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
