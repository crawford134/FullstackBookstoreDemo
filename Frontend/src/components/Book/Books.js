import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Book from './Book'

const URL = process.env.REACT_APP_URL

async function FetchHandler(){
  console.log("URL",URL)
  return await axios.get(URL)
    .then((res)=> res.data
    )
}

export default function Books() {
  const [books, setbooks] = useState()
  const [Temp, setTemp] = useState()
  useEffect(() => {
    FetchHandler()
    .then((data) => {
      setbooks(data.body)
      console.log("Books",data.body)
      console.log("Books",books)
      setTemp(`${books[0].title}`)

  })}
  ,[books]);

  return (
    <div>
      <p>{Temp}</p>
      <table>
        {books && books.map((book,i) => (
          <div key={i}>
            {book.available? 
              <Book 
                title={book.title} 
                id={book._id} 
                author={book.author} 
                genre={book.genre} 
                price={book.price} 
                image={book.image} /> : 
              <div/>}
          </div>
        ))}
      </table>
    </div>
  )
}
