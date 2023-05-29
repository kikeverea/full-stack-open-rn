import {useApolloClient, useMutation} from '@apollo/client'
import {AUTHENTICATE, CREATE_USER} from '../graphql/mutations'

import { useAuthStorage } from './useAuthStorage'

const useSignUp = () => {

  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const [createUser, createUserResult] = useMutation(CREATE_USER)
  const [authenticate] = useMutation(AUTHENTICATE)

  const createNewUser = async ({ username, password }) => {
    const { data } = await createUser({ variables: { username, password }})
    return data && data.createUser.id
  }

  const authenticateNewUser = async ({ username, password }) => {
    const { data } = await authenticate({ variables: { username, password }})

    if (data.authenticate.accessToken) {
      await authStorage.setAccessToken(data.authenticate.accessToken)
      await apolloClient.resetStore()
      return true
    }

    return false
  }

  const signUp = async ({ username, password }) => {
    try {
      if (await createNewUser({ username, password }))
        return await authenticateNewUser({ username, password })
    }
    catch (e) {
      log.error(e)
    }
    return false
  }

  return [signUp, createUserResult]
}

export default useSignUp