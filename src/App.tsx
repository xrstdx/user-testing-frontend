import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const isAuthenticated = true; // Mock isAuthenticated state
  const authenticationPath = '/login';
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <ProtectedRoute
            path="/dashboard"
            isAuthenticated={isAuthenticated}
            authenticationPath={authenticationPath}
          >
            <Dashboard />
          </ProtectedRoute>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

