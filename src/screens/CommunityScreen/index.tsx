import React from 'react';
import { View, Text } from 'react-native';
import { ScreenProps } from '../../navigations/root-stack';

const CommunityScreen: ScreenProps<'Community'> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Community Screen</Text>
    </View>
  );
};

export default CommunityScreen;
