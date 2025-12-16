import  { useState } from 'react';
import UserCardContainer from './UserCardContainer';

/**
 * Container/Presentation Pattern Example Component
 */
const ContainerPresentationExample = () => {
  const [selectedUserId, setSelectedUserId] = useState(1);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Container/Presentation Pattern</h2>

      <h3>Example: User Card</h3>
      <p>Select a user to load their data:</p>
      
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => setSelectedUserId(1)}
          style={{
            padding: '8px 16px',
            margin: '5px',
            backgroundColor: selectedUserId === 1 ? '#007bff' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          User 1
        </button>
        <button
          onClick={() => setSelectedUserId(2)}
          style={{
            padding: '8px 16px',
            margin: '5px',
            backgroundColor: selectedUserId === 2 ? '#007bff' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          User 2
        </button>
      </div>

      <UserCardContainer userId={selectedUserId} />

      <h3 style={{ marginTop: '30px' }}>How It Works</h3>
      <div
        style={{
          backgroundColor: '#f8f9fa',
          padding: '15px',
          borderRadius: '5px',
          fontSize: '14px',
        }}
      >
        <p><strong>Container (UserCardContainer):</strong></p>
        <ul>
          <li>Handles data fetching and state management</li>
          <li>Contains business logic (e.g., handleDelete)</li>
          <li>Passes data and callbacks to presentation component</li>
        </ul>
        <p><strong>Presentation (UserCard):</strong></p>
        <ul>
          <li>Only focuses on UI rendering</li>
          <li>Receives all data via props</li>
          <li>No state or side effects</li>
        </ul>
      </div>

      <h3>What is Container/Presentation Pattern?</h3>
      <ul>
        <li>Separates data logic from UI rendering</li>
        <li>Container: handles logic, state, effects</li>
        <li>Presentation: pure UI, receives props only</li>
        <li>Benefits: reusability, testability, maintainability</li>
      </ul>
    </div>
  );
};

export default ContainerPresentationExample;
