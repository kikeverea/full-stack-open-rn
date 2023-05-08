import FormikTextInput from '../input/FormikTextInput'
import ItemSeparator from '../ItemSeparator'

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white'
  },
  submit: {
    backgroundColor: theme.colors.primary,
    padding: 8,
    borderRadius: 6,
    textAlign: 'center'
  }
})

const SignInForm = ({ onSubmit }) =>
  <View style={ styles.container }>
    <FormikTextInput name='username' placeholder='username'/>
    <ItemSeparator />
    <FormikTextInput name='password' placeholder='password' secureTextEntry={ true }/>
    <ItemSeparator />
    <Pressable onPress={ onSubmit }>
      <Text color='white' style={ styles.submit }>sign in</Text>
    </Pressable>
  </View>

export default SignInForm