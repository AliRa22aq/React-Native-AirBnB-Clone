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
import Post from './src/components/Post'


const App = () => {

  return (
    <SafeAreaView >
      <StatusBar />
      {/* <HomeScreen /> */}
      <Post />
    </SafeAreaView>
  );
};

export default App;
