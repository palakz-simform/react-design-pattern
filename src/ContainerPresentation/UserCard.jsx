import React from 'react';

/**
 * Presentational Component - UserCard
 * Only handles UI rendering, receives data via props
 */
const UserCard = ({ user, onDelete }) => {
  if (!user) {
    return <div style={{ padding: '15px', color: '#999' }}>No user data</div>;
  }

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        margin: '10px 0',
        backgroundColor: '#f8f9fa',
      }}
    >
      <h3 style={{ margin: '0 0 10px 0' }}>{user.name}</h3>
      <p style={{ margin: '5px 0', color: '#666' }}>Email: {user.email}</p>
      <p style={{ margin: '5px 0', color: '#666' }}>Phone: {user.phone}</p>
      <button
        onClick={() => onDelete(user.id)}
        style={{
          marginTop: '10px',
          padding: '8px 16px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default UserCard;
