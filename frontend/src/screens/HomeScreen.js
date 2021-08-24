import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import Loader from "../components/Loader";
import Message from "../components/Message";

import ProductCarousel from "../components/ProductCarousel";
import { listProducts } from "../actions/productActions";
import { googleAuthenticate } from "../actions/userActions";
import queryString from "query-string";
import {
  USER_GOOGLE_AUTH_FAIL,
  USER_GOOGLE_AUTH_FAIL_TIMES,
} from "../constants/userConstants";
function HomeScreen({ history }) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading } = productList;
  const [googleLogin, setGoogleLogin] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const {
    loading: loadingUser,
    userInfo,
    error: loginError,
    errorTimes,
  } = userLogin;

  let keyword = window.location.search;
  useEffect(() => {
    const values = queryString.parse(keyword);
    const state = values.state ? values.state : null;
    const code = values.code ? values.code : null;
    if (keyword && userInfo) {
      window.location.href = "https://pepacom.herokuapp.com/";
    } else if (loginError && errorTimes === 0) {
      dispatch({
        type: USER_GOOGLE_AUTH_FAIL_TIMES,
        payload: 1,
      });
      history.push("/login");
    }
    if (state && code && !googleLogin) {
      setGoogleLogin(true);
      dispatch(googleAuthenticate(state, code));
    }

    dispatch(listProducts(keyword));
  }, [dispatch, history, keyword, userInfo, loginError]);

  return (
    <div>
      <h1>Lastest Products</h1>
      <ProductCarousel />
      <h1 className="mt-5 text-center">Most popular categories</h1>

      {loading || loadingUser ? (
        <Loader />
      ) : error ? (
        <Message variant={"danger"}>{error}</Message>
      ) : (
        <div>
          <Row>
            <Col sm={12} md={6} lg={4} xl={3}>
              <Card className="my-3  rounded">
                <Link to={`/items?keyword=&page=1&category=electronics`}>
                  <Card.Img
                    src="https://react-a-ecom-live.s3-eu-west-1.amazonaws.com/electronics.jpg"
                    className="product-image"
                  />
                </Link>
                <Card.Body>
                  <Link to={`/product/`}>
                    <Card.Title as="div">
                      <strong>Electronics</strong>
                    </Card.Title>
                  </Link>
                  <Card.Text as="div">
                    <div className="my-3"></div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4} xl={3}>
              <Card className="my-3  rounded">
                <Link to={`/items?keyword=&page=1&category=bikes`}>
                  <Card.Img
                    src="https://react-a-ecom-live.s3-eu-west-1.amazonaws.com/bikes.jpg"
                    className="product-image"
                  />
                </Link>
                <Card.Body>
                  <Link to={`/product/`}>
                    <Card.Title as="div">
                      <strong>Bikes</strong>
                    </Card.Title>
                  </Link>
                  <Card.Text as="div">
                    <div className="my-3"></div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
