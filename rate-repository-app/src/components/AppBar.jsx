import { View, StyleSheet, Pressable } from 'react-native';

import AppBarTab from "./AppBarTab";
import Constants from 'expo-constants';
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: Constants.statusBarHeight,
    padding: 20,
    backgroundColor: theme.colors.primary
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text='Repositories'/>
    </View>
  )
};

export default AppBar;