/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';

import HomeScreen from './src/screens/Home'
import SearchResultScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestScreen from './src/screens/Guests';

import 'react-native-gesture-handler'
import Router from './src/navigations/Router';




const App = () => {

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <Router />

      
    </>

  );
};

export default App;
