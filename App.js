import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Featured from './Featured';
import DetailView from './DetailView';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Featured
  },
  detailView: {
    screen: DetailView
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}