import { useQuery } from '@apollo/client'
import { REPOSITORIES } from '../graphql/queries'

const useRepositories = ({ sortBy, direction }, filter) => {

  const variables = { first: 5, orderBy: sortBy, orderDirection: direction, searchKeyword: filter}

  const { data, loading, fetchMore, result } = useQuery(REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network',
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables
      },
    });
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result
  }
}

export default useRepositories