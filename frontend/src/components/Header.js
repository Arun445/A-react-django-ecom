import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";
import { useHistory } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";

function Header() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  let history = useHistory();

  const logoutHandler = (e) => {
    history.push("/");
    e.preventDefault();

    dispatch(logout());
  };
  return (
    <header>
      <Navbar
        bg="secondary"
        expand="lg"
        className="py-4 Navbar "
        collapseOnSelect
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <h2>EcomWebsite</h2>
            </Navbar.Brand>
          </LinkContainer>
          <NavDropdown title="Products" id="basic-nav-dropdown">
            <LinkContainer to={"/items?keyword=&page=1&category=electronics"}>
              <NavDropdown.Item className="mt-1 mb-1 pt-3 pb-3">
                Electronics
              </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to={"/items?keyword=&page=1&category=shoes"}>
              <NavDropdown.Item className="mt-1 mb-1 pt-3 pb-3">
                Shoes
              </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to={"/items?keyword=&page=1&category=sportswear"}>
              <NavDropdown.Item className="mt-1 mb-1 pt-3 pb-3">
                Sports Wear
              </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to={"/items?keyword=&page=1&category=furniture"}>
              <NavDropdown.Item className="mt-1 mb-1 pt-3 pb-3">
                Furniture
              </NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ">
              <SearchBox className="mt-2" />

              <h6 className="mt-2">
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <i className="fas fa-shopping-cart"></i>Cart
                  </Nav.Link>
                </LinkContainer>
              </h6>
              {userInfo && userInfo.isAdmin && (
                <NavDropdown
                  as="h6"
                  title="Admin"
                  id="nav-dropdown"
                  className="mr-1 mt-2"
                >
                  <h6>
                    <LinkContainer to="/products">
                      <NavDropdown.Item className="mt-1 mb-1 pt-3 pb-3">
                        Products
                      </NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/users">
                      <NavDropdown.Item className="mt-1 mb-1 pt-3 pb-3">
                        users
                      </NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/orderlist">
                      <NavDropdown.Item className="mt-1 mb-1 pt-3 pb-3">
                        orders
                      </NavDropdown.Item>
                    </LinkContainer>
                  </h6>
                </NavDropdown>
              )}
              {userInfo ? (
                <NavDropdown
                  as="h6"
                  title={
                    userInfo.name.indexOf(" ") >= 0
                      ? userInfo.name.split(" ")[0]
                      : userInfo.name.length > 15
                      ? userInfo.name.substring(0, 15)
                      : userInfo.name
                  }
                  id="nav-dropdown"
                  className="mt-2"
                >
                  <h6>
                    <LinkContainer to="/profile">
                      <NavDropdown.Item className="mt-1 mb-1 pt-3 pb-3">
                        profile
                      </NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/">
                      <NavDropdown.Item
                        onClick={logoutHandler}
                        className="mt-1 mb-1 pt-3 pb-3"
                      >
                        logout
                      </NavDropdown.Item>
                    </LinkContainer>
                  </h6>
                </NavDropdown>
              ) : (
                <h6>
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <i className="fas fa-user"></i>Login
                    </Nav.Link>
                  </LinkContainer>
                </h6>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
