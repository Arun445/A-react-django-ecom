import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_ADD_SHIPPING_ADDRESS,
  CART_ADD_PAYMENT_METHOD,
  CART_CREAR_ITEMS,
} from "../constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {}, shippingMethod: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      console.log(action);
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (card) => card.product !== action.payload._id
        ),
      };
    case CART_ADD_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload };

    case CART_ADD_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload };

    case CART_CREAR_ITEMS:
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};
