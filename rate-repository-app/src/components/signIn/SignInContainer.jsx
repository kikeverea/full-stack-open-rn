import {Formik} from "formik";
import SignInForm from "./SignInForm";
import * as yup from "yup";

const initialValues = {
  username: '',
  password: ''
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required()
    .min(1, '')
    .trim(),
  password: yup
    .string()
    .required()
    .min(5, '')
    .trim()
})

const SignInContainer = ({ onSubmit }) => {
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

export default SignInContainer