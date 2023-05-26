import {useNavigate} from "react-router-native";
import Toast from "react-native-toast-message";
import useSignUp from "../../hooks/useSignUp";
import SignUpContainer from "./SignUpContainer";

const Signup = () =>{

  const [signup] = useSignUp();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      await signup({ username, password })
      navigate('/')
    }
    catch (e) {
      Toast.show({
        type: 'error',
        text1: 'Signed up failed',
        position: 'bottom'
      })
      console.log(e)
    }
  }

  return <SignUpContainer onSubmit={ onSubmit } />
}

export default Signup