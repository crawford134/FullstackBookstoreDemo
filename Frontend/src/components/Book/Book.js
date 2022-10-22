import React from 'react'

export default function Book({title,id,author,genre,price,image}) {
  return (
    <td>Book
      <tr>{title}</tr>
      <tr>{image}</tr>
      <tr>{genre}</tr>
      <tr>{author}</tr>
      <tr>{price}</tr>
      <tr><button>Click</button></tr>
    </td>
  )
}
