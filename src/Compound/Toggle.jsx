import React, { createContext, useContext, useState } from 'react';

const ToggleContext = createContext();

/**
 * Toggle - Main compound component
 */
const Toggle = ({ children }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

/**
 * Toggle.On - Shows content when toggle is on
 */
Toggle.On = ({ children }) => {
  const { on } = useContext(ToggleContext);
  return on ? children : null;
};

/**
 * Toggle.Off - Shows content when toggle is off
 */
Toggle.Off = ({ children }) => {
  const { on } = useContext(ToggleContext);
  return on ? null : children;
};

/**
 * Toggle.Button - Button to toggle state
 */
Toggle.Button = ({ children }) => {
  const { on, toggle } = useContext(ToggleContext);
  return (
    <button
      onClick={toggle}
      style={{
        padding: '10px 20px',
        backgroundColor: on ? '#28a745' : '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
      }}
    >
      {children}
    </button>
  );
};

export default Toggle;
