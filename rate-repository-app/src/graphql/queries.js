import { gql } from '@apollo/client'

export const REPOSITORIES = gql`
  query Repositories {
    repositories {
      edges {
        node {
          fullName,
          description,
          language,
          ownerAvatarUrl,
          stargazersCount,
          forksCount,
          reviewCount,
          ratingAverage
        }
      }
    }
  }
`

export const AUTHENTICATED_USER = gql`
  query Me {
    me {
      id
      username
    }
  }
`