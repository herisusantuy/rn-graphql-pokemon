import React, { FC, PropsWithChildren } from 'react';
import {
  ColorValue,
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import sizes from '@utils/theme/sizes';

type Props = {
  bg?: ColorValue;
};

const Wrapper: FC<PropsWithChildren<Props>> = ({ children, bg }) => {
  const style: StyleProp<ViewStyle> = {
    flex: 1,
    backgroundColor: bg ?? 'transparent'
  };
  return (
    <SafeAreaView style={style}>
      <View style={styles.wrapper}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: sizes.padding
  }
});

export default Wrapper;
