import React,{useEffect} from 'react'
import {useParams } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {addToCart,removeFromCard} from '../redux/actions'
import { Link } from 'react-router-dom';
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
              <div className="counter">
              <div className="btn">+</div>
              <div className="count">{item.qty}</div>
              <div className="btn">-</div>
              </div>
              <Link to={`/product/${item.id}`}>{item.id}</Link>
              
              <button onClick={()=>removeFromCartHandler(item.id)}>Delete</button>             
                 </div>    
        })}
    </div>
  )
}

export default CartItmes