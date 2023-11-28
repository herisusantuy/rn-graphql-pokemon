import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import AppStackNavigator, { AppStackParamList } from './bottom-tab';

export type RootStackParamList = AppStackParamList;

export type ScreenProps<T extends keyof RootStackParamList> = FC<
  NativeStackScreenProps<RootStackParamList, T>
>;

const RootStackNavigation = () => {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
};

export default RootStackNavigation;
