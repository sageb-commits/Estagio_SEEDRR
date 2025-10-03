
import React, { useState, useCallback } from 'react';
import LoginPage from './components/LoginPage';
import MainContent from './components/MainContent';
import { AuthStatus, User } from './types';

function App() {
  const [authStatus, setAuthStatus] = useState<AuthStatus>(AuthStatus.LOGGED_OUT);
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = useCallback((loggedInUser: User) => {
    setUser(loggedInUser);
    setAuthStatus(AuthStatus.LOGGED_IN_USER);
  }, []);

  const handleVisitorLogin = useCallback(() => {
    setUser(null);
    setAuthStatus(AuthStatus.LOGGED_IN_VISITOR);
  }, []);

  const handleLogout = useCallback(() => {
    setUser(null);
    setAuthStatus(AuthStatus.LOGGED_OUT);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {authStatus === AuthStatus.LOGGED_OUT ? (
        <LoginPage onLogin={handleLogin} onVisitorLogin={handleVisitorLogin} />
      ) : (
        <MainContent 
          user={user} 
          isVisitor={authStatus === AuthStatus.LOGGED_IN_VISITOR} 
          onLogout={handleLogout} 
        />
      )}
    </div>
  );
}

export default App;
