import Text from './Text'
import {Pressable, StyleSheet} from 'react-native'
import theme from '../theme'

export const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: theme.colors.primary,
    padding: 12,
    borderRadius: 6,
    textAlign: 'center'
  }
})

const ActionButton = ({ label, onPress, ...props }) => {
  return (
    <Pressable onPress={ onPress } {...props}>
      <Text color='white' style={ styles.submitButton }>{ label }</Text>
    </Pressable>
  )
}

export default ActionButton