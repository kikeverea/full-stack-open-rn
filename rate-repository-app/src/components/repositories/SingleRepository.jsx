import { useParams } from 'react-router-native'
import RepositoryItem from './RepositoryItem'
import ReviewList from '../reviews/ReviewList'
import useRepository from '../../hooks/useRepository'

const SingleRepository = () => {

  const repositoryId = useParams()
  const repository = useRepository(repositoryId)

  if (!repository)
    return null

  return (
    <ReviewList
      reviews={ repository.reviews }
      header={ <RepositoryItem repository={ repository } showLinkButton={ true }/>
    }/>
  )
}

export default SingleRepository