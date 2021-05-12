import { API_URL } from "../../config";
import {
  LOGOUT,
  EMPTY_CART,
  REMOVE_FROM_CART,
  ADD_ITEM_TO_CART,
  AUTH,
  SHOW_LOADER,
  HIDE_LOADER,
} from "../constants";
import { fetchWithLoader } from "../../utils";

export const logout = (text) => ({
  type: LOGOUT,
});

export const emptyCart = () => ({
  type: EMPTY_CART,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});

export const addToCart = (id) => async (dispatch) => {
  fetchWithLoader(`${API_URL}/products/${id}`)
    .then((respons) => respons.json())
    .then((res) => dispatch(addItemToCart(res)))
    .catch((error) => console.log(error));
};

export const addItemToCart = (item) => ({
  type: ADD_ITEM_TO_CART,
  item,
});

export const auth = (token, userName) => ({
  type: AUTH,
  token,
  userName,
});

export const showLoader = () => ({
  type: SHOW_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});
