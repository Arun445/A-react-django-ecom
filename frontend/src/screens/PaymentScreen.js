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
import Message from "../components/Message";
import Loader from "../components/Loader";
import CheckoutSteps from "../components/CheckoutSteps";

function PaymentScreen({ history }) {
  const [paymentMethod, setPaymentMethod] = useState("");

  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;

  const dispatch = useDispatch();

  if (!shippingAddress.address) {
    history.push("/shipping");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (paymentMethod) {
      dispatch(addPaymentMethod(paymentMethod));
      history.push("/placeorder");
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
              <Form onSubmit={submitHandler}>
                <h5>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col md={1}>
                          <Form.Check
                            className="mb-2 mt-2"
                            type="radio"
                            name="paymentMethod"
                            id="Paypal"
                            onChange={(e) => {
                              setPaymentMethod(e.target.id);
                            }}
                          />
                        </Col>
                        <Col>
                          <Form.Label className="mt-2">PAYPAL</Form.Label>
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col md={1}>
                          <Form.Check
                            className="mb-2 mt-2"
                            type="radio"
                            name="paymentMethod"
                            id="Master Card"
                            onChange={(e) => {
                              setPaymentMethod(e.target.id);
                            }}
                          />
                        </Col>
                        <Col>
                          <Form.Label className="mt-2">Master Card</Form.Label>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col md={1}>
                          <Form.Check
                            className="mb-2 mt-2 "
                            type="radio"
                            name="paymentMethod"
                            id="Kazkas"
                            onChange={(e) => {
                              setPaymentMethod(e.target.id);
                            }}
                          />
                        </Col>
                        <Col>
                          <Form.Label className="mt-2">Kazkas</Form.Label>
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
