import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LoadingScreen from './components/LoadingScreen';
import UserSelection from './components/UserSelection';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showUserSelection, setShowUserSelection] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowUserSelection(true);
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setShowUserSelection(false);
  };

  // Show loading screen first
  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  // Show user selection screen after loading
  if (showUserSelection) {
    return <UserSelection onUserSelect={handleUserSelect} />;
  }

  // Show main portfolio after user selection
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
