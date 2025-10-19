import React from 'react';
import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Product from '../component/Product';

const Home = ({searchQuery,navigation}) => {
  const list = ['All', 'Chairs', 'Table', 'Almirah', 'Tool', 'Sofa'];

  const product = [
    { id: 1, name: 'Chair', price: '$ 10000' },
    { id: 2, name: 'Chair', price: '$ 10000' },
    { id: 3, name: 'Chair', price: '$ 10000' },
    { id: 4, name: 'Chair', price: '$ 10000' },
    { id: 5, name: 'Chair', price: '$ 10000' },
    { id: 6, name: 'Chair', price: '$ 10000' },
    { id: 7, name: 'Chair', price: '$ 10000' },
    { id: 8, name: 'Chair', price: '$ 10000' },
  ];
  const filtered = product.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <Text style={styles.heading}>Discover</Text>

      {/* Category Scroll */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.outline}
      >
        {list.map((item, index) => (
          <View key={index} style={styles.listcont}>
            <Text style={styles.menu}>{item}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Product Grid (FlatList handles vertical scroll) */}
      <FlatList
        data={product}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Product price={item.price} productname={item.name} navigation={navigation} />
        )}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    paddingLeft: 10,
  },
  outline: {
    paddingVertical: 10,
  },
  listcont: {
    borderRadius: 17,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    height:30
  },
  menu: {
    fontSize: 15,
    fontWeight: '600',
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
  flatListContent: {
    paddingBottom: 100,
    justifyContent: 'space-between',
  },
});

export default Home;
