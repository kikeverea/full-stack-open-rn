import ReviewList from './ReviewList'
import {useMutation, useQuery} from '@apollo/client'
import {AUTHENTICATED_USER} from '../../graphql/queries'
import {useNavigate} from 'react-router-native'
import {DELETE_REVIEW} from '../../graphql/mutations'
import {Alert} from 'react-native'

const UserReviews = () => {

  const navigate = useNavigate()

  const { data, refetch } = useQuery(AUTHENTICATED_USER, {
    variables: { includeReviews: true },
    fetchPolicy: 'cache-and-network'
  })

  const [deleteReviewMutation] = useMutation(DELETE_REVIEW)

  const reviews = data && data.me
    ? data.me.reviews.edges.map(edge => ({ ...edge.node, title: edge.node.repository.fullName}))
    : null

  const showRepository = (repositoryId) => {
    navigate(`/${repositoryId}`)
  }

  const confirmAndDelete = async (reviewId) => {
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
  const deleteReview = async (reviewId) => {
    try {
      const { data } = await deleteReviewMutation({
        variables: { id: reviewId }
      })

      if(data.deleteReview) {
        await refetch()
      }

      return data.deleteReview
    }
    catch (e) {
      console.error(e)
    }
  }

  return reviews
    ? <ReviewList
        reviews={ reviews }
        useTitle={ review => review.repository.fullName }
        reviewActions={{ showRepository: showRepository, deleteReview: confirmAndDelete }}/>
    : null
}

export default UserReviews