import { View, Image, StyleSheet } from 'react-native'
import Text from "./Text";
import theme from "../theme";

const layout = StyleSheet.create({
  stack: {
    display: 'flex',
    flexDirection: 'column'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  }
})

const styles = StyleSheet.create({
  item: {
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
  }
})

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

const Chip = ({ text }) =>
  <View style={[ layout.row, { justifyContent: 'flex-start' }, styles.infoLine ]}>
    <Text style={ [styles.chip, { flex: 0 }] } color='white'>{ text }</Text>
    <View style={{ flex: 1 }} />
  </View>

const InfoItem = ({ name, value }) =>
  <View style={ styles.infoBarItem }>
    <Text size='subheading' fontWeight='bold'>{ value }</Text>
    <Text size='subheading' color='textSecondary'>{ name }</Text>
  </View>

const RepositoryItemInfoBar = ({ repository }) =>
  <View style={ styles.infoBar }>
    <InfoItem name='Stars' value={ repository.stargazersCount }/>
    <InfoItem name='Forks' value={ repository.forksCount }/>
    <InfoItem name='Review' value={ repository.reviewCount }/>
    <InfoItem name='Rating' value={ repository.ratingAverage }/>
  </View>

const RepositoryItem = ({ repository }) =>
  <View style={ styles.item }>
    <RepositoryItemHeader
      fullName={ repository.fullName }
      description={ repository.description }
      language={ repository.language }
      imageUrl={ repository.ownerAvatarUrl } />
    <RepositoryItemInfoBar repository={ repository }/>
  </View>

export default RepositoryItem