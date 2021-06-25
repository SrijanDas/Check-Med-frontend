import authReducer from "./reducers/authReducer";
import { createStore } from "redux";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  auth: authReducer,
});

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
