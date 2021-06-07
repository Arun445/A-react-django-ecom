import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../actions/productActions";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";
import Message from "../components/Message";
import Loader from "../components/Loader";
import axios from "axios";

function ProductCreateScreen({ history, location }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [countInStock, setCountInStock] = useState(0);
  const [messageSuccess, setMessageSuccess] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productCreate = useSelector((state) => state.productCreate);
  const { success, product, loading } = productCreate;

  useEffect(() => {
    if (success) {
      setMessageSuccess("You successfully created a new product");
      dispatch({ type: PRODUCT_CREATE_RESET });
    }
  }, [dispatch, history, userInfo, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);

    dispatch(
      createProduct({
        name,
        image,
        brand,
        category,
        description,
        price,
        countInStock,
      })
    );
  };

  return (
    <div>
      <Link to="/products" className="btn btn-light">
        <i className="fas fa-arrow-left"></i> Go back
      </Link>
      <FormContainer>
        <h1 className="text-center">Product</h1>

        {loading ? (
          <Loader />
        ) : (
          messageSuccess && (
            <Message variant="success">{messageSuccess}</Message>
          )
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
            <Form.Control type="text" placeholder="Image" value={image.name} />
            <Form.File
              id="image-file"
              label="Choose File"
              custom
              onChange={(e) => setImage(e.target.files[0])}
            ></Form.File>
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
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="countInStock" className="rounded">
            <Form.Label>CountInStock</Form.Label>
            <Form.Control
              required
              type="text"
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
            Create
          </Button>
          <Form.Group className="text-center mt-4"></Form.Group>
        </Form>
      </FormContainer>
    </div>
  );
}

export default ProductCreateScreen;
