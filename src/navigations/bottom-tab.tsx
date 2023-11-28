import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '@screens/HomeScreen';
import ExploreScreen from '@screens/ExploreScreen';
import CommunityScreen from '@screens/CommunityScreen';
import NotificationScreen from '@screens/Notification';
import MessageScreen from '@screens/Message';

import { Icons } from '@components/atoms';
import { useNavigation } from '@react-navigation/native';

export type AppStackParamList = {
  Home: undefined;
  Explore: undefined;
  Community: undefined;
  Notification: undefined;
  Message: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<AppStackParamList>();

const AppStackNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={({ navigation }) => {
          return {
            tabBarShowLabel: false,
            tabBarIcon: ({ color, focused, size = 25 }) => {
              return (
                <Icons.MaterialCommunityIcons
                  name={focused ? 'home-variant' : 'home-variant-outline'}
                  size={size}
                />
              );
            },
            headerLeftContainerStyle: {
              paddingLeft: 15
            },
            headerRightContainerStyle: {
              paddingRight: 15
            },
            headerLeft: () => (
              <Icons.AntDesign
                name='github'
                size={20}
                onPress={() => navigation.toggleDrawer()}
              />
            )
          };
        }}
      />
      <Tab.Screen
        name='Explore'
        component={ExploreScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused, size = 25 }) => {
            return (
              <Icons.Ionicons
                name={focused ? 'search' : 'search-outline'}
                size={size}
              />
            );
          }
        }}
      />
      <Tab.Screen
        name='Community'
        component={CommunityScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused, size = 25 }) => {
            return (
              <Icons.MaterialCommunityIcons
                name={focused ? 'account-group' : 'account-group-outline'}
                size={size}
              />
            );
          }
        }}
      />
      <Tab.Screen
        name='Notification'
        component={NotificationScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size = 25 }) => {
            return (
              <Icons.Ionicons
                name={focused ? 'notifications' : 'notifications-outline'}
                size={size}
              />
            );
          }
        }}
      />
      <Tab.Screen
        name='Message'
        component={MessageScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size = 25 }) => {
            return (
              <Icons.Ionicons
                name={focused ? 'mail' : 'mail-outline'}
                size={size}
              />
            );
          }
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStackNavigator;
