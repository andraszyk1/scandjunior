import { useProduct } from "../hooks/useProduct"
import {CART_ADD_ITEM,CART_REMOVE_ITEM} from "./consts"
const getData=(id)=>{

}

 export const addToCart=(id,qty)=>async (dispatch,getState)=>{
 

  dispatch({
      type:CART_ADD_ITEM,
      payload:{
          id,
          qty
      }
  })

  localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
  localStorage.setItem('itemqty',JSON.stringify(getState().cart.itemqty))

}
export const removeFromCard=(id)=>async(dispatch,getState)=>{
  dispatch({
      type:CART_REMOVE_ITEM,
      payload:id,
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  localStorage.setItem('itemqty',JSON.stringify(getState().cart.itemqty))
}