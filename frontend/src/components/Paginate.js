import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  PRODUCT_DELETE_SELECTED_RESET,
  PRODUCT_DELETE_SELECTED_PAGINATE,
} from "../constants/productConstants";
function Paginate({ pages, page, keyword = "", isAdmin = false, location }) {
  if (keyword) {
    keyword = keyword.split("?keyword=")[1].split("&")[0];
  }
  console.log(location);
  const dispatch = useDispatch();

  const productDeleteSelected = useSelector(
    (state) => state.productDeleteSelected
  );
  const {
    loading: deleteListLoading,
    error: deleteListError,
    success: deleteListSuccess,
    selected,
  } = productDeleteSelected;

  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              location === "/"
                ? `/?keyword=${keyword}&page=${x + 1}`
                : `/products?keyword=${keyword}&page=${x + 1}`
            }
          >
            <Pagination.Item
              onClick={() =>
                dispatch({ type: PRODUCT_DELETE_SELECTED_PAGINATE })
              }
              active={x + 1 === page}
            >
              {x + 1}
            </Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
}

export default Paginate;
