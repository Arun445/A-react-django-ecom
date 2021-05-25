import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button, Form, Container } from "react-bootstrap";
import Message from "../components/Message";
import { userDetails, updateUserProfile } from "../actions/userActions";
import Loader from "../components/Loader";
import { USER_UPDATE_RESET } from "../constants/userConstants";

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

  const dispatch = useDispatch();
  useEffect(() => {
    if (success) {
      setMessageSuccess("Profile updated");
    }
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_RESET });
        dispatch(userDetails());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, userInfo, history, success, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMessage("");
    setMessageSuccess("");

    if (password === confirmPassword) {
      dispatch(updateUserProfile(name, email, password));
    } else {
      setMessage("Passwords do not match, please try again");
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
          <h2>Products</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileScreen;
