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

import { getOrderList } from "../actions/orderActions";
import { LinkContainer } from "react-router-bootstrap";

function OrderListScreen({ history }) {
  const dispatch = useDispatch("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const ordersList = useSelector((state) => state.ordersList);
  const { orders, error, loading } = ordersList;

  useEffect(() => {
    if (!userInfo && !userInfo.isAdmin) {
      history.push("/");
    } else if (userInfo && userInfo.isAdmin) {
      dispatch(getOrderList());
    }
  }, [dispatch, history, userInfo]);

  const deleteHandler = (id) => {};

  return (
    <Container>
      <Form>
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
                  <Col md={6}>Paid:</Col>
                  <Col md={3}>
                    <Form.Check type="radio" id="Omniva" />
                  </Col>
                  <Col md={3}>
                    <Form.Check type="radio" id="Omniva" />
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col md={6}>Delivered:</Col>
                  <Col md={3}>
                    <Form.Check type="radio" id="Omniva" />
                  </Col>
                  <Col md={3}>
                    <Form.Check type="radio" id="Omniva" />
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button variant="primary btn-block">Filter</Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={9}>
            <h1>Orders</h1>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              <Table striped bordered hover responsive size="sm">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>USER</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                    <th>PAID</th>
                    <th>DELIVERED</th>
                    <th>DETAILS</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id}>
                      <td>{order._id}</td>
                      <td>{order.user.name}</td>
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
                        {order.isDelivered ? (
                          order.deliveredAt.substring(0, 10)
                        ) : (
                          <i
                            className="fas fa-times"
                            style={{ color: "red" }}
                          ></i>
                        )}
                      </td>
                      <td>
                        <LinkContainer to={`/order/${order._id}`}>
                          <Button className="btn-sm">details</Button>
                        </LinkContainer>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default OrderListScreen;
