import React, { useState, useEffect } from "react";
import { Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { passwordResetConfirm } from "../actions/userActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

function PasswordResetConfirmScreen({ history, location, match }) {
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userResetPasswordConfirm = useSelector(
    (state) => state.userResetPasswordConfirm
  );
  const { loading, error, success, changed } = userResetPasswordConfirm;

  useEffect(() => {}, [dispatch, history, redirect, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    const uid = match.params.uid;
    const token = match.params.token;
    if (newPassword !== reNewPassword) {
      setMessage("Passwords do not match, please try again");
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(newPassword)) {
      setMessage(
        "Password must contain minimum eight characters, at least one letter and one number"
      );
    } else {
      setMessage("");
      dispatch(passwordResetConfirm(uid, token, newPassword, reNewPassword));
    }
  };

  return userInfo ? (
    <div></div>
  ) : (
    <FormContainer>
      <h1 className="text-center mt-4">Password Reset Request</h1>

      {error && <Message variant="danger">{error}</Message>}
      {redirect != "/" && (
        <Message variant="info">If you want to continue, please log in</Message>
      )}
      {loading ? (
        <Loader />
      ) : (
        message && <Message variant="danger">{message}</Message>
      )}
      <Form onSubmit={submitHandler} className="mt-5">
        <Form.Group controlId="formBasicPassword" className="rounded">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="rounded">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm New Password"
            value={reNewPassword}
            onChange={(e) => setReNewPassword(e.target.value)}
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

export default PasswordResetConfirmScreen;
