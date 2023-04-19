import { FlatList, View, StyleSheet } from 'react-native';
import { useEffect, useState } from "react";

import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

  const [repositories, setRepositories] = useState()

  const fetchRepositories = async () => {
    const response = await fetch('http://192.168.43.118:5000/api/repositories')
    const json = await response.json()

    console.log('response', json)

    setRepositories(json)
  }

  useEffect(() => {
    fetchRepositories()
  },
  [])

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