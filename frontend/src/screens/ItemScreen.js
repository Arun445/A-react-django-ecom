import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";

import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";

import { listProducts } from "../actions/productActions";
import { googleAuthenticate } from "../actions/userActions";
import { PRODUCT_LIST_RESET_SUCCESS } from "../constants/productConstants";
import queryString from "query-string";

function ItemScreen({ history }) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, error, loading, page, pages, success } = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { loading: loadingUser, userInfo } = userLogin;

  let keyword = history.location.search;

  let location = history.location.pathname;
  let params = queryString.parse(history.location.search);
  useEffect(() => {
    dispatch(listProducts(keyword));
    if (success) {
      dispatch({ type: PRODUCT_LIST_RESET_SUCCESS });
    }
  }, [dispatch, keyword]);

  return (
    <div>
      <h1 className="mt-4 mb-3 text-center">{params.category}</h1>

      {loading || loadingUser ? (
        <Loader />
      ) : error ? (
        <Message variant={"danger"}>{error}</Message>
      ) : products.length !== 0 ? (
        <div>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <Message variant="info">No products found</Message>
      )}
      <Paginate
        page={page}
        pages={pages}
        keyword={keyword}
        location={location}
        filter={"&category="}
      />
    </div>
  );
}

export default ItemScreen;
