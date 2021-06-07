import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_RESET,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_DELETE_SELECTED_REQUEST,
  PRODUCT_DELETE_SELECTED_SUCCESS,
  PRODUCT_DELETE_SELECTED_FAIL,
  PRODUCT_DELETE_SELECTED_RESET,
  PRODUCT_DELETE_SELECTED_ADD,
  PRODUCT_DELETE_SELECTED_REMOVE,
  PRODUCT_DELETE_SELECTED_PAGINATE,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
  PRODUCT_LIST_RESET_SUCCESS,
} from "../constants/productConstants";

export const productListReducer = (
  state = { products: [], success: false },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };

    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        page: action.payload.page,
        pages: action.payload.pages,
        success: true,
      };

    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_LIST_RESET_SUCCESS:
      return { ...state, success: false };

    default:
      return state;
  }
};

export const productDetailReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return { loading: true, ...state };

    case PRODUCT_DETAIL_SUCCESS:
      return { loading: false, product: action.payload };

    case PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productCreateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true };

    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, product: action.payload };

    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true };

    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true };

    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_UPDATE_RESET:
      return {};

    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };

    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };

    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_DELETE_RESET:
      return {};

    default:
      return state;
  }
};

export const productDeleteSelectedReducer = (
  state = { success: false, selected: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_DELETE_SELECTED_REQUEST:
      return { loading: true };

    case PRODUCT_DELETE_SELECTED_SUCCESS:
      return {
        loading: false,
        success: true,
        selected: action.payload,
        paginated: false,
      };

    case PRODUCT_DELETE_SELECTED_ADD:
      const item = action.payload;
      return {
        ...state,
        paginated: false,
        selected: [...state.selected, item],
      };

    case PRODUCT_DELETE_SELECTED_REMOVE:
      return {
        ...state,
        paginated: false,
        selected: state.selected.filter(
          (card) => card._id !== action.payload._id
        ),
      };

    case PRODUCT_DELETE_SELECTED_FAIL:
      return { loading: false, error: action.payload };

    case PRODUCT_DELETE_SELECTED_RESET:
      return { success: false, selected: [], paginated: false };

    case PRODUCT_DELETE_SELECTED_PAGINATE:
      return { ...state, paginated: true };

    default:
      return state;
  }
};

export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };

    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };

    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };

    case PRODUCT_CREATE_REVIEW_RESET:
      return {};

    default:
      return state;
  }
};

export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return { loading: true };

    case PRODUCT_TOP_SUCCESS:
      return { loading: false, products: action.payload };

    case PRODUCT_TOP_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
