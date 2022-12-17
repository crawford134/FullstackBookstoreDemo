import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Products() {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Products</h1>
      <button onClick={() => navigate("/products/books")}>Books</button>
    </div>
  )
}