import { useQuery, gql } from '@apollo/client';
const GET_PRODUCT = gql`
query Get($id:String!){
  product(id:$id){
    name
    inStock
    gallery
    description
    category
    prices{
      currency{
        label
      }
      amount
    }
  }
  }
  `;

export const useProduct=(id)=>{
    const { loading, error, data } = useQuery(GET_PRODUCT,{
      variables:{
        id
      }
    });

    return{
        error,
        data,
        loading
    }
}