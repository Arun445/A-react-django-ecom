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

import { getOrderList } from "../actions/orderActions";
import { LinkContainer } from "react-router-bootstrap";
import queryString from "query-string";

function OrderListScreen({ history }) {
  const dispatch = useDispatch("");

  const [filterForIds, setFilterForIds] = useState("");
  const [filterForIsPaid, setFilterForIsPaid] = useState("");
  const [filterForIsDelivered, setFilterForIsDelivered] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const ordersList = useSelector((state) => state.ordersList);
  const { orders, error, loading, page, pages } = ordersList;

  let keyword = history.location.search;
  let location = history.location.pathname;
  let params = queryString.parse(history.location.search);
  useEffect(() => {
    if (filterForIds || filterForIsPaid || filterForIsDelivered) {
      history.push(
        `/orderlist?keyword=&page=${
          params.page ? params.page : 1
        }&id=${filterForIds}&isPaid=${filterForIsPaid}&isDelivered=${filterForIsDelivered}`
      );
    } else if (!filterForIds && !filterForIsPaid && !filterForIsDelivered) {
      if (params.isDelivered || params.isPaid || params.id) {
        history.push("/orderlist");
      }
    }
    keyword = history.location.search;
    if (!userInfo && !userInfo.isAdmin) {
      history.push("/");
    } else if (userInfo && userInfo.isAdmin) {
      dispatch(getOrderList(keyword));
    }
  }, [
    dispatch,
    history,
    userInfo,
    keyword,
    filterForIds,
    filterForIsPaid,
    filterForIsDelivered,
  ]);

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
                  <Col md={6}>Paid:</Col>
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
                      onChange={(e) => {
                        setFilterForIsPaid(e.target.id);
                      }}
                    />
                  </Col>
                  <Col md={3}>
                    <Form.Check
                      label={
                        <i
                          className="fas fa-times"
                          style={{ color: "red" }}
                        ></i>
                      }
                      type="radio"
                      name="paid"
                      id="False"
                      onChange={(e) => {
                        setFilterForIsPaid(e.target.id);
                      }}
                    />
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col md={6}>Delivered:</Col>
                  <Col md={3}>
                    <Form.Check
                      label={
                        <i
                          className="fas fa-check"
                          style={{ color: "green" }}
                        ></i>
                      }
                      inline
                      type="radio"
                      id="True"
                      name="delivered"
                      onChange={(e) => {
                        setFilterForIsDelivered(e.target.id);
                      }}
                    />
                  </Col>
                  <Col md={3}>
                    <Form.Check
                      label={
                        <i
                          className="fas fa-times"
                          style={{ color: "red" }}
                        ></i>
                      }
                      inline
                      type="radio"
                      id="False"
                      name="delivered"
                      onChange={(e) => {
                        setFilterForIsDelivered(e.target.id);
                      }}
                    />
                  </Col>
                </Row>
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
            <Paginate
              page={page}
              pages={pages}
              isAdmin={true}
              keyword={keyword}
              location={location}
              filter={"&id=&isPaid=&isDelivered="}
            />
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default OrderListScreen;
