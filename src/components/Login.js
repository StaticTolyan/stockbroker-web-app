import React, { useState } from 'react';

const Login = ({ setActiveTab }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [seedPhrase, setSeedPhrase] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://example.com/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username_signin: username,
                    password_signin: password,
                    seed_phrase: seedPhrase, // Include seed phrase in the login request
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Handle successful login
                console.log('Login successful:', data);
            } else {
                setError(data.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label>Username:</label>
                    <input className="form-control"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div class="form-group">
                    <label>Password:</label>
                    <input className="form-control"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div class="form-group">
                    <label>Seed Phrase:</label>
                    <input className="form-control"
                        type="text"
                        value={seedPhrase}
                        onChange={(e) => setSeedPhrase(e.target.value)}
                        required
                    />
                </div>
                <button class="btn btn-primary" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
