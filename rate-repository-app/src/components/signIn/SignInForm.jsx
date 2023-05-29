import FormikTextInput from '../input/FormikTextInput'
import ItemSeparator from '../ItemSeparator'
import FormContainer from '../FormContainer'
import Button from '../Button'

const SignInForm = ({ onSubmit }) =>
  <FormContainer>
    <FormikTextInput name='username' placeholder='username'/>
    <ItemSeparator />
    <FormikTextInput name='password' placeholder='password' secureTextEntry={ true }/>
    <ItemSeparator />
    <Button onPress={ onSubmit } label='sign in'/>
  </FormContainer>

export default SignInForm