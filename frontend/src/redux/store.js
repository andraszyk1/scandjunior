import { createStore,applyMiddleware,combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import {cartReducer} from "./reducers";
import thunk from 'redux-thunk'
const reducer=combineReducers({
    cart:cartReducer,
})
const cartItemsFromStorage=localStorage.getItem('cartItems') ?
                        JSON.parse(localStorage.getItem('cartItems')):[]
const cartItemsQuantityFromStorage=localStorage.getItem('itemqty') ?
                        JSON.parse(localStorage.getItem('itemqty')):0

const initialState = {
    cart : { cartItems :cartItemsFromStorage,itemqty:cartItemsQuantityFromStorage}
}
const middleware= [thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;