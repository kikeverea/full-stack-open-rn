import ReviewList from './ReviewList'
import {useQuery} from '@apollo/client'
import {AUTHENTICATED_USER} from '../../graphql/queries'

const UserReviews = () => {

  const { data } = useQuery(AUTHENTICATED_USER, {
    variables: { includeReviews: true },
    fetchPolicy: 'cache-and-network'
  })

  const reviews = data && data.me
    ? data.me.reviews.edges.map(edge => ({ ...edge.node, title: edge.node.repository.fullName}))
    : null

  return reviews
    ? <ReviewList reviews={ reviews } useTitle={ review => review.repository.fullName}/>
    : null
}

export default UserReviews