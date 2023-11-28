import React from 'react';
import { View, Text } from 'react-native';
import { ScreenProps } from '../../navigations/root-stack';

const NotificationScreen: ScreenProps<'Notification'> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Notification Screen</Text>
    </View>
  );
};

export default NotificationScreen;
