import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="username">Username:</Label>
                    <Input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password:</Label>
                    <Input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="seedPhrase">Seed Phrase:</Label>
                    <Input
                        type="text"
                        id="seedPhrase"
                        value={seedPhrase}
                        onChange={(e) => setSeedPhrase(e.target.value)}
                        required
                    />
                </FormGroup>
                <Button color="primary" type="submit">Login</Button>
            </Form>
        </div>
    );
};

export default Login;
