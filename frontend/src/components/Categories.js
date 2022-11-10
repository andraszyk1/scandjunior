import React, { } from 'react'
import { Link } from 'react-router-dom';
import { useCategories } from '../hooks/useCategories';
import {useSelector} from 'react-redux';

    
const Categories =props=>{
  const cart=useSelector(state => state.cart)
  const {itemqty}=cart
  const { loading, error, data } = useCategories();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

    return( 
   
      <nav>
        <div className='nav-box'>
          <div className='nav-left'>
            {data.categories.map((categories) => {
            return <div key={categories.name} className="category-body">
                      <Link to={categories.name}>{categories.name}</Link>
                  </div>})}
            </div>
            <div className='nav-right'>
              <span><i className="fa-solid fa-cart-shopping" onClick={props.ShowCard}></i></span>
              <span>{itemqty}</span>
            </div>
        </div>
      </nav>
    )
}


export default Categories