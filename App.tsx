import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import ThemeProvider from '@contexts/ThemeContext';
import ModalProvider from '@contexts/ModalContext';
import RootStackNavigation from '@navigations/root-stack';
import { store } from './src/store';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ModalProvider>
          <RootStackNavigation />
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
