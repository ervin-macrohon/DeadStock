import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Featured from './Featured';
import SearchView from './SearchView';
import DetailView from './DetailView';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

export default createAppContainer(createStackNavigator({
  Home: { 
    screen: createBottomTabNavigator({
      home: Featured,
      search: SearchView
    })
  },
  detailView: {
    screen: DetailView
  }
}));