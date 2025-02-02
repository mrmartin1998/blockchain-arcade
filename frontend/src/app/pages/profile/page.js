"use client"

import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import web3 from '../../utils/web3';
import { exampleContract } from '../../utils/contract';

const ProfilePage = () => {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');
  const [contractData, setContractData] = useState('');

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = web3;
      try {
        await window.ethereum.enable();
        toast.success('Connected to MetaMask');
      } catch (error) {
        console.error('User denied account access');
        toast.error('User denied account access');
      }
    } else if (window.web3) {
      window.web3 = web3;
    } else {
      console.error('Non-Ethereum browser detected. You should consider trying MetaMask!');
      toast.error('Non-Ethereum browser detected. Please try MetaMask!');
    }
  };

  const loadBlockchainData = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
      const balance = await web3.eth.getBalance(accounts[0]);
      setBalance(web3.utils.fromWei(balance, 'ether'));
      fetchContractData(accounts[0]);
    } catch (error) {
      console.error('Error loading blockchain data:', error);
      toast.error('Error loading blockchain data');
    }
  };

  const fetchContractData = async (account) => {
    try {
      const data = await exampleContract.methods.getData().call({ from: account });
      setContractData(data);
    } catch (error) {
      console.error('Error fetching contract data:', error);
      toast.error('Error fetching contract data');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      <ToastContainer />
      <div className="bg-base-100 p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        <p><strong>Wallet Address:</strong> {account}</p>
        <p><strong>Balance:</strong> {balance} ETH</p>
        {contractData && (
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">Contract Data</h2>
            <p>{contractData}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
