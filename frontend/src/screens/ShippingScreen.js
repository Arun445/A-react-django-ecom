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
import products from "../products";
import { useDispatch, useSelector } from "react-redux";
import { addShippingAddress } from "../actions/cartActions";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";

function ShippingScreen({ history }) {
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setContry] = useState("");
  const [shippingMethod, setShippingMethod] = useState("");
  const [shippingLocation, setShippingLocation] = useState("...");

  const [successMessage, setSuccessMessage] = useState("");

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress, cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (cartItems.length === 0) {
      history.push("/cart");
    } else if (!userInfo) {
      history.push("/login");
    }
    if (shippingAddress.address) {
      setAddress(shippingAddress.address);
      setZipcode(shippingAddress.zipcode);
      setCity(shippingAddress.city);
      setContry(shippingAddress.country);
    }
  }, [dispatch, userInfo, shippingAddress, cartItems, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (shippingMethod === "Omniva" && shippingLocation !== "...") {
      dispatch(
        addShippingAddress({
          address,
          zipcode,
          city,
          country,
          shippingMethod,
          shippingLocation,
          shippingPrice: 1.8,
        })
      );
      setSuccessMessage("");
      history.push("/payment");
    } else if (shippingMethod === "To My Home Address") {
      dispatch(
        addShippingAddress({
          address,
          zipcode,
          city,
          country,
          shippingMethod,
          shippingLocation,
          shippingPrice: 2,
        })
      );
      setSuccessMessage("");
      history.push("/payment");
    } else {
      window.scrollTo(0, 0);
      setSuccessMessage("Please select a shipping method to continue.");
    }
  };

  return (
    <Container>
      {shippingAddress ? (
        <CheckoutSteps step1 step2 step3 />
      ) : (
        <CheckoutSteps step1 step2 />
      )}

      <Row className="mt-4">
        <Col md={1}></Col>
        <Col md={6}>
          <Form onSubmit={submitHandler}>
            <Card className="">
              <Container>
                <h1 className="text-center mt-4">Shipping Address</h1>
                {successMessage && (
                  <Message variant="danger">{successMessage}</Message>
                )}

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

                <Form.Group className="text-center mt-4"></Form.Group>
              </Container>
            </Card>

            <Card className="">
              <Container>
                <h5 className="text-center mt-4">Shipping method</h5>

                <>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col md={1}>
                          <Form.Check
                            className="mb-2 mt-2 biggerRadioButton"
                            type="radio"
                            name="shippingMethod"
                            id="Omniva"
                            onChange={(e) => {
                              setShippingMethod(e.target.id);
                            }}
                          />
                        </Col>
                        <Col md={2}>
                          <Form.Label className="mt-2">
                            <strong>Omniva</strong>
                          </Form.Label>
                        </Col>
                        {shippingMethod === "Omniva" && (
                          <Col>
                            <Form.Control
                              as="select"
                              size="sm"
                              value={shippingLocation}
                              onChange={(e) =>
                                setShippingLocation(e.target.value)
                              }
                            >
                              <option>(...)</option>
                              {products.map(
                                (x) =>
                                  x.A0_NAME === "LT" && (
                                    <option key={x.ZIP} value={x.NAME}>
                                      {x.NAME}
                                    </option>
                                  )
                              )}
                            </Form.Control>
                          </Col>
                        )}
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col md={1}>
                          <Form.Check
                            className="mb-2 mt-2 biggerRadioButton"
                            type="radio"
                            name="shippingMethod"
                            id="To My Home Address"
                            onChange={(e) => {
                              setShippingMethod(e.target.id);
                            }}
                          />
                        </Col>
                        <Col>
                          <Form.Label className="mt-2">
                            <strong>To My Home Address</strong>
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
                </>
              </Container>
            </Card>
          </Form>
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
