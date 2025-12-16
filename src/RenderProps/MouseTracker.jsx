import { useState } from 'react';

/**
 * MouseTracker - Component with render prop
 * Tracks mouse position and passes data to render prop
 */
const MouseTracker = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        height: '200px',
        border: '2px solid #007bff',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        position: 'relative',
      }}
    >
      {render(position)}
    </div>
  );
};

export default MouseTracker;
