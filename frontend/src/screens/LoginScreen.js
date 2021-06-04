import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

function LoginScreen({ history, location }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLogin;

  useEffect(() => {
    console.log(redirect);
    if (userInfo) {
      history.push(redirect);
    }
  }, [dispatch, history, redirect, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return userInfo ? (
    <div></div>
  ) : (
    <FormContainer>
      <h1 className="text-center mt-4">Sign in</h1>

      {error && <Message variant="danger">{error}</Message>}
      {redirect != "/" && (
        <Message variant="info">If you want to continue, please log in</Message>
      )}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="rounded">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className=" btn-center rounded mt-2"
        >
          Submit
        </Button>
        <Form.Group className="text-center mt-4">
          <h6>
            <Link to="/">Forgot password?</Link> ·{" "}
            <Link to={redirect ? `/signup?redirect=${redirect}` : "/signup"}>
              Sign up
            </Link>
          </h6>
        </Form.Group>
      </Form>
    </FormContainer>
  );
}

export default LoginScreen;
