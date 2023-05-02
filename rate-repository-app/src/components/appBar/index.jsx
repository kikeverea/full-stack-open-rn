import { View, StyleSheet, ScrollView } from 'react-native';

import AppBarTab from "./AppBarTab";
import Constants from 'expo-constants';
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 8,
    paddingVertical: 20,
    backgroundColor: theme.colors.primary
  }
});

const AppBar = () => {
  return (
    <View style={ styles.container }>
      <ScrollView horizontal={ true }>
        <AppBarTab text='Sign in' linkTo='/sign-in'/>
        <AppBarTab text='Repositories' linkTo='/'/>
      </ScrollView>
    </View>
  )
};

export default AppBar;