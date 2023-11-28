import React from 'react';
import { View, Text } from 'react-native';
import { ScreenProps } from '../../navigations/root-stack';

const ProfileScreen: ScreenProps<'Profile'> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;
