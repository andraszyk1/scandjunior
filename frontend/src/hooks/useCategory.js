import { useQuery, gql } from '@apollo/client';
const GET_PRODUCTS_CATEGORY = gql`
query Get($name:String!){
  category(input:{title:$name}){
    products{
      id
      name
      inStock
      gallery
      description
      category
      attributes{
        id
        name
        type
        items{
          id
          value
          displayValue
        }
      }
      prices{
        currency{symbol
        label
        }
        amount
      }
      brand
      
    }
  }
}

  `;

export const useCategory=(name)=>{
    const { loading, error, data } = useQuery(GET_PRODUCTS_CATEGORY,{
      variables:{
        name
      }
    });

    return{
        error,
        data,
        loading
    }
}