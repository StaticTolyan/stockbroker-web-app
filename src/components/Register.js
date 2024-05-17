import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Web3 from 'web3'; // Import web3 library

const Register = ({ setActiveTab }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [seedPhrase, setSeedPhrase] = useState('');
    const [error, setError] = useState('');

    const generateSeedPhrase = () => {
        // Use web3 to generate a random mnemonic (seed phrase)
        const web3 = new Web3();
        const mnemonic = web3.eth.accounts.create().mnemonic;
        setSeedPhrase(mnemonic);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://example.com/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    password2,
                    seed_phrase: seedPhrase, // Include seed phrase in the registration request
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Handle successful registration
                console.log('Registration successful:', data);
            } else {
                setError(data.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Register</h2>
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
                    <Label for="email">Email:</Label>
                    <Input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    <Label for="password2">Confirm Password:</Label>
                    <Input
                        type="password"
                        id="password2"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
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
                    <Button color="info" onClick={generateSeedPhrase}>Generate Seed Phrase</Button>
                </FormGroup>
                <Button color="primary" type="submit">Register</Button>
            </Form>
        </div>
    );
};

export default Register;
