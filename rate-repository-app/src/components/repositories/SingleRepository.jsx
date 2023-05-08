import {Pressable, StyleSheet, View} from 'react-native'
import {useParams} from 'react-router-native'
import {useQuery} from '@apollo/client'
import * as Linking from 'expo-linking'

import RepositoryItem from './RepositoryItem'
import Text from '../Text'
import theme from '../../theme'
import {REPOSITORY} from '../../graphql/queries'
import Toast from 'react-native-toast-message'

const SingleRepository = () => {

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      paddingVertical: 16
    },
    button: {
      backgroundColor: theme.colors.primary,
      padding: 12,
      marginHorizontal: 8,
      borderRadius: 6,
      textAlign: 'center'
    }
  })

  const repositoryId = useParams()
  const { data } = useQuery(REPOSITORY, { variables: repositoryId})

  const repository = data && data.repository ? data.repository : null

  const openInGithub = async () => {
    try {
      await Linking.openURL(repository.url)
    }
    catch (e) {
      Toast.show({
        type: 'error',
        text1: 'Could not open the url',
        position: 'bottom'
      })
    }
  }

  return(
    repository
      ? <View style={ styles.container }>
          <RepositoryItem repository={ repository }/>
          <Pressable onPress={ openInGithub }>
            <Text color='white' style={ styles.button }>
              Open in GitHub
            </Text>
          </Pressable>
        </View>
      :
        <Text>Loading repo...</Text>
  )
}

export default SingleRepository