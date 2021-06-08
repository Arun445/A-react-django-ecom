import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceorderScreen from "./screens/PlaceorderScreen";
import OrderScreen from "./screens/OrderScreen";
import ProductCreateScreen from "./screens/ProductCreateScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import ScrollToTop from "./components/ScrollToTop";
import ItemScreen from "./screens/ItemScreen";
import PasswordResetScreen from "./screens/PasswordResetScreen";
import PasswordResetConfirmScreen from "./screens/PasswordResetConfirmScreen";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/login" component={LoginScreen} />
          <Route path="/signup" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceorderScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/items" component={ItemScreen} />
          <Route path="/password_reset" component={PasswordResetScreen} />
          <Route
            path="/password_reset_confirm/:uid/:token"
            component={PasswordResetConfirmScreen}
          />

          <Route path="/orderlist" component={OrderListScreen} />
          <Route path="/create" component={ProductCreateScreen} />
          <Route path="/products" component={ProductListScreen} />
          <Route path="/users" component={UserListScreen} />
          <Route path="/user/edit/:id" component={UserEditScreen} />
          <Route path="/edits/:id" component={ProductEditScreen} />
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
