// UserListWidget.js
import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import './UserListWidget.css';

const UserListWidget = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const userList = await auth.listUsers();  
                setUsers(userList.users);
            } catch (error) {
                console.error('Error fetching user list:', error);
            }
        };

        fetchUsers();
    }, []);

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
