import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import SliderBanner from './components/SliderBanner';
import Home from './screens/Home';
import Details from './screens/Details'
import data from './assets/data/barton-data.json'
import { DataContext } from './components/DataContext';

const Stack = createStackNavigator();

export default function App() {

  const [items, setItems] = useState(data)
  return (
    <NavigationContainer>
      <DataContext.Provider value={{ items, setItems, data }}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#eee',
              borderColor: '#eee',
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
              borderBottomWidth: 0, // remove shadow on iOS
            },
            headerTitleStyle: {

            },
            headerTitleAlign: 'center'
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerTitle: () => <SearchBar /> }}
          />

          <Stack.Screen
            name="Details"
            component={Details}
          />
        </Stack.Navigator>
      </DataContext.Provider>

    </NavigationContainer>
    // <View style={styles.container}>
    //   {/* <Text>Open up App.js to start working on your app! Hello world</Text> */}
    //   <SearchBar data={{ items, setItems, data }} />
    //   <SliderBanner />
    //   <ResultsList data={items} />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    paddingTop: '10%',
  },
});
