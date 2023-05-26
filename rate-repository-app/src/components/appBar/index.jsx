import {View, StyleSheet, ScrollView, Pressable} from 'react-native'

import AppBarTab from "./AppBarTab";
import Constants from 'expo-constants';
import theme from "../../theme";
import {useApolloClient, useQuery} from '@apollo/client'
import { AUTHENTICATED_USER } from '../../graphql/queries'
import { useAuthStorage } from '../../hooks/useAuthStorage'

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 8,
    paddingVertical: 20,
    backgroundColor: theme.colors.primary
  }
});

const AppBar = () => {

  const { data } = useQuery(AUTHENTICATED_USER)
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const signOut = async () => {
    await authStorage.removeAccessToken()
    await apolloClient.resetStore()
  }

  const isSignedIn = data && data.me

  return (
    <View style={ styles.container }>
      <ScrollView horizontal={ true }>
        <AppBarTab text='Repositories' linkTo='/'/>
        { isSignedIn ?
          <>
            <AppBarTab text='Create Review' linkTo='/create-review'/>
            <AppBarTab text='Sign out' linkTo='/sign-in' action={signOut}/>
          </>
          :
          <>
            <AppBarTab text='Sign in' linkTo='/sign-in'/>
            <AppBarTab text='Sign up' linkTo='/sign-up'/>
          </>
        }
      </ScrollView>
    </View>
  )
};

export default AppBar;