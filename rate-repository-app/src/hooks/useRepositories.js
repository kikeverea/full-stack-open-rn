import { useQuery } from '@apollo/client'
import { REPOSITORIES } from '../graphql/queries'

const useRepositories = () => {

  const { data, loading } = useQuery(REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  })

  return loading
    ? { repositories: [], loading }
    : { repositories: data ? data.repositories : [], loading}
}

export default useRepositories