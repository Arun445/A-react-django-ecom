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
import {
  listProducts,
  deleteProduct,
  deleteSelectedProducts,
  addToSelected,
  removeFromSelected,
} from "../actions/productActions";
import { LinkContainer } from "react-router-bootstrap";
import { PRODUCT_DELETE_SELECTED_RESET } from "../constants/productConstants";

function ProductListScreen({ history }) {
  const dispatch = useDispatch();

  const selectedForDelete = (id) => {
    const newNum = Number(id);
    if (deleteSelected.find((element) => element === newNum)) {
      dispatch(removeFromSelected(newNum));
      const index = deleteSelected.indexOf(newNum);
      deleteSelected.splice(index, 1);
    } else if (newNum === 0) {
    } else {
      setDeleteSelected([...deleteSelected, newNum]);
      dispatch(addToSelected(newNum));
    }
  };
  const [deleteSelected, setDeleteSelected] = useState([]);
  const [productForDelete, setProductForDelete] = useState(-1);

  const [filterForIds, setFilterForIds] = useState("");
  const [filterForPrice, setFilterForPrice] = useState("");
  const [filterForCategory, setFilterForCategory] = useState("");

  let keyword = history.location.search;
  let location = history.location.pathname;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    success: successDelete,
    loading: loadingDelete,
    error: errorDelete,
  } = productDelete;

  const productList = useSelector((state) => state.productList);
  const {
    products,
    loading,
    error,
    success: successListGet,
    pages,
    page,
  } = productList;

  const productDeleteSelected = useSelector(
    (state) => state.productDeleteSelected
  );
  const {
    success: deleteListSuccess,
    selected,
    paginated,
  } = productDeleteSelected;

  useEffect(() => {
    if (!userInfo && !userInfo.isAdmin) {
      history.push("/");
    } else if (userInfo && userInfo.isAdmin && !successListGet) {
      dispatch(listProducts(keyword));
    } else if (paginated) {
      dispatch(listProducts(keyword));
      dispatch({ type: PRODUCT_DELETE_SELECTED_RESET });
    } else if (!deleteListSuccess && !successDelete) {
      if (productForDelete !== -1) {
        selectedForDelete(productForDelete);
      }
      setProductForDelete(0);
    } else {
      dispatch(listProducts(keyword));
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    productForDelete,
    deleteListSuccess,
    keyword,
    paginated,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(id));
    }
  };
  const deleteSelectedHandler = () => {
    if (window.confirm("Are you sure you want to delete slected proucts?")) {
      dispatch(deleteSelectedProducts({ 29: selected.map((sel) => sel._id) }));
      setDeleteSelected([]);
      setProductForDelete(-1);
    }
  };

  const filterHandler = () => {
    history.push(
      `/products?keyword=&page=1&id=${filterForIds}&price=${filterForPrice}&category=${filterForCategory}`
    );
    dispatch(listProducts(keyword));
  };
  return (
    <Container>
      <Form>
        <Row>
          <Col md={3}>
            <ListGroup variant="flush ">
              <ListGroup.Item>
                <LinkContainer to="/create">
                  <Button className="btn-block">Add New Product</Button>
                </LinkContainer>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  variant="outline-primary btn-block"
                  onClick={() => deleteSelectedHandler()}
                >
                  Delete selected
                </Button>
              </ListGroup.Item>
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
                  <Col md={6}>Price:</Col>
                  <Col md={3}>
                    <Form.Check
                      inline
                      label={<i className="fas fa-long-arrow-alt-up"></i>}
                      type="radio"
                      id="up"
                      name="price"
                      onChange={(e) => {
                        setFilterForPrice(e.target.id);
                      }}
                    />
                  </Col>
                  <Col md={3}>
                    <Form.Check
                      inline
                      label={<i className="fas fa-long-arrow-alt-down"></i>}
                      type="radio"
                      id="down"
                      name="price"
                      onChange={(e) => {
                        setFilterForPrice(e.target.id);
                      }}
                    />
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Category:</Col>
                  <Col>
                    <Form.Control
                      as="select"
                      size="sm"
                      value={filterForCategory}
                      onChange={(e) => setFilterForCategory(e.target.value)}
                    >
                      <option></option>
                      <option>Electronics</option>
                      <option>Bikes</option>
                      <option>Furniture</option>
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button variant="primary btn-block" onClick={filterHandler}>
                  Filter
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={9}>
            <h1>Products</h1>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : loadingDelete ? (
              <Loader />
            ) : errorDelete ? (
              <Message variant="danger">{errorDelete}</Message>
            ) : (
              <div>
                <Table striped bordered hover responsive size="sm">
                  <thead>
                    <tr>
                      <th></th>
                      <th>ID</th>
                      <th>Name</th>
                      <th>CATEGORY</th>
                      <th>PRICE</th>
                      <th>STOCK</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product._id}>
                        <td>
                          <Form.Check
                            type="checkbox"
                            id={product._id}
                            onChange={(e) => setProductForDelete(e.target.id)}
                          />
                        </td>
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>${product.price}</td>
                        <td>{product.countInStock}</td>
                        <td>
                          <LinkContainer to={`/edits/${product._id}`}>
                            <Button variant="light" className="btn-sm">
                              <i className="far fa-edit"></i>
                            </Button>
                          </LinkContainer>
                          <Button
                            variant="light"
                            className="btn-sm"
                            onClick={() => deleteHandler(product._id)}
                          >
                            <i className="far fa-trash-alt"></i>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <Paginate
                  page={page}
                  pages={pages}
                  isAdmin={true}
                  keyword={keyword}
                  location={location}
                  filter={"&id=&price=&category="}
                />
              </div>
            )}
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default ProductListScreen;
