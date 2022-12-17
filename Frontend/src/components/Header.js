import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [value, setValue] = useState(0)
  return (
    <AppBar sx={{backgroundColor: '#232F3D'}} className='Header' position='sticky'>
      <Toolbar>
        <LibraryBooksIcon className='HeaderIcon'/>
        <Tab className='HeaderTitle' LinkComponent={NavLink} to="/" label='BookStore' onClick={(e)=>setValue(0)}/>
        <Tabs sx={{ml : 'auto'}} className='HeaderTabGroup' textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,value)=>setValue(value)}>
          <Tab LinkComponent={NavLink} to="/" label='Home' value={0}/>
          <Tab LinkComponent={NavLink} to="/about" label='About Us' value={1}/>
          <Tab LinkComponent={NavLink} to="/products" label='Products' value={2}/>
          <Tab LinkComponent={NavLink} to="/add" label='Add Product' value={3}/>
          <Tab LinkComponent={NavLink} to="/edit" label='Edit Product'value={4}/>
        </Tabs>
      </Toolbar>
    </AppBar>
  )
}
