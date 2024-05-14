import React, { useState } from 'react';
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
                    <label>Email:</label>
                    <input className="form-control"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    <label>Confirm Password:</label>
                    <input className="form-control"
                        type="password"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
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
                    /><br></br>
                    <button className="btn btn-info" type="button" onClick={generateSeedPhrase}>Generate Seed Phrase</button>
                </div>
                <button className="btn btn-primary" type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
