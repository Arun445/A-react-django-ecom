import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";

function Header() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = (e) => {
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ">
              <h6>
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <i className="fas fa-shopping-cart"></i>Cart
                  </Nav.Link>
                </LinkContainer>
              </h6>
              {userInfo ? (
                <NavDropdown
                  as="h6"
                  title={
                    userInfo.name.indexOf(" ") >= 0
                      ? userInfo.name.split(" ")[0]
                      : userInfo.name
                  }
                  id="nav-dropdown"
                >
                  <h6>
                    <LinkContainer to="/profile">
                      <NavDropdown.Item className="mt-1 mb-1 pt-3 pb-3">
                        profile
                      </NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/logout">
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
              {userInfo && userInfo.isAdmin && (
                <NavDropdown as="h6" title="Admin" id="nav-dropdown">
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
                  </h6>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
