import {useMutation} from '@apollo/client'
import {DELETE_REVIEW} from '../graphql/mutations'

const useDeleteReview = ()=> {

  const [deleteReviewMutation, deleteResult] = useMutation(DELETE_REVIEW)

  const deleteReview = async (id) => {
    try {
      const { data } = await deleteReviewMutation({
        variables: { id: id }
      })

      return data.deleteReview
    }
    catch (e) {
      console.error(e)
      return false
    }
  }

  return [deleteReview, deleteResult]
}

export default useDeleteReview