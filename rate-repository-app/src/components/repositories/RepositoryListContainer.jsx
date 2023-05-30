import RepositoryItem from './RepositoryItem'
import { FlatList } from 'react-native'
import ItemSeparator from '../ItemSeparator'
import {Picker} from '@react-native-picker/picker'
import {Searchbar} from 'react-native-paper'

const SortOptionsPicker = ({ sort }) => {
  const { sortBy, onSortChange, sortOptions } = sort

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

const FilterSearchBar = ({ filter }) => {
  return (
    <Searchbar
      placeholder="Filter"
      onChangeText={ filter.setFilter }
      value={ filter.filter }
    />
  );
}

const RepositoryListContainer = ({ repositories, sort, filter, onEndReached }) => {

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      style={{padding: 8}}
      data={ repositoryNodes }
      ItemSeparatorComponent={ ItemSeparator }
      ListHeaderComponent={
        <>
          <FilterSearchBar filter={ filter }/>
          <SortOptionsPicker sort={ sort }/>
        </>
      }
      onEndReached={ onEndReached }
      onEndReachedThreshold={ 0.5 }
      contentContainerStyle={{ paddingBottom: 20 }} // bottom padding on endReached
      renderItem={ ({item}) => <RepositoryItem repository={item}/> }
    />
  )
}

export default RepositoryListContainer