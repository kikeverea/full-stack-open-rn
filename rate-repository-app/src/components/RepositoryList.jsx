import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  return (
    <FlatList
      style={{ padding: 8 }}
      data={ repositories }
      ItemSeparatorComponent={ ItemSeparator }
      renderItem={
        ({ item }) => <RepositoryItem repository={ item }/>
      }
    />
  );
};

export default RepositoryList;