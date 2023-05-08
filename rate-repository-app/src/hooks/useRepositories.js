import { useQuery } from '@apollo/client'
import { REPOSITORIES } from '../graphql/queries'

const useRepositories = () => {

  const { data, loading } = useQuery(REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  })

  return loading
    ? { repositories: null, loading }
    : { repositories: data ? data.repositories : [], loading}
}

export default useRepositories