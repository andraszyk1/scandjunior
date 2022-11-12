import React from 'react';
import { Link } from 'react-router-dom';


function Product({product}) {
console.log(product)
  return (    
    <div className="product-element">
    <div className="product-img">
      <img src={product.gallery[0]} height="330" width="354" alt={product.name}/>
    </div>
  
      <div className="product-row">
        <Link to={`/product/${product.id}`}>{product.name}</Link>
      </div>
      <div className="product-row">
      {product.prices.map((price,index)=>{
                    return  price.currency.label==="USD" ? <div key={index}>{price.amount} {price.currency.symbol}</div>:""
                   
       })}
      </div>
   
    
  </div>
       
   )
}


export default Product;
