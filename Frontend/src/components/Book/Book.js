import { Button } from '@mui/material'
import React from 'react'

export default function Book(book){
  console.log("CurrentBook: ",book)
  const {title,author,available,description,genre,price,ISBN,image} = book.book
  console.log("Available: ",available)
  console.log("Genre: ",genre)
  if(available){
    return(
      <div>
        <h1>{title}</h1>
        <img src={image} alt={title} />
        <article>By {author}</article>
        <h3>{description}</h3>
        <h3>${price} CAD</h3>
        <h4>{ISBN}</h4>
        <Button sx={{backgroundColor: '#232F3D',color:'white',margin:'5px',marginLeft:'0px'}}>Purchase</Button>
        <Button sx={{backgroundColor: '#232F3D',color:'white'}}>Edit</Button>
      </div>
    )} 
  else {
    return(
      <div></div>
  )}
}
