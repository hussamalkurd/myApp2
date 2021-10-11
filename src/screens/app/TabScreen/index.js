import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
const Tab = createBottomTabNavigator();
import Dispatch from '../Dispatch';
import Leaderboard from '../Leaderboard';
import Profile from '../Profile';
import Shop from '../Shop';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TabScreen = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Dispatch}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Shop"
          component={Shop}
          options={{
            tabBarLabel: 'Shop',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="shopping" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Categories"
          component={Leaderboard}
          options={{
            tabBarLabel: 'Categories',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="menu" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabScreen;
