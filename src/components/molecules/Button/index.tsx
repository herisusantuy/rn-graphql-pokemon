import React, { FC, PropsWithChildren, useState, ComponentProps } from 'react';
import { StyleSheet } from 'react-native';

import sizes from '@utils/theme/sizes';
import { Icons, Touchable, Typography } from '@components/atoms';
import { ColorValue } from 'react-native';

type IconProps = ComponentProps<typeof Icons.Ionicons>;
type IconName = IconProps['name'];

type Props = {
  icon?: IconName;
  onPress: any;
  backgroundColor?: ColorValue;
};

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  icon,
  onPress,
  backgroundColor = '#6c32fb'
}) => {
  const [pressedIn, setPressedIn] = useState<boolean>(false);

  const styles = StyleSheet.create({
    button: {
      height: children ? 56 : 30,
      width: children ? '100%' : 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: backgroundColor,
      borderRadius: 50,
      flexDirection: 'row',
      columnGap: children ? 10 : 0,
      opacity: pressedIn ? 0.8 : 1,
      marginVertical: sizes.margin
    }
  });
  return (
    <Touchable
      style={styles.button}
      onPressIn={() => setPressedIn(true)}
      onPressOut={() => setPressedIn(false)}
      onPress={onPress}
    >
      {icon && <Icons.Ionicons name={icon} size={18} color='white' />}
      <Typography weight='bold' variant='h6' color='white'>
        {children}
      </Typography>
    </Touchable>
  );
};

export default Button;
