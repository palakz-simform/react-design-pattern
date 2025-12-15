import Toggle from './Toggle';
import Accordion from './Accordion';

/**
 * Compound Pattern Example Component
 */
const CompoundExample = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Compound Component Pattern</h2>

      <h3>Example 1: Toggle Component</h3>
      <p>Components work together to manage shared state:</p>
      <Toggle>
        <div style={{ marginBottom: '15px' }}>
          <Toggle.Button>Toggle</Toggle.Button>
        </div>
        <Toggle.On>
          <div style={{ padding: '15px', backgroundColor: '#d4edda', border: '1px solid #c3e6cb', borderRadius: '5px' }}>
            ✓ Toggle is ON
          </div>
        </Toggle.On>
        <Toggle.Off>
          <div style={{ padding: '15px', backgroundColor: '#f8d7da', border: '1px solid #f5c6cb', borderRadius: '5px' }}>
            ✗ Toggle is OFF
          </div>
        </Toggle.Off>
      </Toggle>

      <h3>Example 2: Accordion Component</h3>
      <p>Multiple items sharing state through context:</p>
      <Accordion>
        <Accordion.Item index={0} title="What is Compound Pattern?">
          The compound component pattern allows you to create components that work together 
          to accomplish a task while managing their own internal state.
        </Accordion.Item>
        <Accordion.Item index={1} title="Why use it?">
          It provides flexibility and control to users while keeping related components together.
          The API is more expressive and easier to understand.
        </Accordion.Item>
      </Accordion>

      <h3>What is Compound Pattern?</h3>
      <ul>
        <li>Multiple components work together as a unified API</li>
        <li>Parent component manages and shares state with children</li>
        <li>Uses Context API to communicate between components</li>
        <li>Common use cases: dropdowns, tabs, accordions, toggles</li>
      </ul>
    </div>
  );
};

export default CompoundExample;
