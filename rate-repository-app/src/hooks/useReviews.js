import {useQuery} from '@apollo/client'
import {AUTHENTICATED_USER} from '../graphql/queries'

const useReviews = () => {

  const { data, loading, refetch } = useQuery(AUTHENTICATED_USER, {
    variables: { includeReviews: true },
    fetchPolicy: 'cache-and-network'
  })

  const reviews =
    !loading && data && data.me
      ? data.me.reviews.edges.map(edge => ({ ...edge.node, title: edge.node.repository.fullName}))
      : null

  return [reviews, refetch]
}

export default useReviews