import MouseTracker from './MouseTracker';
/**
 * Render Props Pattern Example Component
 */
const RenderPropsExample = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Render Props Pattern</h2>

      <h3>Example 1: Mouse Tracker</h3>
      <p>Move your mouse in the box below:</p>
      <MouseTracker
        render={(position) => (
          <div>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
              Mouse Position: X: {position.x}, Y: {position.y}
            </p>
          </div>
        )}
      />

      <h3>What is Render Props Pattern?</h3>
      <ul>
        <li>A component takes a function prop that returns React elements</li>
        <li>The component calls this function and passes data to it</li>
        <li>Allows sharing logic without using HOCs or hooks</li>
        <li>Common use cases: mouse tracking, data fetching, form handling</li>
      </ul>
    </div>
  );
};

export default RenderPropsExample;
