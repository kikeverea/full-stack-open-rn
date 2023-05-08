import { gql } from '@apollo/client'

export const REPOSITORIES = gql`
  query Repositories {
    repositories {
      edges {
        node {
          id,
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
export const REPOSITORY = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
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