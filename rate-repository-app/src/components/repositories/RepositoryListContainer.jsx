import RepositoryItem from './RepositoryItem'
import { FlatList } from 'react-native'
import ItemSeparator from '../ItemSeparator'

const RepositoryListContainer = ({ repositories }) => {

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      style={{padding: 8}}
      data={ repositoryNodes }
      ItemSeparatorComponent={ItemSeparator}
      renderItem={
        ({item}) => <RepositoryItem repository={item}/>
      }
    />
  )
}

export default RepositoryListContainer