import React, { useState } from 'react';
import './Swap.css';

const Swap = () => {
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [amountFrom, setAmountFrom] = useState('');
    const [amountTo, setAmountTo] = useState('');

    const handleSwap = () => {
        // Implement swap functionality here
        // You can make API calls or perform any necessary logic
        console.log('Swap button clicked');
    };

    return (
        <div className="swap-container">
            <div className="row">
                <div className="col-md-6">
                    <h2>FROM</h2>
                    <div className="form-group">
                        <label>From Currency:</label>
                        <select
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                            className="form-control"
                            required
                        >
                            <option value="">Select From Currency</option>
                            <option value="BTC">BTC</option>
                            <option value="ETH">ETH</option>
                            <option value="USD">USD</option>
                            {/* Add more currency options as needed */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Amount From:</label>
                        <input
                            type="number"
                            value={amountFrom}
                            onChange={(e) => setAmountFrom(e.target.value)}
                            className="form-control"
                            step="any" // Allow decimal numbers
                            required
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <h2>TO</h2>
                    <div className="form-group">
                        <label>To Currency:</label>
                        <select
                            value={toCurrency}
                            onChange={(e) => setToCurrency(e.target.value)}
                            className="form-control"
                            required
                        >
                            <option value="">Select To Currency</option>
                            <option value="BTC">BTC</option>
                            <option value="ETH">ETH</option>
                            <option value="USD">USD</option>
                            {/* Add more currency options as needed */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Amount To:</label>
                        <input
                            type="number"
                            value={amountTo}
                            onChange={(e) => setAmountTo(e.target.value)}
                            className="form-control"
                            step="any" // Allow decimal numbers
                            required
                        />
                    </div>
                </div>
                <button type="button" className="btn btn-primary btn-block mt-3 w-auto" onClick={handleSwap}>Swap</button>
            </div>
        </div>
    );
};

export default Swap;
