import React, { FC, PropsWithChildren } from 'react';
import { View } from 'react-native';
import type {
  StyleProp,
  ViewProps,
  ViewStyle,
  FlexAlignType,
  ColorValue
} from 'react-native';

type Props = {
  m?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  mx?: number;
  my?: number;
  p?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  px?: number;
  py?: number;
  bg?: ColorValue;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  items?: FlexAlignType;
  centered?: boolean;
  row?: boolean;
};

const Box: FC<PropsWithChildren<Props & ViewProps>> = props => {
  const customStyle: StyleProp<ViewStyle> = {
    margin: props.m,
    marginLeft: props.ml,
    marginRight: props.mr,
    marginTop: props.mt,
    marginBottom: props.mb,
    marginHorizontal: props.mx,
    marginVertical: props.my,
    padding: props.p,
    paddingLeft: props.pl,
    paddingRight: props.pr,
    paddingTop: props.pt,
    paddingBottom: props.pb,
    paddingHorizontal: props.px,
    paddingVertical: props.py,
    justifyContent: props.justify,
    alignItems: props.items,
    backgroundColor: props.bg
  };

  if (props.centered) {
    (customStyle.justifyContent = 'center'),
      (customStyle.alignItems = 'center');
  }

  if (props.row) {
    customStyle.flexDirection = 'row';
  }

  return (
    <View {...props} style={[customStyle, props.style]}>
      {props.children}
    </View>
  );
};

export default Box;
