import { useState, useCallback } from 'react';

/**
 * Custom Hook: useTheme
 * Provides theme state and toggle functionality
 */
const useTheme = (initialTheme = 'light') => {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const themeStyles = {
    light: {
      backgroundColor: '#ffffff',
      color: '#000000',
      border: '1px solid #ddd',
    },
    dark: {
      backgroundColor: '#333333',
      color: '#ffffff',
      border: '1px solid #666',
    },
  };

  return {
    theme,
    toggleTheme,
    themeStyles: themeStyles[theme],
  };
};

export default useTheme;
