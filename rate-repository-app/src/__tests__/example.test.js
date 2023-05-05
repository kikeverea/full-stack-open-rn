import {render, fireEvent, screen, within} from '@testing-library/react-native'
import '@testing-library/jest-dom/extend-expect'
import RepositoryListContainer from '../components/repositoryList/RepositoryListContainer'

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {

      render(<RepositoryListContainer repositories={ repositories }/>)

      const renderedItems = screen.getAllByTestId('repositoryItem');
      const repositoryNodes = repositories.edges.map(edge => edge.node)

      renderedItems.map((renderedItem, index) => {
        const repository = repositoryNodes[index]
        expect(within(renderedItem).getByText(repository.fullName)).toBeDefined()
        expect(within(renderedItem).getByText(repository.description)).toBeDefined()
        expect(within(renderedItem).getByText(repository.language)).toBeDefined()
        expect(within(renderedItem).getByText(String(repository.forksCount))).toBeDefined()
        expect(within(renderedItem).getByText(String(repository.stargazersCount))).toBeDefined()
        expect(within(renderedItem).getByText(String(repository.ratingAverage))).toBeDefined()
        expect(within(renderedItem).getByText(String(repository.reviewCount))).toBeDefined()
      })
    });
  });
});

const repositories = {
  totalCount: 8,
  pageInfo: {
    hasNextPage: true,
    endCursor:
      'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
  },
  edges: [
    {
      node: {
        id: 'jaredpalmer.formik',
        fullName: 'jaredpalmer/formik',
        description: 'Build forms in React, without the tears',
        language: 'TypeScript',
        forksCount: 1619,
        stargazersCount: 21856,
        ratingAverage: 88,
        reviewCount: 3,
        ownerAvatarUrl:
          'https://avatars2.githubusercontent.com/u/4060187?v=4',
      },
      cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
    },
    {
      node: {
        id: 'async-library.react-async',
        fullName: 'async-library/react-async',
        description: 'Flexible promise-based React data loader',
        language: 'JavaScript',
        forksCount: 69,
        stargazersCount: 1760,
        ratingAverage: 72,
        reviewCount: 3,
        ownerAvatarUrl:
          'https://avatars1.githubusercontent.com/u/54310907?v=4',
      },
      cursor:
        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
    },
  ],
};