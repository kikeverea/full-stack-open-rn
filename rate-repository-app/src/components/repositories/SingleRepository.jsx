import { useParams } from 'react-router-native'
import { useQuery } from '@apollo/client'

import { REPOSITORY, REVIEWS } from '../../graphql/queries'
import RepositoryItem from './RepositoryItem'
import ReviewList from '../reviews/ReviewList'


const SingleRepository = () => {

  const repositoryId = useParams()

  const { data: repositoryResult } = useQuery(REPOSITORY, { variables: repositoryId, fetchPolicy: 'cache-and-network'})
  const { data: reviewsResult } = useQuery(REVIEWS, { variables: repositoryId})

  const repository =
    repositoryResult && repositoryResult.repository
      ? repositoryResult.repository
      : null

  if (repository == null)
    return null

  const reviews =
    reviewsResult && reviewsResult.repository
      ? reviewsResult.repository.reviews.edges.map(edge => ({ ...edge.node, title: edge.node.user.username}))
      : []

  return (
    <ReviewList
      reviews={ reviews }
      header={ <RepositoryItem repository={ repository } showLinkButton={ true }/>
    }/>
  )
}

export default SingleRepository