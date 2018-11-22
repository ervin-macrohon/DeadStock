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

const FeaturedStack = createStackNavigator({
  featured: {screen: Featured},
  detailView: {screen: DetailView}
});

const SearchStack = createStackNavigator({
  search: {screen: SearchView}
});

export default createAppContainer(createBottomTabNavigator(
  {
    home: {screen: FeaturedStack},
    search: {screen: SearchStack}
  }
));