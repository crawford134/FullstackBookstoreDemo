import React from "react";
import Header from "./components/Header";
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import EditProducts from "./components/EditProducts";
import AddProducts from "./components/AddProducts";
import Books from "./components/Book/Books"; 
import AddBook from "./components/Book/AddBook";
import EditBook from "./components/Book/EditBook";

function App() {
  return (
    <React.Fragment>
      <header><Header /></header>
      <main className="MainBody">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} exact/>
          <Route path="/products" element={<Products />} exact/>
          <Route path="/add" element={<AddProducts />} exact/>
          <Route path="/edit" element={<EditProducts />} exact/>
          <Route path="/products/books" element={<Books />} exact/>
          <Route path="/add/books" element={<AddBook />} exact/>
          <Route path="/edit/books" element={<EditBook />} exact/>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
