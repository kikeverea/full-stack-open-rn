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