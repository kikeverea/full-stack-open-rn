import {Formik} from 'formik'
import SignInForm from './SignInForm'
import * as yup from 'yup'
import useSignIn from '../../hooks/useSignIn'
import {useNavigate} from 'react-router-native'

const initialValues = {
  username: '',
  password: ''
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required()
    .min(4)
    .trim(),
  password: yup
    .string()
    .required()
    .min(4)
    .trim()
})

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      await signIn({ username, password })
      navigate('/')
    }
    catch (e) {
      console.log(e)
    }
  }


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={ onSubmit }
      validationSchema={validationSchema}
    >
      {({handleSubmit}) => <SignInForm onSubmit={handleSubmit}/>}
    </Formik>
  )
}

export default SignIn