import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth } from './firebase';
import AuthPage from './AuthPage';
import Dashboard from './Dashboard';

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return unsubscribe;
    }, []);

    return (
        <Router>
            <div>
                {user ? (
                    <Routes>
                        <Route path="/*" element={<Dashboard />} />
                    </Routes>
                ) : (
                    <Routes>
                        <Route path="/*" element={<AuthPage />} />
                    </Routes>
                )}
            </div>
        </Router>
    );
};

export default App;
