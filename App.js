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
import feed from './assets/data/feed'

const post1 = feed[0];


const App = () => {

  return (
    <SafeAreaView >
      <StatusBar />
      {/* <HomeScreen /> */}
      <Post post={feed[0]} />
      <Post post={feed[1]} />
    </SafeAreaView>
  );
};

export default App;
