import { StyleSheet, View } from 'react-native'
import { Route, Routes, Navigate } from "react-router-native";

import RepositoryList from "./repositoryList";
import AppBar from "./appBar";
import SignIn from "./signIn";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8'
  }
})

const Main = () => {
  return (
    <View style={ styles.container }>
      <AppBar />
      <Routes>
        <Route path='/' element={ <RepositoryList /> } exact />
        <Route path='/sign-in' element={<SignIn /> } />
        <Route path='*' element={ <Navigate to='/' replace /> } />
      </Routes>
    </View>
  )
}

export default Main