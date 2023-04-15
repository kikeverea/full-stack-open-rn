import {Formik} from 'formik'
import SignInForm from './SignInForm'

const initialValues = {
  username: '',
  password: ''
}

const onSubmit = (values) => {
  console.log(values)
}

const SignIn = () =>
  <Formik initialValues={ initialValues } onSubmit={ onSubmit }>
    { ({ handleSubmit }) => <SignInForm onSubmit={ handleSubmit } /> }
  </Formik>

export default SignIn