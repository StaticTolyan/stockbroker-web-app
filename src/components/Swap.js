import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const SwapPage = () => {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [FromAmount, setFromAmount] = useState("");
  const [ToAmount, setToAmount] = useState("");

  const handleSwap = () => {
    // Implement swap functionality here
    console.log("Swapping...");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Crypto Swap</h2>
          <Form className="d-flex flex-md-row flex-column">
            <FormGroup className="flex-column">
              <Label for="fromCurrency">From Currency→</Label>
              <Input
                type="select"
                name="fromCurrency"
                id="fromCurrency"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                <option>Select</option>
                <option>BTC</option>
                <option>ETH</option>
                <option>LTC</option>
                {/* Add more options as needed */}
              </Input>
              <Label for="amount">Amount→</Label>
              <Input
                type="number"
                name="amount"
                id="amount"
                placeholder="Enter amount"
                value={FromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
              />
            </FormGroup>
            <Button>SWITCH</Button>
            <FormGroup className="flex-column">
              <Label for="toCurrency">→To Currency</Label>
              <Input
                type="select"
                name="toCurrency"
                id="toCurrency"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                <option>Select</option>
                <option>BTC</option>
                <option>ETH</option>
                <option>LTC</option>
                {/* Add more options as needed */}
              </Input>
              <Label for="amount">→Amount</Label>
              <Input
                type="number"
                name="amount"
                id="amount"
                placeholder="Enter amount"
                value={ToAmount}
                onChange={(e) => setToAmount(e.target.value)}
              />
            </FormGroup>
            <Button color="primary" onClick={handleSwap}>
              Swap
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SwapPage;
