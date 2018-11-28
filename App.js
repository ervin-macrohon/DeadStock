import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Featured from './Featured';
import SearchView from './SearchView';
import DetailView from './DetailView';
import AccountView from './AccountView';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import BuyForm from './BuyForm';

const FeaturedStack = createStackNavigator({
  featured: {screen: Featured},
  detailView: {screen: DetailView},
  buyForm: {screen: BuyForm}
});

const SearchStack = createStackNavigator({
  search: {screen: SearchView},
  detailView: {screen: DetailView},
  buyForm: {screen: BuyForm}
});

const AccountStack = createStackNavigator({
  account: {screen: AccountView}
});

export default createAppContainer(createBottomTabNavigator(
  {
    Home: {screen: FeaturedStack},
    Search: {screen: SearchStack},
    Account: {screen: AccountStack}
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;
        } else if (routeName === 'Search') {
          iconName = `search`;
        } else if (routeName === 'Account') {
          iconName = `user`;
        }

        return <Icon style={{ color: '#c0c0c0', marginTop: 5 }} name={iconName} size={25} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#828282',
      inactiveTintColor: '#c0c0c0',
      activeBackgroundColor: '#2d4047',
      inactiveBackgroundColor: '#233237',
      style: { backgroundColor: '#233237'}
    },
  }
));