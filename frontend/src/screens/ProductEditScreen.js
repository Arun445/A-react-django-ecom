import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button, Form, Container, Table } from "react-bootstrap";
import Message from "../components/Message";
import { getUserProfile, editUserProfile } from "../actions/userActions";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import axios from "axios";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";
import { getOrders } from "../actions/orderActions";
import { LinkContainer } from "react-router-bootstrap";
import FormContainer from "../components/FormContainer";
import { updateProduct, listProductDetail } from "../actions/productActions";

function ProductEditScreen({ history, match }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0");
  const [countInStock, setCountInStock] = useState("0");
  const [messageSuccess, setMessageSuccess] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();
  const productId = match.params.id;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    success,
    error: productError,
    loading: productLoading,
  } = productUpdate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productDetail = useSelector((state) => state.productDetail);
  const { product, loading, error } = productDetail;

  useEffect(() => {
    if (success) {
      setMessageSuccess("You successfully updated this profile");
      dispatch(listProductDetail(productId));
      dispatch({ type: PRODUCT_UPDATE_RESET });
    } else {
      if (product._id !== Number(productId)) {
        dispatch(listProductDetail(productId));
      } else {
        setName(product.name);
        setCategory(product.category);
        setBrand(product.brand);
        setDescription(product.description);
        setPrice(product.price);
        setCountInStock(product.countInStock);
      }
    }
  }, [dispatch, history, userInfo, success, product]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        id: productId,
        name,
        brand,
        category,
        description,
        price,
        countInStock,
      })
    );
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("image", file);
    formData.append("product_id", productId);

    setUploading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "mulipart/form-data",
        },
      };

      const { data } = await axios.post(
        `/api/products/upload/`,
        formData,
        config
      );
      setImage(data);
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <div>
      <Link to="/products" className="btn btn-light">
        <i className="fas fa-arrow-left"></i> Go back
      </Link>
      <FormContainer>
        <h1 className="text-center">Product</h1>
        {productLoading ? (
          <Loader />
        ) : messageSuccess ? (
          <Message variant="success">{messageSuccess}</Message>
        ) : (
          productError && <Message variant="danger">{productError}</Message>
        )}

        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="brand">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="category" className="rounded">
            <Form.Label>Category</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="image" className="rounded">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              disabled
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <Form.File
              id="image-file"
              label="Choose File"
              custom
              onChange={uploadFileHandler}
            ></Form.File>
            {uploading && <Loader />}
          </Form.Group>

          <Form.Group controlId="description" className="rounded">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="price" className="rounded">
            <Form.Label>Price</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="countInStock" className="rounded">
            <Form.Label>CountInStock</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="CountInStock"
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
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
    </div>
  );
}

export default ProductEditScreen;
