import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button, Form, Container, Table } from "react-bootstrap";
import Message from "../components/Message";
import { getUserProfile, editUserProfile } from "../actions/userActions";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

import { USER_EDIT_RESET } from "../constants/userConstants";
import { getOrders } from "../actions/orderActions";
import { LinkContainer } from "react-router-bootstrap";
import FormContainer from "../components/FormContainer";

function UserEditScreen({ match }) {
  const profileId = match.params.id;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const [messageSuccess, setMessageSuccess] = useState("");

  const userProfile = useSelector((state) => state.userProfile);
  const { loading, error, userInfo } = userProfile;

  const userEdit = useSelector((state) => state.userEdit);
  const {
    loading: loadingEdit,
    error: errorEdit,
    success: successEdit,
  } = userEdit;

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(messageSuccess);
    if (successEdit) {
      setMessageSuccess("You successfully updated this profile");
      dispatch(getUserProfile(profileId));
      dispatch({ type: USER_EDIT_RESET });
    } else {
      if (!userInfo || userInfo._id !== Number(profileId)) {
        dispatch(getUserProfile(profileId));
      } else {
        setName(userInfo.name);
        setEmail(userInfo.email);
        setIsAdmin(userInfo.isAdmin);
      }
    }
    console.log(messageSuccess);
  }, [match, dispatch, userInfo, successEdit]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(editUserProfile(profileId, name, email, isAdmin));
  };
  return (
    <div>
      <Link to="/users" className="btn btn-light my-3">
        <i className="fas fa-arrow-left"></i> Go back
      </Link>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <FormContainer>
          <h2>Updating </h2>
          {loadingEdit ? (
            <Loader />
          ) : errorEdit ? (
            <Message variant="danger">{errorEdit}</Message>
          ) : (
            messageSuccess && (
              <Message variant="success">{messageSuccess}</Message>
            )
          )}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name" className="mt-4">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="checkbox"
                name="isAdmin"
                label="Admin"
                className="ml-2"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
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
        </FormContainer>
      )}
    </div>
  );
}

export default UserEditScreen;
