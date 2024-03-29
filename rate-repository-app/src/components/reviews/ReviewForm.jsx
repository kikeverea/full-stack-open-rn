import FormikTextInput from '../input/FormikTextInput'
import ItemSeparator from '../ItemSeparator'
import FormContainer from '../FormContainer'
import Button from '../Button'

const ReviewForm = ({ onSubmit }) =>
  <FormContainer>
    <FormikTextInput name='owner' placeholder='Repository owner name'/>
    <ItemSeparator />
    <FormikTextInput name='repository' placeholder='Repository name'/>
    <ItemSeparator />
    <FormikTextInput name='rating' placeholder='Rating between 0 and 100'/>
    <ItemSeparator />
    <FormikTextInput name='review' placeholder='Review' multiline={ true }/>
    <ItemSeparator />
    <Button onPress={ onSubmit } label='Create a review'/>
  </FormContainer>

export default ReviewForm