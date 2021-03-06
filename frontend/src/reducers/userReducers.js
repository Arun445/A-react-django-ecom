import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_RESET,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_RESET,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RESET,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_PROFILE_RESET,
  USER_EDIT_REQUEST,
  USER_EDIT_SUCCESS,
  USER_EDIT_FAIL,
  USER_EDIT_RESET,
  USER_GOOGLE_AUTH_REQUEST,
  USER_GOOGLE_AUTH_SUCCESS,
  USER_GOOGLE_AUTH_FAIL,
  USER_GOOGLE_AUTH_FAIL_TIMES,
  USER_PASSWORD_RESET_REQUEST,
  USER_PASSWORD_RESET_SUCCESS,
  USER_PASSWORD_RESET_FAIL,
  USER_PASSWORD_RESET_RESET,
  USER_PASSWORD_RESET_CONFIRM_REQUEST,
  USER_PASSWORD_RESET_CONFIRM_SUCCESS,
  USER_PASSWORD_RESET_CONFIRM_FAIL,
  USER_PASSWORD_RESET_CONFIRM_RESET,
} from "../constants/userConstants";

export const userLoginReducer = (state = { errorTimes: 0 }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };

    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case USER_GOOGLE_AUTH_REQUEST:
      return { ...state, loading: true };

    case USER_GOOGLE_AUTH_SUCCESS:
      localStorage.setItem("access", action.payload.access);
      return { loading: false, googleInfo: action.payload };

    case USER_GOOGLE_AUTH_FAIL:
      return { ...state, loading: false, error: action.payload };

    case USER_GOOGLE_AUTH_FAIL_TIMES:
      return { ...state, errorTimes: action.payload };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };

    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userDetailReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };

    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };

    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    case USER_DETAILS_RESET:
      return { user: {} };

    default:
      return state;
  }
};

export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };

    case USER_UPDATE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };

    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case USER_UPDATE_RESET:
      return {};

    default:
      return state;
  }
};

export const usersListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true };

    case USER_LIST_SUCCESS:
      return {
        loading: false,
        users: action.payload.users,
        page: action.payload.page,
        pages: action.payload.pages,
      };

    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };

    case USER_LIST_RESET:
      return { users: [] };

    default:
      return state;
  }
};

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { loading: true };

    case USER_DELETE_SUCCESS:
      return { loading: false, success: true };

    case USER_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return { loading: true };

    case USER_PROFILE_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case USER_PROFILE_FAIL:
      return { loading: false, error: action.payload };

    case USER_PROFILE_RESET:
      return {};

    default:
      return state;
  }
};

export const userEditReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_EDIT_REQUEST:
      return { loading: true };

    case USER_EDIT_SUCCESS:
      return { loading: false, success: true };

    case USER_EDIT_FAIL:
      return { loading: false, error: action.payload };

    case USER_EDIT_RESET:
      return { user: {} };
    default:
      return state;
  }
};

export const userResetPasswordReducer = (
  state = { success: false },
  action
) => {
  switch (action.type) {
    case USER_PASSWORD_RESET_REQUEST:
      return { loading: true };

    case USER_PASSWORD_RESET_SUCCESS:
      return { loading: false, success: true };

    case USER_PASSWORD_RESET_FAIL:
      return { ...state, loading: false, error: action.payload };
    case USER_PASSWORD_RESET_RESET:
      return { success: false };

    default:
      return state;
  }
};

export const userResetPasswordConfirmReducer = (
  state = { success: false },
  action
) => {
  switch (action.type) {
    case USER_PASSWORD_RESET_CONFIRM_REQUEST:
      return { loading: true };

    case USER_PASSWORD_RESET_CONFIRM_SUCCESS:
      return {
        loading: false,
        success: true,
        changed: "Your password has been successfully changed",
      };

    case USER_PASSWORD_RESET_CONFIRM_FAIL:
      return {
        ...state,
        loading: false,
        error: "Password change session timeout",
      };
    case USER_PASSWORD_RESET_CONFIRM_RESET:
      return {
        success: false,
      };

    default:
      return state;
  }
};
