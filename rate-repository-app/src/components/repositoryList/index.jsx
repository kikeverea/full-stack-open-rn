import { FlatList, View, StyleSheet } from 'react-native';

import RepositoryItem from "./RepositoryItem";
import useRepositories from "../../hooks/useRepositories";
import {REPOSITORIES} from '../../graphql/queries'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

  const { repositories, loading } = useRepositories(REPOSITORIES)

  const repositoryNodes =
    loading
      ? []
      : repositories.edges.map(edge => edge.node)

  return (
    <FlatList
      style={{ padding: 8 }}
      data={ repositoryNodes }
      ItemSeparatorComponent={ ItemSeparator }
      renderItem={
        ({ item }) => <RepositoryItem repository={ item }/>
      }
    />
  );
};

export default RepositoryList;