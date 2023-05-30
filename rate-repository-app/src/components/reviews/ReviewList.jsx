import Review from './Review'
import {FlatList} from 'react-native'

const ReviewList = ({ header, reviews, reviewActions=null, onEndReached }) => {

  return (
    <FlatList
      data={ reviews }
      renderItem={ ({ item }) => <Review review={ item } actions={ reviewActions }/>}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={ header }
      onEndReached={ onEndReached }
      onEndReachedThreshold={ 0.5 }
      contentContainerStyle={{ paddingBottom: 20 }} // bottom padding on endReached
    />
  )
}

export default ReviewList