import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook

    useEffect(() => {
        fetchUserInfo();
    }, []);

    const fetchUserInfo = async () => {
        try {
            const response = await fetch('http://example.com/api/userInfo', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (response.ok) {
                setUserInfo(data);
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleLogout = async () => {
        try {
            const response = await fetch('http://example.com/logout/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                navigate('/login'); // Redirect to login page upon successful logout
            } else {
                const data = await response.json();
                setError(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>User Information</h2>
            {error && <div className="error">{error}</div>}
            {userInfo && (
                <div>
                    <p>Username: {userInfo.username}</p>
                    <p>Email: {userInfo.email}</p>
                </div>
            )}
            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default UserInfo;
