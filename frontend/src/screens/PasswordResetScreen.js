import React, { useState, useEffect } from "react";
import { Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { passwordReset } from "../actions/userActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { USER_PASSWORD_RESET_RESET } from "../constants/userConstants";

function PasswordResetScreen({ location }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userResetPassword = useSelector((state) => state.userResetPassword);
  const { loading, success, error } = userResetPassword;

  useEffect(() => {
    console.log(message);
    if (success) {
      setMessage("A link to change your password has been sent to your email.");
      dispatch({ type: USER_PASSWORD_RESET_RESET });
    }
  }, [dispatch, userInfo, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(passwordReset(email));
  };

  return userInfo ? (
    <div></div>
  ) : (
    <FormContainer>
      <h1 className="text-center mt-4 mb-4">Password Reset Request</h1>

      {error && <Message variant="danger">{error}</Message>}

      {loading && <Loader />}
      {message && <Message variant="success">{message}</Message>}

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className=" btn-center rounded mt-2"
        >
          Reset Password
        </Button>
      </Form>
    </FormContainer>
  );
}

export default PasswordResetScreen;
