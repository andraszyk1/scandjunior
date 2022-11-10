import React from 'react';
import Product from '../components/Product';
import { useParams } from 'react-router-dom';
import { useCategory } from '../hooks/useCategory'
import Loader1 from '../components/Loading/Loader1';
function Products() {
    const {categoryname}=useParams();
    const category= categoryname ? categoryname : 'all';
    const { loading, error, data } = useCategory(category);
    return (
        <>
            {loading ? <Loader1/> : error ? <p>Error...</p>:
            <>
                <div className='products-category-name'>{categoryname}</div>
                <div className='productsList'>
                {data.category.products.map((product,key)=>{
                return <Product key={key} product={product}/>
                })}
                </div> 
             </>
            }
       
        </> 
    )
}

export default Products;