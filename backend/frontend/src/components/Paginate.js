import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch } from "react-redux";
import { PRODUCT_DELETE_SELECTED_PAGINATE } from "../constants/productConstants";
import { ORDER_GET_PAGINATED } from "../constants/orderConstants";
function Paginate({
  pages,
  page,
  keyword = "",
  isAdmin = false,
  location,
  filter = "",
}) {
  if (keyword) {
    filter = keyword.split("page=")[1].split(page)[1];

    keyword = keyword.split("?keyword=")[1].split("&")[0];
  }

  const dispatch = useDispatch();

  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              location === "/"
                ? `/?keyword=${keyword}&page=${x + 1}`
                : location === "/items"
                ? `/items?keyword=${keyword}&page=${x + 1}${filter}`
                : location === "/products"
                ? `/products?keyword=${keyword}&page=${x + 1}${filter}`
                : location === "/orderlist"
                ? `/orderlist?keyword=${keyword}&page=${x + 1}${filter}`
                : location === "/users"
                ? `/users?keyword=${keyword}&page=${x + 1}${filter}`
                : location === "/profile" &&
                  `/profile?keyword=${keyword}&page=${x + 1}`
            }
          >
            <Pagination.Item
              onClick={
                location === "/products"
                  ? () => dispatch({ type: PRODUCT_DELETE_SELECTED_PAGINATE })
                  : location === "/profile"
                  ? () => {
                      dispatch({ type: ORDER_GET_PAGINATED });
                    }
                  : () => {}
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
