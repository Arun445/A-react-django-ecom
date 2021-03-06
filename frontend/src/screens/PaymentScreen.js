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
import { useDispatch, useSelector } from "react-redux";
import { addPaymentMethod } from "../actions/cartActions";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";

function PaymentScreen({ history }) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;

  const dispatch = useDispatch();

  useEffect(() => {
    if (paymentMethod) {
      setSuccessMessage("");
    }
  }, [paymentMethod]);

  if (!shippingAddress.address) {
    history.push("/shipping");
  }
  if (cartItems.length === 0) {
    history.push("/cart");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (paymentMethod) {
      setSuccessMessage("");
      dispatch(addPaymentMethod(paymentMethod));
      history.push("/placeorder");
    } else {
      setSuccessMessage("Please select a payment method to continue.");
    }
  };

  return (
    <Container>
      <CheckoutSteps step1 step2 step3 />
      <Row className="mt-4">
        <Col md={1}></Col>
        <Col md={6}>
          <Card className="">
            <Container>
              <h1 className="text-center mt-4">payment method</h1>
              {successMessage && (
                <Message variant="danger">{successMessage}</Message>
              )}
              <Form onSubmit={submitHandler}>
                <h5>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col md={1}>
                          <Form.Check
                            className="mb-2 mt-2 biggerRadioButton"
                            type="radio"
                            name="paymentMethod"
                            id="PayPal"
                            onChange={(e) => {
                              setPaymentMethod(e.target.id);
                            }}
                          />
                        </Col>
                        <Col>
                          <Form.Label className="mt-2">
                            <i
                              className="fab fa-paypal"
                              style={{ color: "#3b7bbf" }}
                            ></i>
                            PAYPAL
                          </Form.Label>
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col md={1}>
                          <Form.Check
                            className="mb-2 mt-2 biggerRadioButton"
                            type="radio"
                            name="paymentMethod"
                            id="On Delivery"
                            onChange={(e) => {
                              setPaymentMethod(e.target.id);
                            }}
                          />
                        </Col>
                        <Col>
                          <Form.Label className="mt-2">
                            <i className="far fa-credit-card"></i>On Delivery
                          </Form.Label>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Button
                        variant="primary"
                        type="submit"
                        className=" btn-center rounded mt-2"
                      >
                        proceed
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </h5>
              </Form>
            </Container>
          </Card>
        </Col>
        <Col md={5}>
          <h3 className="mt-3 mb-2 ml-3">Your orders</h3>
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={4}>
                    <Image fluid rounded src={item.image}></Image>
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={3}>
                    $
                    {item.quantity >= 2
                      ? (item.price * item.quantity).toFixed(2)
                      : item.price}
                  </Col>
                  <Col md={1}>x{item.quantity}</Col>
                  <Col md={1}>
                    <Link to="/cart">edit</Link>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
            <ListGroup.Item>
              <h5>
                In total: $
                {cartItems
                  .reduce(
                    (acc, item) =>
                      acc + Number(item.quantity) * Number(item.price),
                    0
                  )
                  .toFixed(2)}
              </h5>
            </ListGroup.Item>
          </ListGroup>
          <Row></Row>
        </Col>
      </Row>
    </Container>
  );
}

export default PaymentScreen;
