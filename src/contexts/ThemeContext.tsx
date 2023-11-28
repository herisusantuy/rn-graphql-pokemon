import React, { FC, createContext, useState } from 'react';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import type { PropsWithChildren } from 'react';
import type { ColorSchemeName } from 'react-native';
import type { StatusBarStyle } from 'expo-status-bar';

type ThemeOption = 'auto' | 'light' | 'dark';

type ThemeContextProps = {
  theme: ColorSchemeName;
  selectedTheme: ThemeOption;
  switchTheme: (theme: ThemeOption) => void;
  changeStatusBar: (style: StatusBarStyle, background?: string) => void;
};

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeOption>('light');
  const [theme, setTheme] = useState<ColorSchemeName>('light');
  const [statusBarBackground, setStatusBarBackground] =
    useState<string>('transparent');
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>('dark');

  const colorScheme = useColorScheme();

  const switchTheme = (theme: ThemeOption) => {
    setSelectedTheme(theme);
    setTheme(theme === 'auto' ? colorScheme : theme);
  };

  const changeStatusBar = (
    style: StatusBarStyle,
    background = 'transparent'
  ) => {
    setStatusBarBackground(background);
    setStatusBarStyle(style);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        selectedTheme,
        switchTheme,
        changeStatusBar
      }}
    >
      <StatusBar backgroundColor={statusBarBackground} style={statusBarStyle} />
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
