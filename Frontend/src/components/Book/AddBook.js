import React from 'react'
import { FormControlLabel, Checkbox, FormLabel, TextField, Button } from '@mui/material'

const URL = 'http://localhost:5001/books'

export default function AddBook() {
  console.log("AddBook URL: ",URL)
  return (
    <div className='addbook'>
      <h1>Add Book</h1>
        <form className='addform'>
            <FormLabel>Available</FormLabel>
            <br />
            <FormControlLabel control={<Checkbox defaultChecked/>} label="available" />
            <br />
            <FormLabel>Title</FormLabel>
            <TextField margin='normal' fullWidth variant='outlined' name='title'/>
            <FormLabel>Image URL</FormLabel>
            <TextField margin='normal' fullWidth variant='outlined' name='image'/>
            <FormLabel>Author</FormLabel>
            <TextField margin='normal' fullWidth variant='outlined' name='author'/>
            <FormLabel>Description</FormLabel>
            <TextField margin='normal' fullWidth variant='outlined' name='description'/>
            <FormLabel>Genres</FormLabel>
              <br />
              <FormControlLabel control={<Checkbox defaultChecked/>} label="genre1" />
              <FormControlLabel control={<Checkbox defaultChecked/>} label="genre2" />
              <FormControlLabel control={<Checkbox defaultChecked/>} label="genre3" />
              <FormControlLabel control={<Checkbox defaultChecked/>} label="genre4" />
              <FormControlLabel control={<Checkbox defaultChecked/>} label="genre5" />
              <FormControlLabel control={<Checkbox defaultChecked/>} label="genre6" />
              <br />
            <FormLabel>ISBN</FormLabel>
            <TextField margin='normal' fullWidth variant='outlined' name='isbn'/>
            <FormLabel>Price</FormLabel>
            <TextField margin='normal' fullWidth variant='outlined' name='price'/>
            <Button>Create</Button>
        </form>
    </div>
  )
}
