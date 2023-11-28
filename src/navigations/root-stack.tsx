import React, { FC } from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import AppStackNavigator, { AppStackParamList } from './bottom-tab';
import AuthStackNavigator, { AuthStackParamList } from './auth-stack';
import DrawerNavigator from './drawer-navigator';

import useTheme from '@hooks/useTheme';
import useAuth from '@hooks/useAuth';

export type RootStackParamList = AppStackParamList & AuthStackParamList;

export type ScreenProps<T extends keyof RootStackParamList> = FC<
  NativeStackScreenProps<RootStackParamList, T>
>;

const RootStackNavigation = () => {
  const { theme } = useTheme();
  const auth = useAuth();

  if (auth.loading) {
    return <></>;
  }

  return (
    <NavigationContainer theme={theme === 'light' ? DefaultTheme : DarkTheme}>
      {auth.token ? <AuthStackNavigator /> : <DrawerNavigator />}
    </NavigationContainer>
  );
};

export default RootStackNavigation;
