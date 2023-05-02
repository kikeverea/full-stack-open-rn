import { StyleSheet } from 'react-native'
import { useField } from 'formik'

import TextInput from './TextInputNoStyle'
import Text from '../Text'
import theme from '../../theme'

const baseInput = {
  padding: 8,
  borderRadius: 6,
  borderWidth: 1
}

const styles = StyleSheet.create({
  input: {
    ...baseInput,
    borderColor: theme.colors.textSecondary
  },
  errorInput: {
    ...baseInput,
    borderColor: theme.colors.error
  },
  errorText: {
    marginTop: 5,
    color: theme.colors.error
  },
})

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)

  // Check if the field is touched and the error message is present
  const showError = meta.touched && meta.error

  return (
    <>
      <TextInput
        style={ showError ? styles.errorInput : styles.input }
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
}

export default FormikTextInput
