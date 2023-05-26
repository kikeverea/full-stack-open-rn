import { useParams } from 'react-router-native'
import { useQuery } from '@apollo/client'
import { FlatList, View, StyleSheet, Text } from 'react-native'
import { format } from 'date-fns'

import { REPOSITORY, REVIEWS } from '../../graphql/queries'
import RepositoryItem from './RepositoryItem'
import theme from '../../theme'
import ItemSeparator from '../ItemSeparator'

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

const SingleRepository = () => {

  const repositoryId = useParams()

  const { data: repositoryResult } = useQuery(REPOSITORY, { variables: repositoryId, fetchPolicy: 'cache-and-network'})
  const { data: reviewsResult } = useQuery(REVIEWS, { variables: repositoryId})

  const repository =
    repositoryResult && repositoryResult.repository
      ? repositoryResult.repository
      : null

  if (repository == null)
    return null

  const reviews =
    reviewsResult && reviewsResult.repository
      ? reviewsResult.repository.reviews.edges.map(edge => edge.node)
      : []

  return (
    <FlatList
      data={ reviews }
      renderItem={ ({ item }) => <ReviewItem review={ item }/>}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={ <RepositoryItem repository={ repository } showLinkButton={ true }/> }
    />
  )
}

const ReviewItem = ({ review }) => {
  return (
    <>
      <ItemSeparator />
      <View style={ styles.container }>
        <Text style={ styles.rating }>{ review.rating }</Text>
        <View style={ styles.review }>
          <Text style={ styles.reviewTitle }>{ review.user.username }</Text>
          <Text style={ styles.reviewDate }>{ format(new Date(review.createdAt), 'dd.MM.yyyy') }</Text>
          <Text style={ styles.reviewText }>{ review.text }</Text>
        </View>
      </View>
    </>
  )
}

export default SingleRepository