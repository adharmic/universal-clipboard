import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export const SignOut: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <button onClick={signOut}>
      Sign Out
    </button>
  );
};