// AuthPage.js
import React, { useState } from 'react';
import { auth, realtimeDB } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import './AuthPage.css';

const AuthPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleRegister = async () => {
        try {
            const credential = await createUserWithEmailAndPassword(auth, email, password);
            if (credential && credential.user) {
                // Store user email in Realtime Database
                await set(ref(realtimeDB, `users/${credential.user.uid}`), {
                    email: credential.user.email,
                });
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="auth-container">
            <h1 className="auth-title">Login</h1>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="auth-input"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="auth-input"
            />
            <div className="auth-buttons">
                <button onClick={handleLogin} className="auth-button">Login</button>
                <button onClick={handleRegister} className="auth-button">Register</button>
            </div>
            {error && <p className="auth-error">{error}</p>}
        </div>
    );
};

export default AuthPage;
