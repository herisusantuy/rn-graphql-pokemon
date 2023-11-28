import React from 'react';
import { View, Text } from 'react-native';
import { ScreenProps } from '../../navigations/root-stack';

const ExploreScreen: ScreenProps<'Explore'> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Explore Screen</Text>
    </View>
  );
};

export default ExploreScreen;
