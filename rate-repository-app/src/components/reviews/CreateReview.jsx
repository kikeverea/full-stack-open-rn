import {useNavigate} from 'react-router-native'
import Toast from 'react-native-toast-message'
import ReviewFormContainer from './ReviewFormContainer'
import useCreateReview from '../../hooks/useCreateReview'
const CreateReview = () => {

  const navigate = useNavigate()
  const [createReview] = useCreateReview()

  const onSubmit = async ({ owner, repository, rating, review }) => {
    const newReview = await createReview({ owner, repository, rating, review })

    if (newReview)
      navigate(`/${newReview.repositoryId}`)
    else
      Toast.show({
        type: 'error',
        text1: 'Could not submit review',
        position: 'bottom'
      })
  }

  return <ReviewFormContainer onSubmit={ onSubmit }/>
}

export default CreateReview