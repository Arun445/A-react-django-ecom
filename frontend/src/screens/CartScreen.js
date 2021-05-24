import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";

function CartScreen({ match, location, history }) {
  const productId = match.params.id;
  const productQty = location.search
    ? Number(location.search.split("=")[1])
    : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, productQty));
    }
  }, [dispatch, productQty, productId]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <div>
      <Row>
        <Col md={8}>
          <h3 className="mt-3 mb-2 ml-3">Shopping Cart</h3>
          <ListGroup variant="flush">
            {cartItems.length === 0 ? (
              <Message variant="info">
                Your cart is empty <Link to="/"> Go Back</Link>
              </Message>
            ) : (
              cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={3}>
                      <Image fluid rounded src={item.image}></Image>
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>

                    <Col md={2}>
                      <Form.Control
                        as="select"
                        size="sm"
                        value={item.quantity}
                        onChange={(e) =>
                          dispatch(addToCart(item.product, e.target.value))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((qty) => (
                          <option key={qty + 1} value={qty + 1}>
                            {qty + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={1}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))
            )}
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card className="mt-3 ">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>
                  Subtotal (
                  {cartItems.reduce(
                    (accumulator, item) => accumulator + Number(item.quantity),
                    0
                  )}
                  )
                </h3>
                $
                {cartItems
                  .reduce(
                    (acc, item) =>
                      acc + Number(item.quantity) * Number(item.price),
                    0
                  )
                  .toFixed(2)}
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className="btn btn-block"
                  type="button"
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed to checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CartScreen;
