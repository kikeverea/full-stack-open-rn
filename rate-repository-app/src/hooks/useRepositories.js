import { useQuery } from '@apollo/client'
import { REPOSITORIES } from '../graphql/queries'

const useRepositories = ({ sortBy, direction }, filter) => {

  const { data, loading } = useQuery(REPOSITORIES, {
    variables: { orderBy: sortBy, orderDirection: direction, searchKeyword: filter},
    fetchPolicy: 'cache-and-network',
  })

  return loading
    ? { repositories: null, loading }
    : { repositories: data ? data.repositories : [], loading}
}

export default useRepositories