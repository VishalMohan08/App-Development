import React, { useState } from 'react';
import '../assets/css/signup.css';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleSignup = () => {
    // Your signup logic here (replace this with actual signup logic)
    // For demonstration purposes, we'll simulate a successful signup after 2 seconds
    setTimeout(() => {
      togglePopup();
    }, 2000);
  };

  const handleNavigateToLogin = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <h1 className="title">Signup</h1>
      <input
        className="input"
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="Email"
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
      <button className="button" onClick={handleSignup}>
        Sign up
      </button>
      <p className="login-link" onClick={handleNavigateToLogin}>
        Already have an account? Login
      </p>

      {isPopupVisible && (
        <div className="popup-box">
          <p>Registered successfully!</p>
          <Link to="/">Go to Login</Link>
        </div>
      )}
    </div>
  );
};

export default Signup;
