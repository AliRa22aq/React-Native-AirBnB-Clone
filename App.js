/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text
} from 'react-native';

import HomeScreen from './src/screens/Home'
import SearchResultScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestScreen from './src/screens/Guests';
import 'react-native-gesture-handler';

const post1 = feed[0];


const App = () => {

  return (
    <SafeAreaView >
      <StatusBar />
      <HomeScreen />
      {/* <SearchResultScreen /> */}
      {/* <DestinationSearchScreen /> */}
      {/* <GuestScreen /> */}

    </SafeAreaView>
  );
};

export default App;
