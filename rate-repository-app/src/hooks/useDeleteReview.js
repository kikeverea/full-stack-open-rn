import {useMutation} from '@apollo/client'
import {DELETE_REVIEW} from '../graphql/mutations'

const useDeleteReview = ({ onDelete })=> {

  const [deleteReviewMutation, deleteResult] = useMutation(DELETE_REVIEW)

  const deleteReview = async (id) => {
    try {
      const { data } = await deleteReviewMutation({
        variables: { id: id }
      })

      if (data.deleteReview) {
        onDelete()
      }
    }
    catch (e) {
      console.error(e)
    }
  }

  return [deleteReview, deleteResult]
}

export default useDeleteReview