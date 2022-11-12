import React,{useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProduct } from '../hooks/useProduct';

// Log the initial state

function ProductPage({product}) {
    const regex = /(<([^>]+)>)/ig;
    const {id}=useParams();
    const [qty,setQty]=useState(1);
    const { loading, error, data } = useProduct(id);
    const navigate=useNavigate()
    const AddtoCardHandler=()=>{
        setQty({qty:1});
        navigate(`/cart/${id}/${qty}`)
    }


    return (
        <>
            {loading ? <p>Loading...</p> : error ? <p>Error...</p>:
                <div className='productsList'>
                <div className='product-img-column'>
                    {data.product.gallery.map((img,index)=>{
                    return (
                        <img src={img} height="150" width="150" alt={data.product.name}/> 
                    )
                    })}
                </div>
            
                 <div className='product-img'>
                    <img src={data.product.gallery[0]} height="551" width="530" alt={data.product.name}/>
                 </div>
                 <div className='product-row'>
                 {data.product.name}
                 </div>
                 <div className='product-row'>
                 {data.product.description.replace(regex, '')}
                 </div>
                 <div className='product-row'>
                 {data.product.prices.map((price,index)=>{
                    return <div key={index}> {price.amount}  {price.currency.label }</div>
                 })}
                 </div>
                 {data.product.inStock ? "In stock" : "Out of stock"}
                 <button className='button' onClick={AddtoCardHandler}>Add to Card</button>
                 </div>
              
             
            }
       
        </> 
    )
}

export default ProductPage