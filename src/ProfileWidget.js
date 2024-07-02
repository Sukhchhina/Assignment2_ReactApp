import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import './ProfileWidget.css'; 

const ProfileWidget = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return unsubscribe;
    }, []);

    const handleSignOut = async () => {
        await signOut(auth);
        navigate('/');
    };

    return (
        <div className="profile-container">
            <h2>User Profile</h2>
            {user ? (
                <div>
                    <p>Email: {user.email}</p>
                    <button onClick={handleSignOut} className="signout-button">Sign Out</button>
                </div>
            ) : (
                <p>No user logged in</p>
            )}
        </div>
    );
};

export default ProfileWidget;
