import {CART_ADD_ITEM,CART_REMOVE_ITEM} from "./consts"
export const cartReducer=(state={cartItems:[]},action)=>{
  switch (action.type) {
      case CART_ADD_ITEM:
          const item=action.payload
          const existItem=state.cartItems.find(x=>x.id===item.id)
        //   const exists = state.products.some((p) => p.id === productId);
          console.log(item)
          console.log(existItem)
          if(existItem){
            console.log(state.cartItems)
             return{

                  ...state,
                  cartItems:state.cartItems.map((p) =>
                  p.id === existItem.id ? { ...p, qty: Number(p.qty) + 1 } : p
                ),
                    itemqty:state.itemqty
                     
                     
             }     
          }else{
              return{...state,
                      cartItems:[...state.cartItems,item],itemqty:state.itemqty+1
              }
          }
          case CART_REMOVE_ITEM:
              return {
                  ...state,
                  cartItems: state.cartItems.filter(x => x.id !== action.payload)
                  ,itemqty:state.itemqty-1
              }
      
      default:
          return state;
  }
}


