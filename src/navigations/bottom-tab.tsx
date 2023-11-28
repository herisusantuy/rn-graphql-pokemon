import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@screens/HomeScreen';
import PokemonScreen from '@screens/PokemonScreen';

import { Icons } from '@components/atoms';

export type AppStackParamList = {
  Home: undefined;
  Pokemon: {
    name: string;
  };
};

const Tab = createBottomTabNavigator<AppStackParamList>();

const StackNavigator = createNativeStackNavigator();

const BottomStackNavigator = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <StackNavigator.Screen
        name='HomeStack'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <StackNavigator.Screen
        name='Pokemon'
        component={PokemonScreen}
        options={{ headerShown: false }}
      />
    </StackNavigator.Navigator>
  );
};

const AppStackNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true
      }}
    >
      <Tab.Screen
        name='Home'
        component={BottomStackNavigator}
        options={({ navigation }) => {
          return {
            tabBarShowLabel: false,
            tabBarIcon: ({ color, focused, size = 30 }) => {
              return (
                <Icons.MaterialCommunityIcons name='pokeball' size={size} />
              );
            },
            headerLeftContainerStyle: {
              paddingLeft: 15
            },
            headerRightContainerStyle: {
              paddingRight: 15
            },
            headerTitle: () => (
              <Image
                source={{
                  uri: 'https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png'
                }}
                style={{ width: 100, height: 40, paddingBottom: 10 }}
                resizeMode='cover'
              />
            )
          };
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStackNavigator;
