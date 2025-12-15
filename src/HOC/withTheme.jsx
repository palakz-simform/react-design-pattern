import React, { useState } from 'react';

/**
 * withTheme is a Higher-Order Component that wraps a component
 * and provides theme functionality (light/dark mode)
 */
const withTheme = (WrappedComponent) => {
  return function ThemedComponent(props) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

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

    return (
      <div style={themeStyles[theme]} className="hoc-container">
        <WrappedComponent
          theme={theme}
          toggleTheme={toggleTheme}
          themeStyles={themeStyles[theme]}
          {...props}
        />
      </div>
    );
  };
};

export default withTheme;
