import React from 'react';
import { useNavigate } from "react-router-dom";

export default function EditProducts() {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Edit Products</h1>
      <button onClick={() => navigate("/edit/books")}>Edit Books</button>
    </div>
  )
}