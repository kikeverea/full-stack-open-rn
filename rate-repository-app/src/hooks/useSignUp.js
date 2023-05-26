import {useApolloClient, useMutation} from '@apollo/client'
import {AUTHENTICATE, CREATE_USER} from '../graphql/mutations'

import { useAuthStorage } from './useAuthStorage'

const useSignUp = () => {

  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const [createUser, createUserResult] = useMutation(CREATE_USER)
  const [authenticate] = useMutation(AUTHENTICATE)

  const signUp = async ({ username, password }) => {
    const { data } = await createUser({ variables: { username, password }})

    if (data && data.createUser.id) {
      const { data: authData } = await authenticate({ variables: { username, password }})
      await authStorage.setAccessToken(authData.authenticate.accessToken)
      await apolloClient.resetStore()
    }
  }

  return [signUp, createUserResult]
}

export default useSignUp