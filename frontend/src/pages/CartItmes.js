import React,{useEffect} from 'react'
import {useParams } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {addToCart,removeFromCard} from '../redux/actions'
import './CartItems.css'
function CartItmes() {
  const {id,qty}=useParams()
  const productId=id
  const dispatch=useDispatch()
  const cart=useSelector(state => state.cart)
  const {cartItems}=cart


useEffect(()=>{
    if(productId){
      dispatch(addToCart(productId,qty))
    }
  },[dispatch,productId,qty])

  const removeFromCartHandler=(id)=>{
    dispatch(removeFromCard(id))
}
  return (
    <div className='Cart-Container'>
      <h2>Items</h2>
        {cartItems.map((item,index)=>{
            return <div key={index} className='Cart-Items'>
              
              <h2 key={index}>{item.id}</h2>
              <h4> Ilość {item.qty}</h4>
              <button onClick={()=>removeFromCartHandler(item.id)}>Delete</button>             
                 </div>    
        })}
    </div>
  )
}

export default CartItmes