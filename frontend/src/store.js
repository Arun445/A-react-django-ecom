import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailReducer,
  productCreateReducer,
  productDeleteReducer,
  productUpdateReducer,
  productDeleteSelectedReducer,
  productReviewCreateReducer,
  productTopRatedReducer,
} from "./reducers/productListReducers";

import { cartReducer } from "./reducers/cartReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
  userDetailReducer,
  usersListReducer,
  userDeleteReducer,
  userProfileReducer,
  userEditReducer,
  userResetPasswordReducer,
  userResetPasswordConfirmReducer,
} from "./reducers/userReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  ordersGetReducer,
  ordersListReducer,
  orderIsDeliveredReducer,
} from "./reducers/orderReducers";

const reducer = combineReducers({
  cart: cartReducer,

  productList: productListReducer,
  productDetail: productDetailReducer,
  productCreate: productCreateReducer,
  productDelete: productDeleteReducer,
  productUpdate: productUpdateReducer,
  productDeleteSelected: productDeleteSelectedReducer,
  productReviewCreate: productReviewCreateReducer,
  productTopRated: productTopRatedReducer,

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetail: userDetailReducer,
  userUpdate: userUpdateReducer,
  usersList: usersListReducer,
  userDelete: userDeleteReducer,
  userProfile: userProfileReducer,
  userEdit: userEditReducer,
  userResetPassword: userResetPasswordReducer,
  userResetPasswordConfirm: userResetPasswordConfirmReducer,

  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  ordersGet: ordersGetReducer,
  ordersList: ordersListReducer,
  orderIsDelivered: orderIsDeliveredReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : "";

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,

    paymentMethod: paymentMethodFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage, errorTimes: 0 },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
