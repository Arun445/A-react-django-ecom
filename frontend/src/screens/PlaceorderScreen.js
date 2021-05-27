import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Card,
  Container,
  Col,
  Row,
  ListGroup,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { addPaymentMethod } from "../actions/cartActions";
import { createOrder } from "../actions/orderActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import CheckoutSteps from "../components/CheckoutSteps";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";

function PlaceorderScreen({ history }) {
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error, loading } = orderCreate;

  const cart = useSelector((state) => state.cart);
  const { shippingAddress, cartItems, paymentMethod } = cart;

  const dispatch = useDispatch();

  const totalPrice = cartItems
    .reduce((acc, item) => acc + Number(item.quantity) * Number(item.price), 0)
    .toFixed(2);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (cartItems.length === 0) {
      history.push("/cart");
    }
    if (success) {
      history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, success, history, cartItems]);

  const placeOrder = () => {
    dispatch(
      createOrder({
        shippingAddress,
        cartItems,
        paymentMethod,
        shippingPrice: "0.00",
        totalPrice,
      })
    );
  };

  return (
    <Container>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row className="mt-4">
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address: </strong>
                {shippingAddress.address}, {shippingAddress.country},{" "}
                {shippingAddress.city}, {shippingAddress.zipcode}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {paymentMethod}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              <Container>
                <Row>
                  <ListGroup variant="flush">
                    {cartItems.map((item) => (
                      <ListGroup.Item key={item.product}>
                        <Row>
                          <Col md={2}>
                            <Image fluid rounded src={item.image}></Image>
                          </Col>
                          <Col md={6}>
                            <Link to={`/product/${item.product}`}>
                              {item.name}
                            </Link>
                          </Col>
                          <Col md={4}>
                            {item.quantity} x ${item.price} = $
                            {(item.price * item.quantity).toFixed(2)}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Row>
              </Container>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <h3 className="mt-3 mb-2 ml-3">Order summary</h3>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>Items</Col>
                <Col>
                  $
                  {cartItems
                    .reduce(
                      (acc, item) =>
                        acc + Number(item.quantity) * Number(item.price),
                      0
                    )
                    .toFixed(2)}
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Shipping</Col>
                <Col>$0.00</Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Total</Col>
                <Col>${totalPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              {loading && <Loader />}
              {error && <Message variant="danger">{error}</Message>}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                variant="primary"
                type="button"
                className=" btn-block mt-2"
                onClick={placeOrder}
              >
                proceed
              </Button>
            </ListGroup.Item>
          </ListGroup>
          <Row></Row>
        </Col>
      </Row>
    </Container>
  );
}

export default PlaceorderScreen;
