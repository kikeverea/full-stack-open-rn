import Text from "./Text";
import { Pressable } from "react-native";

const AppBarTab = ({ text }) =>
  <Pressable>
    <Text color='white' fontSize='subheading'>{ text }</Text>
  </Pressable>

export default AppBarTab