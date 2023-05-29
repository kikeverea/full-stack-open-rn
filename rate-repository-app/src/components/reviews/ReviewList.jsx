import Review from './Review'
import {FlatList} from 'react-native'

const ReviewList = ({ header, reviews, reviewActions=null }) => {
  return (
    <FlatList
      data={ reviews }
      renderItem={ ({ item }) => <Review review={ item } actions={ reviewActions }/>}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={ header }
    />
  )
}

export default ReviewList