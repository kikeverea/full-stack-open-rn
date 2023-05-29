import {View, Image, StyleSheet, Pressable} from 'react-native'
import Text from "../Text";
import theme from "../../theme";
import {useNavigate} from 'react-router-native'
import * as Linking from 'expo-linking'
import Toast from 'react-native-toast-message'
import Button from '../Button'

const layout = {
  stack: {
    display: 'flex',
    flexDirection: 'column'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  }
}

const styles = StyleSheet.create({
  repositoryItem: {
    ...layout.stack,
    padding: 8,
    backgroundColor: 'white'
  },
  headerInfo: {
    ...layout.stack,
    paddingHorizontal: 16,
    justifyContent: 'space-between'
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 6
  },
  infoLine: {
    paddingVertical: 3,
    paddingEnd: 32,
  },
  chip: {
    backgroundColor: theme.colors.primary,
    padding: 6,
    borderRadius: 6
  },
  infoBar: {
    ...layout.row,
    marginTop: 12,
    justifyContent: 'space-around'
  },
  infoBarItem: {
    ...layout.stack,
    justifyContent: 'space-between'
  },
  linkButton: {
    marginTop: 8,
  }
})

const RepositoryItem = ({ repository, showLinkButton }) => {

  const navigate = useNavigate()
  const goToRepository = () => navigate(`/${ repository.id }`)
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
    <Pressable onPress={ goToRepository }>
      <View testID="repositoryItem" style={styles.repositoryItem}>
        <RepositoryItemHeader
          fullName={repository.fullName}
          description={repository.description}
          language={repository.language}
          imageUrl={repository.ownerAvatarUrl}/>
        <RepositoryItemInfoBar repository={repository}/>
        { showLinkButton &&
          <Button style={ styles.linkButton } onPress={ openInGithub } label='Open in GitHub'/>
        }
      </View>
    </Pressable>
  )
}

const RepositoryItemHeader = ({ fullName, description, language, imageUrl }) =>
  <View style={ layout.row }>
    <Image
      style={ styles.avatarImage }
      source={{ uri: imageUrl }}/>
    <HeaderInfo
      fullName={ fullName }
      description={ description }
      language={ language }/>
  </View>

const HeaderInfo = ({ fullName, description, language }) =>
  <View style={ styles.headerInfo }>
    <Text style={ styles.infoLine }
          fontSize='subheading'
          fontWeight='bold'>{ fullName }
    </Text>
    <Text style={ styles.infoLine }
          fontSize='subheading'
          color='textSecondary'>{ description }
    </Text>
    <Chip text={ language } />
  </View>

const Chip = ({ text }) =>
  <View style={[ layout.row, { justifyContent: 'flex-start' }, styles.infoLine ]}>
    <Text style={ [styles.chip, { flex: 0 }] } color='white'>{ text }</Text>
    <View style={{ flex: 1 }} />
  </View>

const RepositoryItemInfoBar = ({ repository }) =>
  <View style={ styles.infoBar }>
    <InfoBarItem name='Stars' value={ repository.stargazersCount }/>
    <InfoBarItem name='Forks' value={ repository.forksCount }/>
    <InfoBarItem name='Review' value={ repository.reviewCount }/>
    <InfoBarItem name='Rating' value={ repository.ratingAverage }/>
  </View>

const InfoBarItem = ({ name, value }) =>
  <View style={ styles.infoBarItem }>
    <Text size='subheading' fontWeight='bold'>{ value }</Text>
    <Text size='subheading' color='textSecondary'>{ name }</Text>
  </View>

export default RepositoryItem