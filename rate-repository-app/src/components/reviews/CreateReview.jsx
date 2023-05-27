import {useNavigate} from 'react-router-native'
import Toast from 'react-native-toast-message'
import ReviewFormContainer from './ReviewFormContainer'
import {useMutation} from '@apollo/client'
import {CREATE_REVIEW} from '../../graphql/mutations'
const CreateReview = () => {

  const navigate = useNavigate()
  const [createReview] = useMutation(CREATE_REVIEW)
  const onSubmit = async ({ owner, repository, rating, review }) => {
    try {
      const { data } = await createReview({
        variables: {
          ownerName: owner, repositoryName: repository, rating: parseInt(rating), text: review }
      })

      navigate(`/${data.createReview.repositoryId}`)
    }
    catch (e) {
      Toast.show({
        type: 'error',
        text1: 'Could not submit review',
        position: 'bottom'
      })
      console.error(e)
    }
  }

  return <ReviewFormContainer onSubmit={ onSubmit }/>
}

export default CreateReview