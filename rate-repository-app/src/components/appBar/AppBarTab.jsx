import Text from "../Text";
import { Link } from 'react-router-native'

const AppBarTab = ({ text, linkTo, action }) =>
  <Link onPress={ action } to={ linkTo }>
    <Text color='white' fontSize='subheading' style={{ paddingHorizontal: 8 }}>{ text }</Text>
  </Link>

export default AppBarTab