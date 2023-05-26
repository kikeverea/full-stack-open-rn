import {Formik} from "formik";
import SignUpForm from "./SignUpForm";
import * as yup from "yup";

const initialValues = {
  username: '',
  password: '',
  confirmPassword: ''
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(1, 'Username is required')
    .max(30, 'Max. 30 characters long')
    .trim(),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Min. 5 characters long')
    .max(50, 'Max. 30 characters long')
    .trim(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords don't match")
    .required('Password confirmation is required')
})

const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={ initialValues }
      onSubmit={ onSubmit }
      validationSchema={ validationSchema }
    >
      {({handleSubmit}) => <SignUpForm onSubmit={ handleSubmit }/>}
    </Formik>
  )
}

export default SignUpContainer