import {StyleSheet, View} from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white'
  }
})

const FormContainer = ({ children }) =>
  <View style={ styles.container }>{ children }</View>

export default FormContainer