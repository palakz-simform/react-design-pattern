import withTheme from './withTheme';

/**
 * Button component - a simple component that will be wrapped by HOCs
 */
const Button = ({ theme, toggleTheme, themeStyles, children }) => {
  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '10px 20px',
        margin: '10px',
        backgroundColor: theme === 'light' ? '#007bff' : '#0056b3',
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

/**
 * Card component - another simple component to demonstrate HOC
 */
const Card = ({ theme, toggleTheme, themeStyles, title, children }) => {
  return (
    <div
      style={{
        ...themeStyles,
        padding: '20px',
        margin: '10px',
        borderRadius: '8px',
      }}
    >
      <h3>{title}</h3>
      <p>{children}</p>
      <button
        onClick={toggleTheme}
        style={{
          padding: '8px 16px',
          backgroundColor: theme === 'light' ? '#28a745' : '#1e7e34',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

// Create wrapped components
const ThemedButton = withTheme(Button);
const ThemedCard = withTheme(Card);

/**
 * HOC Example Component - demonstrates the use of Higher-Order Components
 */
const HOCExample = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Higher-Order Component (HOC) Pattern</h2>

      <h3>Example 1: Theme HOC</h3>
      <p>Click to toggle between light and dark themes:</p>
      <ThemedButton>Toggle Theme</ThemedButton>
      <ThemedCard title="Themed Card">
        This card is wrapped with the withTheme HOC.
      </ThemedCard>

      <h3>What is HOC?</h3>
      <ul>
        <li>A function that takes a component and returns an enhanced component</li>
        <li>Used for code reuse and logic abstraction</li>
        <li>Common use cases: theme management, authentication, logging</li>
      </ul>
    </div>
  );
};

export default HOCExample;
