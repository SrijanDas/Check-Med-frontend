import { combineReducers } from "redux";
import authReducer from "./authReducer";
import loadingReducer from "./loadingReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  shop: shopReducer,
});

export default rootReducer;
