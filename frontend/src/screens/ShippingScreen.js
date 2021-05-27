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
import { addShippingAddress } from "../actions/cartActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import CheckoutSteps from "../components/CheckoutSteps";

function ShippingScreen({ history }) {
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setContry] = useState("");

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress, cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (cartItems.length === 0) {
      history.push("/cart");
    }
    if (shippingAddress) {
      setAddress(shippingAddress.address);
      setZipcode(shippingAddress.zipcode);
      setCity(shippingAddress.city);
      setContry(shippingAddress.country);
    }
  }, [dispatch, userInfo, shippingAddress, cartItems, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addShippingAddress({ address, zipcode, city, country }));
    history.push("/payment");
  };
  return (
    <Container>
      <CheckoutSteps step1 step2 />
      <Row className="mt-4">
        <Col md={1}></Col>
        <Col md={6}>
          <Card className="">
            <Container>
              <h1 className="text-center mt-4">Shipping Address</h1>

              <Form onSubmit={submitHandler}>
                <Form.Group controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter address"
                    value={address ? address : ""}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="country">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter country"
                    value={country ? country : ""}
                    onChange={(e) => setContry(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter city"
                    value={city ? city : ""}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="zipcode">
                  <Form.Label> Zipcode</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter zipcode"
                    value={zipcode ? zipcode : ""}
                    onChange={(e) => setZipcode(e.target.value)}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className=" btn-center rounded mt-2"
                >
                  proceed
                </Button>
                <Form.Group className="text-center mt-4"></Form.Group>
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

export default ShippingScreen;
