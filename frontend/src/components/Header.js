import React,{useState} from 'react'

import BasketCart from './BasketCart'
import Categories from './Categories'

function Header() {

  const [cartshow,setCartshow]=useState(false)
  const showcartHandler=()=>{
    setCartshow(!cartshow)
  }

  return (
    <header>
       <Categories ShowCard={showcartHandler}/>
       <BasketCart show={cartshow}/>
  
    </header>

  )
}


export default Header