import useTheme from './useTheme';
import useCounter from './useCounter';

/**
 * Hooks Example Component - demonstrates custom hooks
 */
const HooksExample = () => {
  const { theme, toggleTheme, themeStyles } = useTheme();
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Hooks Pattern</h2>

      <h3>Example 1: useTheme Hook</h3>
      <p>Custom hook for managing theme state:</p>
      <div style={{ ...themeStyles, padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <p>Current Theme: <strong>{theme}</strong></p>
        <button
          onClick={toggleTheme}
          style={{
            padding: '8px 16px',
            backgroundColor: theme === 'light' ? '#007bff' : '#0056b3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Toggle Theme
        </button>
      </div>

      <h3>Example 2: useCounter Hook</h3>
      <p>Custom hook for managing counter state:</p>
      <div style={{ ...themeStyles, padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <p>Count: <strong>{count}</strong></p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={decrement}
            style={{
              padding: '8px 16px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Decrease
          </button>
          <button
            onClick={reset}
            style={{
              padding: '8px 16px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Reset
          </button>
          <button
            onClick={increment}
            style={{
              padding: '8px 16px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Increase
          </button>
        </div>
      </div>

      <h3>What are Hooks?</h3>
      <ul>
        <li>Functions that let you use React features in functional components</li>
        <li>Custom hooks allow you to extract component logic into reusable functions</li>
        <li>Built on top of built-in hooks like useState, useEffect, useCallback</li>
        <li>Common use cases: state management, effects, form handling, authentication</li>
      </ul>
    </div>
  );
};

export default HooksExample;
