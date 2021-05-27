import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

function ProductCreateScreen({ history, location }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [countInStock, setCountInStock] = useState(0);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {}, [dispatch, history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProduct({ name, brand, category, description, price, countInStock })
    );
  };
  return (
    <FormContainer>
      <h1 className="text-center mt-4">Product</h1>

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
  );
}

export default ProductCreateScreen;
