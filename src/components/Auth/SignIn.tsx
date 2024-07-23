import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  return (
    <button onClick={signIn}>
      Sign In with Google
    </button>
  );
};