import ItemSeparator from '../ItemSeparator'
import {StyleSheet, Text, View} from 'react-native'
import {format} from 'date-fns'
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
    backgroundColor: 'white'
  },
  rating: {
    padding: 8,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: theme.colors.primary,
    fontWeight: 'bold'
  },
  review: {
    display: 'flex',
    flexDirection: 'column',
    paddingStart: 16,
    paddingEnd: 60
  },
  reviewTitle: {
    fontWeight: 'bold'
  },
  reviewDate: {
    color: theme.colors.textSecondary
  },
  reviewText: {
    paddingVertical: 8
  }
})

const Review = ({ review }) => {
  return (
    <>
      <ItemSeparator />
      <View style={ styles.container }>
        <Text style={ styles.rating }>{ review.rating }</Text>
        <View style={ styles.review }>
          <Text style={ styles.reviewTitle }>{ review.title }</Text>
          <Text style={ styles.reviewDate }>{ format(new Date(review.createdAt), 'dd.MM.yyyy') }</Text>
          <Text style={ styles.reviewText }>{ review.text }</Text>
        </View>
      </View>
    </>
  )
}

export default Review