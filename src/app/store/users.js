import { createAction, createSlice } from "@reduxjs/toolkit";
import authService from "../service/auth.service";
import userService from "../service/user.service";

const initialState = {
  entities: null,
  api: null,
  isLoading: false,
  error: null,
  auth: false,
  userId: null,
  isLoggedIn: false,
  isVerify: false,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    usersInitialize: (state) => {
      state;
      state.isLoading = false;
    },
    usersClearError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    usersRequested: (state) => {
      state.isLoading = true;
    },
    userGetApi: (state, action) => {
      state.api = action.payload;
      state.isLoading = false;
    },
    userUnVerify: (state, action) => {
      state.isVerify = action.payload.isVerify;
      state.api = action.payload.api;
    },
    userReceived: (state, action) => {
      state.entities = action.payload;
      state.userId = action.payload._id;
      state.isLoading = false;
    },
    usersRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    authRequested: (state) => {
      state.isLoading = true;
    },
    authRequestFailed: (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    verifyRequestSend: (state) => {
      state.error = null;
      state.isLoading = false;
    },
    verifyRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    userCreatedVerify: (state, action) => {
      state.isVerify = action.payload.content;
      state.api = action.payload.api;
      state.isLoading = false;
    },
    userLoggedOut: (state) => {
      state.entities = null;
      state.isLoggedIn = false;
      state.isVerify = false;
      state.auth = null;
    },
    userUpdateSuccessed: (state, action) => {
      state.entities[
        state.entities.findIndex((u) => u._id === action.payload._id)
      ] = action.payload;
      state.isLoading = false;
    },
    authRequested: (state) => {
      state.error = null;
    },
  },
});

const { reducer: usersReducer, actions } = usersSlice;
const {
  usersRequested,
  usersClearError,
  userCreatedVerify,
  userReceived,
  usersRequestFailed,
  authRequestSuccess,
  authRequestFailed,
  userLoggedOut,
  userUpdateSuccessed,
  verifyRequestSend,
  verifyRequestFailed,
  userUnVerify,
  userGetApi,
} = actions;

const authRequested = createAction("users/authRequested");
const userUpdateRequested = createAction("users/userUpdateRequested");
const userUpdateFailed = createAction("users/userUpdateFailed");

export const authorizeUser = () => async (dispatch) => {
  dispatch(authRequested());
  try {
    const { content } = await userService.get();

    dispatch(userReceived(content));
  } catch (error) {
    dispatch(verifyRequestFailed(error.message));
  }
};

export const RemoveVerifyUser = () => async (dispatch) => {
  dispatch(userUnVerify({ isVerify: false, api: null }));
};

export const clearUsersError = () => async (dispatch) => {
  dispatch(authRequested());
  dispatch(usersClearError(null));
};

export const Verify = (payload) => async (dispatch) => {
  dispatch(usersRequested());
  try {
    const { content } = await authService.verify(payload);
    dispatch(userCreatedVerify(content));
  } catch (error) {
    dispatch(
      verifyRequestFailed(
        error?.response.data?.message
          ? error?.response.data.message
          : error?.message
      )
    );
  }
};

export const getApiUrl = () => async (dispatch) => {
  dispatch(usersRequested());
  try {
    const { content } = await userService.getApi();

    dispatch(userGetApi(content));
  } catch (error) {
    dispatch(verifyRequestFailed(error.message));
  }
};

export const getIsLoggedIn = () => (state) => state.user.isLoggedIn;
export const getDataStatus = () => (state) => state.user.dataLoaded;
export const getUsersLoadingStatus = () => (state) => state.user.isLoading;
export const getCurrentUserId = () => (state) => state.users.auth.userId;
export const getAuthErrors = () => (state) => state.user.error;
export const getIsVerifyUser = () => (state) => state.user.isVerify;

export default usersReducer;
