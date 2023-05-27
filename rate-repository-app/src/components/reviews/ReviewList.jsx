import Review from './Review'
import {FlatList} from 'react-native'

const ReviewList = ({ header, reviews }) => {
  return (
    <FlatList
      data={ reviews }
      renderItem={ ({ item }) => <Review review={ item }/>}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={ header }
    />
  )
}

export default ReviewList