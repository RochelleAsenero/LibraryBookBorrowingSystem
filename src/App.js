// src/App.js
import React, { useState } from 'react';
import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  // Sign Up Function
  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  // Sign In Function
  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="App neon-container">
      <div className="neon-form">
        <h1 className="neon-title">Firebase Auth</h1>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="neon-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="neon-input"
          />
        </div>
        <div className="button-group">
          <button onClick={handleSignUp} className="neon-button">Sign Up</button>
          <button onClick={handleSignIn} className="neon-button">Sign In</button>
        </div>
        {user && <h2 className="neon-welcome">Welcome, {user.email}</h2>}
      </div>
    </div>
  );
}

export default App;
