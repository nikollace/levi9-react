import { combineReducers } from "redux";
import cartReducer from "./cart";
import authReducer from "./auth";
import loaderReducer from "./loader";

export default combineReducers({
  cart: cartReducer,
  auth: authReducer,
  loader: loaderReducer,
});
