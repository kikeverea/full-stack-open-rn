import { useQuery } from '@apollo/client'
import { REPOSITORIES } from '../graphql/queries'

const useRepositories = ({ sortBy, direction }) => {

  const { data, loading } = useQuery(REPOSITORIES, {
    variables: { orderBy: sortBy, orderDirection: direction },
    fetchPolicy: 'cache-and-network',
  })

  return loading
    ? { repositories: null, loading }
    : { repositories: data ? data.repositories : [], loading}
}

export default useRepositories