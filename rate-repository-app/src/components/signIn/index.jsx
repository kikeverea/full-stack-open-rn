import useSignIn from '../../hooks/useSignIn'
import {useNavigate} from 'react-router-native'
import SignInContainer from "./SignInContainer";
import Toast from "react-native-toast-message";


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
      Toast.show({
        type: 'error',
        text1: 'Wrong credentials',
        position: 'bottom'
      })
      console.log(e)
    }
  }

  return <SignInContainer onSubmit={ onSubmit }/>
}

export default SignIn