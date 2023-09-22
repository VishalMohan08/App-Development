import React, { useState } from 'react';
import '../assets/css/login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleLogin = () => {
    if (username === 'tharun' && password === '2003') {
      togglePopup();
      // Navigate to the dashboard page
      navigate('/Dashboard');
    } else {
      setIsPopupVisible(false);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Login</h1>
      <input
        className="input"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="button" onClick={handleLogin}>
        Login
      </button>
      <p className="signup-link">
        Don't have an account?{' '}
        <Link to="/signup">Sign Up</Link>
      </p>

      {isPopupVisible && (
        <div className="popup-box">
          <p>Login successful!</p>
        </div>
      )}
    </div>
  );
};

export default Login;
