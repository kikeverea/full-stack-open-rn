import {useQuery} from '@apollo/client'
import { REPOSITORY_REVIEWS } from '../graphql/queries'

const useRepository = (repositoryId) => {
  const { data, loading } = useQuery(REPOSITORY_REVIEWS,
    { variables: repositoryId, fetchPolicy: 'cache-and-network' })

  if (loading)
    return null

  const repository = data.repository
  const reviews = repository.reviews.edges.map(edge => ({ ...edge.node, title: edge.node.user.username}))

  return {...repository, reviews: reviews}
}

export default useRepository