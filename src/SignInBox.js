import React from 'react';
import logo from './react-logo.png'; // Replace with the path to your React logo image

// SignInBox Component: A reusable component for user sign-in and account creation
const SignInBox = ({ email, password, setEmail, setPassword, handleSignIn, handleCreateAccount }) => {
  return (
    <div className="sign-in-box">
      {/* Display the React logo image */}
      <img src={logo} alt="React Logo" className="react-logo" style={{ width: '500px', height: '400px' }}/>
      <div className="input-container">
        <label>Email:</label>
        {/* Input field for the user's email, with onChange event to update the state */}
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="input-container">
        <label>Password:</label>
        {/* Input field for the user's password, with onChange event to update the state */}
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="button-container">
        {/* Button for signing in, with onClick event to trigger the handleSignIn function */}
        <button onClick={handleSignIn}>Sign In</button>
        {/* Button for creating a new account, with onClick event to trigger the handleCreateAccount function */}
        <button onClick={handleCreateAccount}>Create Account</button>
      </div>
    </div>
  );
};

// Export the SignInBox component to be used in other parts of the application
export { SignInBox };
