import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Button,
  Form,
  Container,
  Table,
  ListGroup,
} from "react-bootstrap";
import Message from "../components/Message";

import Loader from "../components/Loader";

import { listUsers, deleteUser } from "../actions/userActions";
import { LinkContainer } from "react-router-bootstrap";

function UserListScreen({ history }) {
  const dispatch = useDispatch();
  const [filterForAdmin, setFilterForAdmin] = useState();

  const usersList = useSelector((state) => state.usersList);
  const { users, loading, error } = usersList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push("/");
    }
  }, [dispatch, history, userInfo, successDelete]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(id));
    }
  };
  return (
    <Container>
      <Row>
        <Col md={3}>
          <ListGroup variant="flush ">
            <ListGroup.Item>
              <h3>Filter by:</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>ID:</Col>
                <Col>
                  <Form.Control type="number" placeholder="Id" size="sm" />
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Name:</Col>
                <Col>
                  <Form.Control type="text" placeholder="name" size="sm" />
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col md={6}>Admin:</Col>
                <Col md={3}>
                  <Form.Check
                    type="radio"
                    name="ids"
                    id="Yes"
                    onChange={(e) => {
                      setFilterForAdmin(e.target.id);
                    }}
                  />
                </Col>
                <Col md={3}>
                  <Form.Check
                    type="radio"
                    name="ids"
                    id="No"
                    onChange={(e) => {
                      setFilterForAdmin(e.target.id);
                    }}
                  />
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button variant="primary btn-block">Filter</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          <h1>Users</h1>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <Table striped bordered hover responsive size="sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Admin</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.isAdmin ? (
                        <i
                          className="fas fa-check"
                          style={{ color: "green" }}
                        ></i>
                      ) : (
                        <i
                          className="fas fa-times"
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </td>

                    <td>
                      <LinkContainer to={`/user/edit/${user._id}`}>
                        <Button variant="light" className="btn-sm">
                          <i className="far fa-edit"></i>
                        </Button>
                      </LinkContainer>
                      <Button
                        variant="light"
                        className="btn-sm"
                        onClick={() => deleteHandler(user._id)}
                      >
                        <i className="far fa-trash-alt"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default UserListScreen;
