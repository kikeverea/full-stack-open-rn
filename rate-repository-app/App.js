import { StatusBar } from 'expo-status-bar'
import { NativeRouter } from 'react-router-native'
import { ApolloProvider } from "@apollo/client"

import createApolloClient from "./src/utils/apolloClient"
import Main from './src/components/Main'
import AuthStorage from './src/utils/authenticateStorage'
import AuthStorageContext from './src/contexts/AuthStorageContext'
import Toast from 'react-native-toast-message'

const authStorage = new AuthStorage()
const apolloClient = createApolloClient(authStorage)

const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={ apolloClient }>
          <AuthStorageContext.Provider value={ authStorage }>
            <Main />
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style='auto'/>
      <Toast/>
    </>
  )
}

export default App
