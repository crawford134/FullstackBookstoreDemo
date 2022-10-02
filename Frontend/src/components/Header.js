import React from 'react'
import { AppBar, Typography } from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

export default function Header() {
  return (
    <div>
      <AppBar className='Header'>
        <Typography className='HeaderTitle'>
        <LibraryBooksIcon className='HeaderIcon'/>
        Bookstore
        </Typography>
      </AppBar>
    </div>
  )
}
