import FormContainer from "../FormContainer";
import FormikTextInput from "../input/FormikTextInput";
import ItemSeparator from "../ItemSeparator";
import ActionButton from "../ActionButton";

const SignUpForm = ({ onSubmit }) =>
  <FormContainer>
    <FormikTextInput name='username' placeholder='username'/>
    <ItemSeparator />
    <FormikTextInput name='password' placeholder='password' secureTextEntry={ true }/>
    <ItemSeparator />
    <FormikTextInput name='confirmPassword' placeholder='confirm password' secureTextEntry={ true }/>
    <ItemSeparator />
    <ActionButton onPress={ onSubmit } label='sign up'/>
  </FormContainer>

export default SignUpForm