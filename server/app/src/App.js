import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { CartProvider } from "./utils/CartState";
import { ProductsProvider } from "./utils/ProductState";

function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={Home} />

            <Route exact path="/cart" component={Cart} />
          </div>
        </Router>
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;
