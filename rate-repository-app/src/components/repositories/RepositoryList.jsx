import useRepositories from '../../hooks/useRepositories'
import RepositoryListContainer from './RepositoryListContainer'
import {useState} from 'react'

const SORT_HIGHEST_RATING = {
  sortBy: 'RATING_AVERAGE',
  direction: 'DESC',
  label: 'Highest rated repositories'
}
const SORT_LOWEST_RATING = {
  sortBy: 'RATING_AVERAGE',
  direction: 'ASC',
  label: 'Lowest rated repositories'
}
const SORT_LATEST =  {
  sortBy: 'CREATED_AT',
  direction: 'DESC',
  label: 'Latest repositories'
}

const RepositoryList = () => {

  const [sortBy, setSortBy] = useState(SORT_LATEST)
  const [filter, setFilter] = useState('')
  const { repositories, fetchMore } = useRepositories(sortBy, filter)

  const sortOptions = [ SORT_LATEST, SORT_HIGHEST_RATING, SORT_LOWEST_RATING ]

  return (
    <RepositoryListContainer
      repositories={ repositories }
      sort={{ sortBy, onSortChange: setSortBy, sortOptions }}
      filter={{ filter, setFilter }}
      onEndReached={ fetchMore }/>
  );
};

export default RepositoryList