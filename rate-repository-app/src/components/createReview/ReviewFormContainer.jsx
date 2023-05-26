import {Formik} from 'formik'
import * as yup from 'yup'
import ReviewForm from './ReviewForm'

const initialValues = {
  owner: '',
  repository: '',
  rating: -1,
  review: ''
}

const validationSchema = yup.object().shape({
  owner: yup
    .string()
    .required('Repository owner name is required')
    .trim(),
  repository: yup
    .string()
    .required('Repository name is required')
    .trim(),
  rating: yup
    .number()
    .typeError('Rating must be a number')
    .required('Rating is required')
    .min(0, 'Rating must be a value between 0 and 100')
    .max(100, 'Rating must be a value between 0 and 100'),
  review: yup
    .string()
})
const ReviewFormContainer = ({ onSubmit }) => {
  return(
    <Formik
      initialValues={ initialValues }
      onSubmit={ onSubmit }
      validationSchema={ validationSchema }>
      {({ handleSubmit }) => <ReviewForm onSubmit={ handleSubmit }/> }
    </Formik>
  )
}

export default ReviewFormContainer