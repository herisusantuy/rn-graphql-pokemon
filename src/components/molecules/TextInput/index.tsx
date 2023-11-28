import React, { FC, PropsWithChildren } from 'react';
import { TextInput as Input, View, StyleSheet } from 'react-native';
import type { TextInputProps, ViewProps } from 'react-native';

import { Icons, Typography } from '@components/atoms';
import sizes from '@utils/theme/sizes';

type Props = {
  label?: string;
  customStyle?: ViewProps;
  error?: string;
  onSecureText?: () => void;
  isSecureText?: boolean;
};

const TextInput: FC<PropsWithChildren<Props & TextInputProps>> = ({
  children,
  label,
  value,
  placeholder,
  error,
  onChangeText,
  onSecureText,
  isSecureText = false,
  secureTextEntry = false,
  customStyle,
  ...props
}) => {
  return (
    <View style={[styles.wrapper, customStyle]}>
      {label ? <Typography variant='body'>{label}</Typography> : null}
      <View>
        <Input
          style={styles.textInput}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
        />
        {isSecureText ? (
          <Icons.Feather
            name={secureTextEntry ? 'eye' : 'eye-off'}
            size={20}
            style={{ position: 'absolute', top: 25, right: 15 }}
            onPress={onSecureText}
          />
        ) : null}
        {error ? <Typography variant='small'>{error}</Typography> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: sizes.padding
  },
  textInput: {
    marginTop: 10,
    paddingVertical: sizes.padding,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10
  }
});

export default TextInput;
