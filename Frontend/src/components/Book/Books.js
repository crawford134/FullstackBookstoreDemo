import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Book from './Book'

const URL = 'http://localhost:5001/books'

async function FetchHandler(){
  return await axios.get(URL)
    .then((res)=> res.data
    )
}

export default function Books() {
  const [books, setbooks] = useState()
  //const [Temp, setTemp] = useState()
  useEffect(() => {
    FetchHandler().then((data) => setbooks(data.body));
  },[]);
  //console.log("Books",books)

  return (
    <ul className='ulbook'>
      {books && books.map((book,i) => (
        <div key={i}>
          <Book book={book}/>
        </div>
      ))}
    </ul>
  )
}
