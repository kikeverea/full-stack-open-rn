import { useParams } from 'react-router-native'
import RepositoryItem from './RepositoryItem'
import ReviewList from '../reviews/ReviewList'
import useRepository from '../../hooks/useRepository'

const SingleRepository = () => {

  const params = useParams()
  const { repository, reviews, fetchMore } = useRepository(params.repositoryId)

  if (!repository)
    return null

  return (
    <ReviewList
      reviews={ reviews }
      header={ <RepositoryItem repository={ repository } showLinkButton={ true }/> }
      onEndReached={ fetchMore }
    />
  )
}

export default SingleRepository