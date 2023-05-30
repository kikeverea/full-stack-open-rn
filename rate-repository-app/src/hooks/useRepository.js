import {useQuery} from '@apollo/client'
import { REPOSITORY_REVIEWS } from '../graphql/queries'

const useRepository = (repositoryId) => {

  const variables = { first: 5, repositoryId }

  const { data, loading, fetchMore } = useQuery(REPOSITORY_REVIEWS,
    { variables, fetchPolicy: 'cache-and-network' })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        after: data.repository.reviews.pageInfo.endCursor,
      },
    });
  }

  const repository = !loading && data?.repository || null
  const reviews = repository?.reviews.edges.map(edge => ({ ...edge.node, title: edge.node.user.username}))

  return { repository, reviews, fetchMore: handleFetchMore }
}

export default useRepository