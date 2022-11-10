import { useProduct } from "../hooks/useProduct"
import {CART_ADD_ITEM,CART_REMOVE_ITEM} from "./consts"


 export const addToCart=(id,qty)=>async (dispatch,getState)=>{
 const  {
    error,
    data,
    loading
}=useProduct(id);

  dispatch({
      type:CART_ADD_ITEM,
      payload:{
          id:data.id,
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