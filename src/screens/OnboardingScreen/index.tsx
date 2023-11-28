import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ScreenProps } from '../../navigations/root-stack';
import Wrapper from '@components/molecules/Wrapper';
import Button from '@components/molecules/Button';
import { AuthStackParamList } from '@navigations/auth-stack';

type ScreenNavigationProps = NativeStackNavigationProp<AuthStackParamList>;

const OnboardingScreen: ScreenProps<'Onboarding'> = () => {
  const navigation = useNavigation<ScreenNavigationProps>();
  return (
    <Wrapper bg='white'>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Button onPress={() => navigation.navigate('SignIn')}>
          <Text>Sign In</Text>
        </Button>
        <Button onPress={() => navigation.navigate('SignUp')}>
          <Text>Sign Up</Text>
        </Button>
      </View>
    </Wrapper>
  );
};

export default OnboardingScreen;
