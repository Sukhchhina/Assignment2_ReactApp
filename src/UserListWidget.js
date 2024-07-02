// UserListWidget.js
import React, { useEffect, useState } from 'react';
import { realtimeDB } from './firebase';
import './UserListWidget.css';
import { ref, get } from 'firebase/database'; 
const UserListWidget = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const snapshot = await getUsersFromDatabase(); // Fetch users from Realtime Database
                const usersList = snapshot.val(); // Extract the users data from snapshot
                if (usersList) {
                    const usersArray = Object.keys(usersList).map(uid => ({
                        uid,
                        email: usersList[uid].email,
                    }));
                    setUsers(usersArray);
                }
            } catch (error) {
                console.error('Error fetching user list:', error);
            }
        };

        fetchUsers();
    }, []);

    const getUsersFromDatabase = () => {
        // Example function to fetch users from Realtime Database
        const usersRef = ref(realtimeDB, 'users');
        return get(usersRef); 
    };

    return (
        <div className="user-list-widget">
            <h2>Registered Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.uid}>{user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserListWidget;
