import { createAction, createReducer } from "@reduxjs/toolkit";
import {
  clearLS,
  getAccessTokenFromLS,
  getProfileFromLS,
  setAccessTokenToLS,
  setProfileToLS,
} from "../utils/auth.util";
import { splitJwt } from "../utils/splitJwt";
// import { clearLocalStorage, getAccessTokenFromLocal } from "../api/auth";

interface UserState {
  isAuthenticated: Boolean;
  user: any;
}

const initailState: UserState = {
  isAuthenticated: getProfileFromLS() ? true : false,

  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null,
};

export const checkIsAuthenticated = createAction<boolean>(
  "user/checkIsAuthenticated"
);

// export const setAccessToken = createAction<string>("user/setAccessToken");

export const addUser = createAction<any>("user/addUser");

export const logout = createAction("user/logout");

const userReducer = createReducer(initailState, (build) => {
  build
    .addCase(checkIsAuthenticated, (state, action) => {
      state.isAuthenticated = action.payload;
    })
    .addCase(addUser, (state, action) => {
      state.user = action.payload;
      setProfileToLS(action.payload);
    })

    .addCase(logout, (state) => {
      clearLS();
      state.isAuthenticated = false;
      state.user = null;
    });
});
export default userReducer;
