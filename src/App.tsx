import React from 'react';
import { Header } from './components/Layout/Header';
import { SignIn } from './components/Auth/SignIn';
import { ClipboardContent } from './components/Clipboard/ClipboardContent';
import { useAuth } from './hooks/useAuth';

const App: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="App">
      <Header />
      {user ? <ClipboardContent /> : <SignIn />}
    </div>
  );
};

export default App;