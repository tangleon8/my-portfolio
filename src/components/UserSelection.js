import React, { useState, useEffect } from 'react';
import './UserSelection.css';

const UserSelection = ({ onUserSelect }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Fade in animation
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const profiles = [
    {
      id: 'guest',
      name: 'Guest User',
      avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDE2MCAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzRGQjNEOTtzdG9wLW9wYWNpdHk6MSIgLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojM0Y4M0Y4O3N0b3Atb3BhY2l0eToxIiAvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIiBmaWxsPSJ1cmwoI2dyYWQxKSIgcng9IjgiLz4KPGNpcmNsZSBjeD0iODAiIGN5PSI4MCIgcj0iNjAiIGZpbGw9IiNGRkRBNDQiIHN0cm9rZT0iI0ZGQzEwNyIgc3Ryb2tlLXdpZHRoPSIzIi8+CjwhLS0gRXllcyAtLT4KPGNpcmNsZSBjeD0iNjUiIGN5PSI2OCIgcj0iNiIgZmlsbD0iIzMzMzMzMyIvPgo8Y2lyY2xlIGN4PSI5NSIgY3k9IjY4IiByPSI2IiBmaWxsPSIjMzMzMzMzIi8+CjwhLS0gU21pbGUgLS0+CjxwYXRoIGQ9Ik02MCA5MlE4MCA5NyAxMDAgOTJUMTA1IDkyIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iNCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjwhLS0gU2hpbmUgZWZmZWN0IC0tPgo8Y2lyY2xlIGN4PSI3MCIgY3k9IjYwIiByPSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMykiLz4KPC9zdmc+',
      requiresPassword: false
    },
    {
      id: 'admin',
      name: 'Admin',
      avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDE2MCAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I0U1MDkxNDtzdG9wLW9wYWNpdHk6MSIgLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojQjUwNzE3O3N0b3Atb3BhY2l0eToxIiAvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIiBmaWxsPSJ1cmwoI2dyYWQyKSIgcng9IjgiLz4KPGNpcmNsZSBjeD0iODAiIGN5PSI4MCIgcj0iNjAiIGZpbGw9IiNGRjY5MzQiIHN0cm9rZT0iI0ZGNEUxNiIgc3Ryb2tlLXdpZHRoPSIzIi8+CjwhLS0gRXllcyAtLT4KPGNpcmNsZSBjeD0iNjUiIGN5PSI2OCIgcj0iNiIgZmlsbD0iIzMzMzMzMyIvPgo8Y2lyY2xlIGN4PSI5NSIgY3k9IjY4IiByPSI2IiBmaWxsPSIjMzMzMzMzIi8+CjwhLS0gU21pbGUgLS0+CjxwYXRoIGQ9Ik02MCA5MlE4MCA5NyAxMDAgOTJUMTA1IDkyIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iNCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjwhLS0gU2hpbmUgZWZmZWN0IC0tPgo8Y2lyY2xlIGN4PSI3MCIgY3k9IjYwIiByPSI4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMykiLz4KPCEtLSBDcm93biBmb3IgQWRtaW4gLS0+CjxwYXRoIGQ9Ik02MCA0NUw2NSAzNUw3MCA0NUw3NSAzNUw4MCA0NUw4NSAzNUw5MCA0NUw5NSAzNUwxMDAgNDVMMTA1IDUwSDU1WiIgZmlsbD0iI0ZGRDcwMCIgc3Ryb2tlPSIjRkZCMzAwIiBzdHJva2Utd2lkdGg9IjEiLz4KPGNpcmNsZSBjeD0iODAiIGN5PSI0MiIgcj0iMyIgZmlsbD0iI0ZGMzMzMyIvPgo8L3N2Zz4=',
      requiresPassword: true
    }
  ];

  const handleProfileClick = (profile) => {
    if (profile.requiresPassword) {
      setSelectedProfile(profile);
      setShowPasswordModal(true);
      setPassword('');
      setPasswordError('');
    } else {
      // Guest user can access immediately
      onUserSelect(profile);
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === 'admin') {
      setShowPasswordModal(false);
      onUserSelect(selectedProfile);
    } else {
      setPasswordError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handleModalClose = () => {
    setShowPasswordModal(false);
    setSelectedProfile(null);
    setPassword('');
    setPasswordError('');
  };

  return (
    <div className={`user-selection ${fadeIn ? 'fade-in' : ''}`}>
      {/* Netflix background */}
      <div className="user-selection-background">
        <div className="netflix-gradient"></div>
      </div>

      {/* Main content */}
      <div className="user-selection-content">
        <h1 className="selection-title">Who's watching?</h1>
        
        <div className="profiles-container">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="profile-card"
              onClick={() => handleProfileClick(profile)}
            >
              <div className="profile-avatar">
                <img src={profile.avatar} alt={profile.name} />
                {profile.requiresPassword && (
                  <div className="lock-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="white"/>
                      <path d="M6 10V8C6 5.79086 7.79086 4 10 4H14C16.2091 4 18 5.79086 18 8V10H19C19.5523 10 20 10.4477 20 11V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V11C4 10.4477 4.44772 10 5 10H6ZM8 8V10H16V8C16 6.89543 15.1046 6 14 6H10C8.89543 6 8 6.89543 8 8Z" fill="white"/>
                    </svg>
                  </div>
                )}
              </div>
              <span className="profile-name">{profile.name}</span>
            </div>
          ))}
        </div>

        <button className="manage-profiles-btn">Manage Profiles</button>
      </div>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="password-modal-overlay" onClick={handleModalClose}>
          <div className="password-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleModalClose}>×</button>
            
            <div className="modal-content">
              <div className="modal-avatar">
                <img src={selectedProfile?.avatar} alt={selectedProfile?.name} />
              </div>
              
              <h2 className="modal-title">Enter your password for {selectedProfile?.name}</h2>
              
              <form onSubmit={handlePasswordSubmit} className="password-form">
                <div className="password-input-container">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className={`password-input ${passwordError ? 'error' : ''}`}
                    autoFocus
                  />
                  {passwordError && (
                    <div className="password-error">{passwordError}</div>
                  )}
                </div>
                
                <div className="modal-buttons">
                  <button type="button" onClick={handleModalClose} className="cancel-btn">
                    Cancel
                  </button>
                  <button type="submit" className="continue-btn">
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSelection;