import { FlatList } from 'react-native';

import RepositoryItem from "./RepositoryItem";
import useRepositories from "../../hooks/useRepositories";
import {REPOSITORIES} from '../../graphql/queries'
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {

  const { repositories, loading } = useRepositories(REPOSITORIES)

  const repositoryNodes =
    loading
      ? []
      : repositories.edges.map(edge => edge.node)

  return (
    <RepositoryListContainer repositories={ repositoryNodes }/>
  );
};

export default RepositoryList;