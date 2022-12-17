import React from 'react';
import { useNavigate } from "react-router-dom";

export default function AddProducts() {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Add Products</h1>
      <button onClick={() => navigate("/add/books")}>Add Book</button>
    </div>
  )
}
