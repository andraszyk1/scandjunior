// Import everything needed to use the `useQuery` hook
import React from "react";
import CartItmes from "./pages/CartItmes";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {

  return (
    <Router>
    <div>
    <Header/>
        <div >
        <Routes>
          <Route exact path="/" element={<Products />}/>
          <Route exact path="/:categoryname" element={<Products />}/> 
          <Route exact path="/product/:id" element={<ProductPage />}/>
          <Route exact path="/cart/:id/:qty/" element={<CartItmes />}/>
        </Routes>
        </div>
    </div>
    </Router>
  );
}

export default App;
