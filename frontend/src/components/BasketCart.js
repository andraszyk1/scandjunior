import React from 'react'
import './BasketCart.css'
import {useSelector} from 'react-redux';
function BasketCart(props) {

    const cart=useSelector(state => state.cart)
    const {cartItems,itemqty}=cart
    return (
    <>
    <div className="basket-body" style={{display:props.show ? 'flex':'none'}} >
        <div className='basket-frame12'>
            My Bag {itemqty } Items

            {cartItems.map((item,key)=>{
                return (
                     
            <div key={key} className="basket-carts-body">
                <div className='cart'>
                    <div className='cart-frame-9'>
                        <div className='cart-frame-7'>
                            <div>{item.id}</div>
                            <div>{item.qty}</div>
                         </div>
                    </div>
                </div>
            </div>
        

                )
            })
        }
    </div>
    </div>
    </>
  
  )
}

export default BasketCart