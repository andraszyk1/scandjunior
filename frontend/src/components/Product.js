import React from 'react';
import { Link } from 'react-router-dom';


function Product({product}) {

  return (    
    <div className="product-element">
    <div className="product-img">
      <img src={product.gallery[0]} height="420" width="327" alt={product.name}/>
    </div>
  
      <div className="product-name">
        <Link to={`/product/${product.id}`}>{product.name}</Link>
      </div>
   
    
  </div>
       
   )
}


export default Product;
