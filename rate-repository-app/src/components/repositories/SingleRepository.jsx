import {Pressable, StyleSheet, View} from 'react-native'
import RepositoryItem from './RepositoryItem'
import {useParams} from 'react-router-native'
import {useQuery} from '@apollo/client'
import theme from '../../theme'
import {REPOSITORY} from '../../graphql/queries'
import Text from '../Text'

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

  const openInGithub = () => {
    console.log('opening repository with id:', repositoryId)
  }

  return(
    data.repository
      ? <View style={ styles.container }>
          <RepositoryItem repository={ data.repository }/>
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