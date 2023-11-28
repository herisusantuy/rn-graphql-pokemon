import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import ThemeProvider from '@contexts/ThemeContext';
import ModalProvider from '@contexts/ModalContext';
import RootStackNavigation from '@navigations/root-stack';
import { store } from './src/store';
import { client } from './src/graphql/apolloClient';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ModalProvider>
          <ApolloProvider client={client}>
            <RootStackNavigation />
          </ApolloProvider>
        </ModalProvider>
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
