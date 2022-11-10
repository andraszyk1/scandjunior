import { useQuery, gql } from '@apollo/client';
const GET_CATEGORIES = gql`
query{
    categories{
      name
    }
}
`;

export const useCategories=()=>{
    const { loading, error, data } = useQuery(GET_CATEGORIES);

    return{
        error,
        data,
        loading
    }
}