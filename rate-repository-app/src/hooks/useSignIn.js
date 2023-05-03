import {useApolloClient, useMutation} from '@apollo/client'
import { AUTHENTICATE } from '../graphql/mutations'

import { useAuthStorage } from './useAuthStorage'

const useSignIn = () => {

  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const [authenticate, result] = useMutation(AUTHENTICATE)

  const signIn = async ({ username, password }) => {
    const { data } = await authenticate({ variables: { username, password }})

    await authStorage.setAccessToken(data.authenticate.accessToken)
    await apolloClient.resetStore()
  }

  return [signIn, result]
}

export default useSignIn