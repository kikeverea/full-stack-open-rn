import useRepositories from '../../hooks/useRepositories'
import { REPOSITORIES } from '../../graphql/queries'
import RepositoryListContainer from './RepositoryListContainer'

const RepositoryList = () => {

  const { repositories } = useRepositories(REPOSITORIES)

  return (
    <RepositoryListContainer repositories={ repositories }/>
  );
};

export default RepositoryList