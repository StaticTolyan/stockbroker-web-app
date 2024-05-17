import React from 'react';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Balance.css';

const Balance = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSwapPage = () => {
        navigate('/swap'); // Navigate to the swap page
    };

    // Mock balance data
    const balanceData = {
        ETH: {
            free: 0.01998,
            locked: 0
        },
        // Add other currencies if available
    };

    // Mock swap history data
    const swapHistory = [
        {
            id: 1,
            currencyFrom: 'ETH',
            currencyTo: 'BTC',
            amountFrom: 0.01,
            amountTo: 0.002,
            date: '2024-05-10'
        },
        {
            id: 2,
            currencyFrom: 'BTC',
            currencyTo: 'ETH',
            amountFrom: 0.002,
            amountTo: 0.01,
            date: '2024-05-11'
        }
        // Add more swap history entries if needed
    ];

    return (
        <div className="balance-container">
            <h2 className="balance-heading">Balance</h2>
            <div className="balance-details">
                <div className="balance-item">
                    <h3>ETH Balance:</h3>
                    <p>Free: {balanceData.ETH.free}</p>
                    <p>Locked: {balanceData.ETH.locked}</p>
                </div>
                {/* Add balance details for other currencies if available */}
            </div>
            <div className="swap-section">
                <Button color="primary" onClick={handleSwapPage}>Swap</Button> {/* Handle navigation to swap page */}
            </div>
            <div className="history-section">
                <h3>Swap History</h3>
                <ul className="history-list">
                    {swapHistory.map(entry => (
                        <li key={entry.id} className="history-item">
                            <span>{entry.currencyFrom} to {entry.currencyTo}: {entry.amountFrom} → {entry.amountTo}</span>
                            <span>{entry.date}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Balance;
