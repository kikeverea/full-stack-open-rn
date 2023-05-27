import RepositoryItem from './RepositoryItem'
import { FlatList } from 'react-native'
import ItemSeparator from '../ItemSeparator'
import {Picker} from '@react-native-picker/picker'

const ListHeader = ({ sortBy, onSortChange, sortOptions }) => {
  return (
    <Picker
      selectedValue={ sortBy }
      onValueChange={(value, _) => onSortChange(value)}
    >
      { sortOptions.map(option =>
        <Picker.Item key={ option.sortBy } label={ option.label } value={ option }/>
      )}
    </Picker>
  )
}

const RepositoryListContainer = ({ repositories, sortBy, onSortChange, sortOptions }) => {

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      style={{padding: 8}}
      data={ repositoryNodes }
      ItemSeparatorComponent={ ItemSeparator }
      ListHeaderComponent={
        <ListHeader sortBy={ sortBy } onSortChange={ onSortChange } sortOptions={ sortOptions }/>
    }
      renderItem={
        ({item}) => <RepositoryItem repository={item}/>
      }
    />
  )
}

export default RepositoryListContainer