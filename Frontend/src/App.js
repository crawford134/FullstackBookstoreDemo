import React from "react";
import Header from "./components/Header";
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import AddBook from "./components/Book/AddBook";
import Books from "./components/Book/Books"; 
import EditBook from "./components/Book/EditBook"

function App() {
  return (
    <React.Fragment>
      <header><Header /></header>
      <main className="MainBody">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} exact/>
          <Route path="/add" element={<AddBook />} exact/>
          <Route path="/products" element={<Books />} exact/>
          <Route path="/edit" element={<EditBook />} exact/>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
