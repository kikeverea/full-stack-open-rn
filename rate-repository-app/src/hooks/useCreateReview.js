import {useMutation} from '@apollo/client'
import {CREATE_REVIEW} from '../graphql/mutations'

const useCreateReview = () => {

  const [mutation] = useMutation(CREATE_REVIEW)
  const createReview = async ({ owner, repository, rating, review }) => {
    try {
      const { data } = await mutation({
        variables: {
          ownerName: owner, repositoryName: repository, rating: parseInt(rating), text: review }
      })

      if(data)
        return data.createReview
    }
    catch (e) {
      log.error(e)
    }

    return null
  }

  return [createReview]
}

export default useCreateReview