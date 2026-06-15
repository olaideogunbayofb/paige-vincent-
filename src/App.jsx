import React, { useState } from 'react';
import { LandingPage, LoginPage } from './components/Pages';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigateToLogin = () => setCurrentPage('login');
  const navigateToLanding = () => setCurrentPage('landing');

  return (
    <div className="App">
      {currentPage === 'landing' && <LandingPage onVerifyClick={navigateToLogin} />}
      {currentPage === 'login' && <LoginPage onBack={navigateToLanding} />}
    </div>
  );
}

export default App;