import React,{useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProduct } from '../hooks/useProduct';

// Log the initial state

function ProductPage({product}) {
 
    const {id}=useParams();
    const [qty,setQty]=useState(0);
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
                 {data.product.name}
                 <img src={data.product.gallery[0]} height="420" width="327" alt={data.product.name}/>
                 <button className='button' onClick={AddtoCardHandler}>Add to Card</button>
                 
                </div> 
             
            }
       
        </> 
    )
}

export default ProductPage