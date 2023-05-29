import ReviewList from './ReviewList'
import {useNavigate} from 'react-router-native'
import {Alert} from 'react-native'
import useDeleteReview from '../../hooks/useDeleteReview'
import useReviews from '../../hooks/useReviews'

const UserReviews = () => {

  const navigate = useNavigate()
  const [reviews, refetchReviews] = useReviews()
  const [deleteReview] = useDeleteReview({ onDelete: async () => await refetchReviews()})

  const showRepository = (repositoryId) => {
    navigate(`/${repositoryId}`)
  }

  const confirmAndDelete = (reviewId) => {
    Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
      {
        text: 'CANCEL',
        style: 'cancel'
      },
      {
        text: 'DELETE',
        onPress: () => deleteReview(reviewId)
      }
    ])
  }

  return reviews
    ? <ReviewList
        reviews={ reviews }
        useTitle={ review => review.repository.fullName }
        reviewActions={{ showRepository: showRepository, deleteReview: confirmAndDelete }}/>
    : null
}

export default UserReviews