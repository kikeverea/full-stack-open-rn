import Text from './Text'
import {Pressable, StyleSheet} from 'react-native'
import theme from '../theme'

export const styles = (backgroundColor, { width, height }) => StyleSheet.create({
  button: {
    backgroundColor: backgroundColor,
    paddingLeft: width,
    paddingRight: width,
    paddingTop: height,
    paddingBottom: height,
    borderRadius: 6,
    textAlign: 'center'
  }
})

const getActionColor = (type) => {
  switch (type) {
    case 'action':
      return '#0165D4'
    case 'cancel' :
      return '#D6394C'
    case 'submit':
    default:
      return theme.colors.primary
  }
}

const getTypeDimensions = (type) => {
  switch (type) {
    case 'long':
      return { width: 30, height: 12 }
    case 'default':
    default:
      return { width: 12, height: 12 }
  }
}

const Button = ({ label, onPress, action, type='default', ...props }) => {

  const color = getActionColor(action)
  const dimensions = getTypeDimensions(type)

  return (
    <Pressable onPress={ onPress } {...props}>
      <Text color='white' style={ styles(color, dimensions).button }>{ label }</Text>
    </Pressable>
  )
}

export default Button