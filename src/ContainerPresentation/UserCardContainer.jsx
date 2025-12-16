import { useState, useEffect } from 'react';
import UserCard from './UserCard';

/**
 * Container Component - UserCardContainer
 * Handles logic, state management, and data fetching
 */
const UserCardContainer = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      const mockUsers = {
        1: { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
        2: { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' },
      };

      const fetchedUser = mockUsers[userId];
      if (fetchedUser) {
        setUser(fetchedUser);
        setError(null);
      } else {
        setError('User not found');
      }
      setLoading(false);
    }, 500);
  }, [userId]);

  const handleDelete = (id) => {
    console.log(`Deleting user with id: ${id}`);
    setUser(null);
  };

  if (loading) {
    return <div style={{ padding: '15px', color: '#666' }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ padding: '15px', color: '#dc3545' }}>Error: {error}</div>;
  }

  return <UserCard user={user} onDelete={handleDelete} />;
};

export default UserCardContainer;
