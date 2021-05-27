import React, { useState, useEffect } from "react";
import { Container, Col, Row, ListGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { payOrder, getOrderDetails } from "../actions/orderActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { ORDER_PAY_RESET } from "../constants/orderConstants";
import { PayPalButton } from "react-paypal-button-v2";
//import { ORDER_PAY_RESET } from '../constants/orderConstants'

function OrderScreen({ history, match }) {
  const orderId = match.params.id;

  const [sdkReady, setSdkReady] = useState(false);

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, error, loading } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const dispatch = useDispatch();
  if (!loading && !error) {
    order.price = order.orderItems
      .reduce(
        (acc, item) => acc + Number(item.quantity) * Number(item.price),
        0
      )
      .toFixed(2);
    if (order.isPaid) {
      order.paidAt =
        order.paidAt.split("T")[0] + " " + order.paidAt.split("T")[1];
    }
    if (order.isDelivered) {
      order.deliveredAt =
        order.deliveredAt.split("T")[0] + " " + order.deliveredAt.split("T")[1];
    }
  }

  const addPayPalScript = () => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AZS0-aP_ZptnjeVOUDHmxKOVDo7JR23Ue70UTvCYex2yiAH6p4m88EHnBlW0uQAP3nWG8xP5hU9PlJL4";
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    };
    document.body.appendChild(script);
  };
  useEffect(() => {
    if (!order || successPay || order._id !== Number(orderId)) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, order, orderId, successPay]);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(orderId, paymentResult));
  };
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Container>
      <Row className="mt-4">
        <Col md={8}>
          <h1 className="mb-4">Order: {order._id}</h1>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong>
                {order.user.name}
              </p>
              <p>
                <strong>Email: </strong>
                {order.user.email}
              </p>
              <p>
                <strong>Address: </strong>
                {order.shippingAddress.address}, {order.shippingAddress.country}
                , {order.shippingAddress.city}, {order.shippingAddress.zipcode}
              </p>
              {order.isDelivered ? (
                <Message variant="success">
                  Your order is delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant="info">Order not delivered</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant="success">Paid on {order.paidAt}</Message>
              ) : (
                <Message variant="info">Order Not paid yet</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              <Container>
                <Row>
                  <ListGroup variant="flush">
                    {order.orderItems.length === 0 ? (
                      <Message variant="info">Your cart is empty</Message>
                    ) : (
                      order.orderItems.map((item) => (
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
                      ))
                    )}
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
                <Col>${order.totalPrice}</Col>
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
                <Col>${order.price}</Col>
              </Row>
            </ListGroup.Item>
            {!order.isPaid && (
              <ListGroup.Item>
                {loadingPay && <Loader />}
                {!sdkReady ? (
                  <Loader />
                ) : (
                  <PayPalButton
                    amount={order.totalPrice}
                    onSuccess={successPaymentHandler}
                  />
                )}
              </ListGroup.Item>
            )}

            <ListGroup.Item></ListGroup.Item>
          </ListGroup>
          <Row></Row>
        </Col>
      </Row>
    </Container>
  );
}

export default OrderScreen;
