import React from 'react';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';

function App() {
  // Simple client-side routing
  const path = window.location.pathname;

  return (
    <main>
      {path === '/' && <HomePage />}
      {path === '/about' && <AboutPage />}
    </main>
  );
}

export default App;