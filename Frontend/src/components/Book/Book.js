import { Button } from '@mui/material'
import React from 'react'

export default function Book(book){
  const {title,author,available,description,genre,price,ISBN,image} = book.book
  if(available){
    return(
      <div className='book'>
        <li className='card'>
          <h1>{title}</h1>
          <img src={image} alt={title} />
          <article>By {author}</article>
          <p>{description}</p>
          <div className='cardtext'><b>Genre:</b> {genre}</div>
          <div className='cardtext'><b>ISBN:</b> {ISBN}</div>
          <div className='cardbutton'>
            <Button sx={{backgroundColor: '#232F3D',color:'white',marginTop:'10px', marginRight: '5px',marginBottom:'5px',marginLeft:'0px'}}>${price} CAD</Button>
            <Button sx={{backgroundColor: '#232F3D',color:'white',marginTop:'10px', marginRight: '5px',marginBottom:'5px',marginLeft:'0px'}}>Edit</Button>
          </div>
        </li>
      </div>
    )} 
  else {
    return}
}
