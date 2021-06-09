import React, { useEffect, useState } from "react";
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
import Paginate from "../components/Paginate";
import Loader from "../components/Loader";

import { listUsers, deleteUser } from "../actions/userActions";
import { LinkContainer } from "react-router-bootstrap";
import queryString from "query-string";

function UserListScreen({ history }) {
  const dispatch = useDispatch();

  const [filterForIds, setFilterForIds] = useState("");
  const [filterForAdmin, setFilterForAdmin] = useState("");
  const [filterForName, setFilterForName] = useState("");

  const usersList = useSelector((state) => state.usersList);
  const { users, loading, error, page, pages } = usersList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  let keyword = history.location.search;
  let location = history.location.pathname;
  let params = queryString.parse(history.location.search);

  useEffect(() => {
    if (filterForIds || filterForAdmin || filterForName) {
      history.push(
        `/users?keyword=&page=${
          params.page ? params.page : 1
        }&id=${filterForIds}&name=${filterForName}&admin=${filterForAdmin}`
      );
    } else if (!filterForIds && !filterForName && !filterForAdmin) {
      if (params.isDelivered || params.isPaid || params.id) {
        history.push("/users");
      }
    }
    keyword = history.location.search;
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers(keyword));
    } else {
      history.push("/");
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    keyword,
    filterForIds,
    filterForAdmin,
    filterForName,
  ]);

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
                  <Form.Control
                    type="number"
                    placeholder="Id"
                    size="sm"
                    value={filterForIds}
                    onChange={(e) => {
                      setFilterForIds(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Name:</Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="name"
                    size="sm"
                    value={filterForName}
                    onChange={(e) => {
                      setFilterForName(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col md={6}>Admin:</Col>
                <Col md={3}>
                  <Form.Check
                    label={
                      <i
                        className="fas fa-check"
                        style={{ color: "green" }}
                      ></i>
                    }
                    type="radio"
                    name="paid"
                    id="True"
                    disabled={loading}
                    onChange={(e) => {
                      setFilterForAdmin(e.target.id);
                    }}
                  />
                </Col>
                <Col md={3}>
                  <Form.Check
                    label={
                      <i className="fas fa-times" style={{ color: "red" }}></i>
                    }
                    type="radio"
                    name="paid"
                    id="False"
                    disabled={loading}
                    onChange={(e) => {
                      setFilterForAdmin(e.target.id);
                    }}
                  />
                </Col>
              </Row>
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
          <Paginate
            page={page}
            pages={pages}
            isAdmin={true}
            keyword={keyword}
            location={location}
            filter={"&id=&name=&admin="}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default UserListScreen;
