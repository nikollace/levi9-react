import { LOGOUT, AUTH } from "../constants";

const initialState = {
  auth: localStorage.getItem("auth") || false,
  userName: localStorage.getItem("userName") || null,
  token: localStorage.getItem("token") || null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        auth: true,
        token: action.token,
        userName: action.userName,
      };

    case LOGOUT:
      return {
        ...state,
        auth: false,
        token: null,
        userName: null,
      };
    default:
      return state;
  }
};

export default authReducer;
