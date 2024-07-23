import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { SignOut } from '../Auth/SignOut';

export const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <header>
      <h1>Universal Clipboard</h1>
      {user && <SignOut />}
    </header>
  );
};