import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import SliderBanner from './components/SliderBanner';
import data from './assets/data/barton-data.json'

export default function App() {

  const [items, setItems] = useState(data)
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app! Hello world</Text> */}
      <SearchBar />
      <SliderBanner />
      <ResultsList data={items} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'flex-start',
    paddingTop: '10%',
  },
});
