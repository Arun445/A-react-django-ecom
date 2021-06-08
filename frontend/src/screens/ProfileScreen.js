import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button, Form, Container, Table } from "react-bootstrap";
import { userDetails, updateUserProfile } from "../actions/userActions";
import { USER_UPDATE_RESET } from "../constants/userConstants";
import { getOrders } from "../actions/orderActions";
import { LinkContainer } from "react-router-bootstrap";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import Loader from "../components/Loader";

function ProfileScreen({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageSuccess, setMessageSuccess] = useState("");

  const userDetail = useSelector((state) => state.userDetail);
  const { user, error, loading } = userDetail;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { success, error: updateError } = userUpdate;

  const ordersGet = useSelector((state) => state.ordersGet);
  const {
    loading: loadingOrders,
    orders,
    error: errorOrders,
    page,
    pages,
    paginated,
  } = ordersGet;

  let keyword = history.location.search;
  let location = history.location.pathname;

  const dispatch = useDispatch();
  useEffect(() => {
    if (success) {
      setMessageSuccess("Profile successfully updated");
    }
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || !user.name || success || paginated) {
        dispatch({ type: USER_UPDATE_RESET });
        dispatch(userDetails());
        dispatch(getOrders(keyword));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, userInfo, history, success, user, orders, keyword]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMessage("");
    setMessageSuccess("");

    if (
      userInfo.name === name &&
      userInfo.email === email &&
      !password &&
      !confirmPassword
    ) {
      setMessage("You didn't change anything");
    } else if (password !== confirmPassword) {
      setMessage("Passwords do not match, please try again");
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setMessage(
        "Password must contain minimum eight characters, at least one letter and one number"
      );
    } else {
      dispatch(updateUserProfile(name, email, password));
    }
  };
  return (
    <Container>
      <Row className="mt-4">
        <Col md={3}>
          <h2>Profile</h2>
          {loading && <Loader />}
          {error ? (
            <Message variant="danger">{error}</Message>
          ) : message ? (
            <Message variant="danger">{message}</Message>
          ) : updateError ? (
            <Message variant="danger">{updateError}</Message>
          ) : (
            messageSuccess && (
              <Message variant="success">{messageSuccess}</Message>
            )
          )}

          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name" className="mt-4">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password" className="rounded">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="confirmPassword" className="rounded">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className=" btn-center rounded mt-2"
            >
              Update
            </Button>
            <Form.Group className="text-center mt-4"></Form.Group>
          </Form>
        </Col>
        <Col md={9}>
          <h2 className="pb-2">Orders</h2>

          {loadingOrders ? (
            <Loader />
          ) : errorOrders ? (
            <Message variant="danger">{errorOrders}</Message>
          ) : (
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>paid</th>
                  <th>delivered</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.dateCreated.substring(0, 10)}</td>
                    <td>${order.totalPrice}</td>
                    <td>
                      {order.isPaid ? (
                        order.paidAt.substring(0, 10)
                      ) : (
                        <i
                          className="fas fa-times"
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </td>

                    <td>
                      <LinkContainer to={`/order/${order._id}`}>
                        <Button className="btn-sm">Details</Button>
                      </LinkContainer>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
          <Paginate
            page={page}
            pages={pages}
            location={location}
            keyword={keyword}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileScreen;
