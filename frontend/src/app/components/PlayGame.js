import React, { useState } from 'react';
import { ArcadeGame, ArcadeToken } from '../utils/contract';
import web3 from '../utils/web3';
import BigNumber from 'bignumber.js';

const PlayGame = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handlePlayGame = async () => {
        setLoading(true);
        setMessage('');
        try {
            const accounts = await web3.eth.getAccounts();
            const gameCost = new BigNumber(web3.utils.toWei('10', 'ether')); // Example game cost

            console.log('Game Cost in Wei:', gameCost.toString());

            // Get the current allowance
            let allowance = new BigNumber(await ArcadeToken.methods.allowance(accounts[0], ArcadeGame._address).call());
            console.log('Allowance:', allowance.toString());

            if (allowance.isLessThan(gameCost)) {
                // Approve the ArcadeGame contract to spend the required amount of tokens
                await ArcadeToken.methods.approve(ArcadeGame._address, gameCost.toString()).send({ from: accounts[0] });
                console.log('Approval transaction sent.');

                // Re-check the allowance after approval
                allowance = new BigNumber(await ArcadeToken.methods.allowance(accounts[0], ArcadeGame._address).call());
                console.log('Updated Allowance:', allowance.toString());

                if (allowance.isLessThan(gameCost)) {
                    throw new Error('Allowance not properly set.');
                }
            }

            // Check the balance
            const balance = new BigNumber(await ArcadeToken.methods.balanceOf(accounts[0]).call());
            console.log('Balance:', balance.toString());
            if (balance.isLessThan(gameCost)) {
                throw new Error('Insufficient token balance.');
            }

            // Estimate gas for the play method in ArcadeGame
            let gasEstimate;
            try {
                gasEstimate = await ArcadeGame.methods.play().estimateGas({ from: accounts[0] });
                console.log('Estimated Gas:', gasEstimate);
            } catch (gasError) {
                console.error('Gas estimation failed:', gasError);
                throw new Error('Gas estimation failed. Possible reasons: insufficient allowance or balance, or revert in the contract.');
            }

            // Send the transaction with the estimated gas
            await ArcadeGame.methods.play().send({ from: accounts[0], gas: gasEstimate });
            setMessage('Game played successfully!');
        } catch (error) {
            console.error('Error playing game:', error);

            // Capture the error details
            if (error.message) {
                console.error('Error message:', error.message);
            }
            if (error.stack) {
                console.error('Error stack:', error.stack);
            }
            if (error.data) {
                console.error('Error data:', error.data);
            }

            // Display error message to user
            if (error.message) {
                setMessage(`Error: ${error.message}`);
            } else if (error.data && error.data.message) {
                setMessage(`Error: ${error.data.message}`);
            } else {
                setMessage('An unknown error occurred.');
            }
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
            <div className="bg-base-100 p-8 rounded shadow-md w-full max-w-md text-center">
                <h1 className="text-2xl font-bold mb-6">Play Arcade Game</h1>
                <div className="form-control w-full max-w-xs">
                    <button
                        onClick={handlePlayGame}
                        className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Processing...' : 'Play Game'}
                    </button>
                    {message && <p className="mt-4 text-center">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default PlayGame;
