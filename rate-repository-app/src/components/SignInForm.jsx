import { Pressable, View, StyleSheet } from 'react-native'
import FormikTextInput from './FormikTextInput'
import theme from '../theme'
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  input: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 6
  },
  submit: {
    backgroundColor: theme.colors.primary,
    padding: 8,
    borderRadius: 6,
    textAlign: 'center'
  },
  separator: {
    height: 10
  }
})

const ItemSeparator = () => <View style={styles.separator} />;

const SignInForm = ({ onSubmit }) =>
  <View style={ styles.container }>
    <FormikTextInput name='username' placeholder='username' style={ styles.input }/>
    <ItemSeparator />
    <FormikTextInput name='password' placeholder='password' secureTextEntry={ true } style={ styles.input }/>
    <ItemSeparator />
    <Pressable onPress={ onSubmit }>
      <Text color='white' style={ styles.submit }>sign in</Text>
    </Pressable>
  </View>

export default SignInForm