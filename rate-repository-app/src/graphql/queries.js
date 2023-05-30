import { gql } from '@apollo/client'

const REPOSITORY = gql `
  fragment RepositoryFields on Repository {
    id,
    fullName,
    description,
    language,
    ownerAvatarUrl,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    url
  }
`

const REVIEW = gql `
  fragment ReviewFields on Review {
    id
    text
    rating
    createdAt
    user {
      id
      username
    }
  }
`

export const REPOSITORIES = gql`
  ${ REPOSITORY }
  query Repositories ($first: Int, $after: String, $orderBy: AllRepositoriesOrderBy!, $orderDirection: OrderDirection!, $searchKeyword: String!) {
    repositories (first: $first, after: $after, orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
      edges {
        node {
          ...RepositoryFields
        },
        cursor
      },
      pageInfo {
        endCursor,
        startCursor,
        hasNextPage
      }
    }
  }
`

export const REPOSITORY_REVIEWS = gql`
  ${ REPOSITORY}
  ${ REVIEW }
  query Reviews($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...RepositoryFields
      reviews {
        edges {
          node {
            ...ReviewFields
          }
        }
      }
    }
  }
`

export const AUTHENTICATED_USER = gql`
  ${ REVIEW }
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewFields
            repository {
              id
              fullName
            }
          }
        }
      }
    }
  }
`