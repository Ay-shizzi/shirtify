import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Components/CartContext";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";
import ShoppingCart from "./Pages/ShoppingCart";
import Layout from "./Components/Layout";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import PrivateRoute from "./Auth/PrivateRoute";

const App = () => {
  return (
    <div>
      <CartProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<PrivateRoute Component={Home} />} />
              <Route
                path="/product/:id"
                element={<PrivateRoute Component={ProductDetail} />}
              />
              <Route
                path="/shoppingcart"
                element={<PrivateRoute Component={ShoppingCart} />}
              />
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </div>
  );
};

export default App;
