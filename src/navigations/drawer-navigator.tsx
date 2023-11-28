import React from 'react';
import {
  createDrawerNavigator,
  DrawerContent,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

import BottomTab from './bottom-tab';
import ProfileScreen from '@screens/ProfileScreen';
import { Icons } from '@components/atoms';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const navigation = useNavigation();
  const CustomDrawerContent = props => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  };
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{
        drawerType: 'front'
      }}
    >
      <Drawer.Screen
        name='BottomTab'
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          headerShown: true,
          headerTitle: 'Back',
          headerTitleAlign: 'left',
          headerLeft: () => (
            <Icons.AntDesign
              name='left'
              size={20}
              onPress={() => navigation.goBack()}
            />
          )
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
