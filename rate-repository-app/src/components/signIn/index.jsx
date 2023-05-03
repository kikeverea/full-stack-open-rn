import {Formik} from 'formik'
import SignInForm from './SignInForm'
import * as yup from 'yup'
import useSignIn from '../../hooks/useSignIn'
import AuthStorage from '../../utils/authenticateStorage'

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

  const onSubmit = async (values, { resetForm }) => {
    console.log(values)

    const { username, password } = values

    try {
      const { data } = await signIn({ username, password })
      resetForm()
      await storeToken(data)
    }
    catch (e) {
      console.log(e)
    }
  }

  const storeToken = async (accessToken) => {
    const storage = new AuthStorage()
    await storage.setAccessToken(accessToken)
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