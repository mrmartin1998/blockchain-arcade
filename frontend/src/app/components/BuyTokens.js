import React, { useState } from 'react';
import { ArcadeToken } from '../utils/contract';
import web3 from '../utils/web3';

const BuyTokens = () => {
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleBuyTokens = async () => {
        setLoading(true);
        setMessage('');
        try {
            const accounts = await web3.eth.getAccounts();
            const account = accounts[0];

            console.log('Account:', account);

            const weiAmount = web3.utils.toWei(amount.toString(), 'ether');
            console.log('Wei Amount:', weiAmount);

            const mintMethod = ArcadeToken.methods.mint(account, weiAmount);
            console.log('Mint Method:', mintMethod);

            // Estimate gas for the mint method
            const gasEstimate = await mintMethod.estimateGas({ from: account });
            console.log('Estimated Gas:', gasEstimate);

            // Send the transaction with the estimated gas
            await mintMethod.send({ from: account, gas: gasEstimate });
            setMessage('Tokens purchased successfully!');
        } catch (error) {
            console.error('Error minting tokens:', error);
            setMessage(`Error: ${error.message}`);
        }
        setLoading(false);
    };

    const handleCheckTotalSupply = async () => {
        setLoading(true);
        setMessage('');
        try {
            const totalSupply = await ArcadeToken.methods.totalSupply().call();
            console.log('Total Supply:', totalSupply);
            setMessage(`Total Supply: ${totalSupply}`);
        } catch (error) {
            console.error('Error checking total supply:', error);
            setMessage(`Error: ${error.message}`);
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
            <div className="bg-base-100 p-8 rounded shadow-md w-full max-w-md text-center">
                <h1 className="text-2xl font-bold mb-6">Buy ArcadeTokens</h1>
                <div className="form-control w-full max-w-xs">
                    <label htmlFor="amount" className="label">
                        <span className="label-text justify-center">Amount to Buy:</span>
                    </label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="input input-bordered w-full max-w-xs mb-4"
                    />
                    <button
                        onClick={handleBuyTokens}
                        className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Processing...' : 'Buy Tokens'}
                    </button>
                    <button
                        onClick={handleCheckTotalSupply}
                        className="btn btn-secondary w-full mt-4"
                        disabled={loading}
                    >
                        Check Total Supply
                    </button> 
                    {message && <p className="mt-4 text-center">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default BuyTokens;
