import { useContext, useEffect } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    themeContext.changeStatusBar(themeContext.theme);
  }, [themeContext.theme]);

  return themeContext;
};

export default useTheme;
