import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ScreenProps } from '../../navigations/root-stack';

import { useNavigation } from '@react-navigation/native';
import { TextInput, Wrapper, Button } from '@components/molecules';
import { Icons, Typography } from '@components/atoms';
import { signUpWithEmail, signInWithOAuth } from 'src/services/auth';

const SignUpScreen: ScreenProps<'SignUp'> = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Wrapper bg='white'>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between'
        }}
      >
        <Typography variant='h3'>Sign Up Screen</Typography>
        <View>
          <TextInput
            label='Email'
            placeholder='Input email'
            value={email}
            keyboardType='email-address'
            onChangeText={email => setEmail(email)}
          />
          <TextInput
            label='Password'
            placeholder='Input password'
            isSecureText={true}
            value={password}
            onChangeText={password => setPassword(password)}
          />
          <View>
            <Button onPress={() => signUpWithEmail(email, password)}>
              <Text>Sign Up</Text>
            </Button>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
            >
              <Button
                onPress={() => signInWithOAuth('facebook')}
                icon='logo-facebook'
              ></Button>
              <Button
                onPress={() => signInWithOAuth('google')}
                icon='logo-google'
              ></Button>
              <Button
                onPress={() => signInWithOAuth('twitter')}
                icon='logo-twitter'
              ></Button>
            </View>
          </View>
        </View>
      </View>
    </Wrapper>
  );
};

export default SignUpScreen;
