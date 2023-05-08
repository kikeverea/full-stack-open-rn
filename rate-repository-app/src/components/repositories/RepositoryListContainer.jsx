import RepositoryItem from "./RepositoryItem";
import {FlatList, StyleSheet, View} from "react-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      style={{padding: 8}}
      data={ repositoryNodes }
      ItemSeparatorComponent={ItemSeparator}
      renderItem={
        ({item}) => <RepositoryItem repository={item}/>
      }
    />
  )
}

export default RepositoryListContainer