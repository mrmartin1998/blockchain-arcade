import React, { useState, useEffect } from 'react';
import { ArcadeToken } from '../utils/contract';
import web3 from '../utils/web3';

const TokenBalance = () => {
  const [balance, setBalance] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBalance = async () => {
      setLoading(true);
      try {
        const accounts = await web3.eth.getAccounts();
        const balanceWei = await ArcadeToken.methods.balanceOf(accounts[0]).call();
        const balance = web3.utils.fromWei(balanceWei, 'ether');
        setBalance(balance);
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
      setLoading(false);
    };

    fetchBalance();
  }, []);

  return (
    <div className="flex justify-center items-center my-4">
      <button
        className="btn btn-primary text-white"
        disabled={loading}
      >
        {loading ? 'Loading...' : `Balance: ${balance} ARCD`}
      </button>
    </div>
  );
};

export default TokenBalance;
