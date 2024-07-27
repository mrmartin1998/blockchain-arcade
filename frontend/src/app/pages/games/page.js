"use client"

import React from 'react';
import TokenBalance from '../../components/TokenBalance';
import PlayGame from '../../components/PlayGame';
import BuyTokens from '../../components/BuyTokens';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      <PlayGame />
      <TokenBalance />
      <BuyTokens />
      <PlayGame />
    </div>
    
  );
};

export default App;
