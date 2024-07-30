"use client"

import React from 'react';
import TokenBalance from '../../../components/TokenBalance';
//import PlayGame from '../../components/PlayGame';
//import BuyTokens from '../../components/BuyTokens';
import ExampleGameComponent from '@/app/components/ExampleGame';
import BuyTokens from '@/app/components/BuyTokens';

const ExampleGame = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      <TokenBalance />
      <ExampleGameComponent />
      <BuyTokens />
    </div>
    
  );
};

export default ExampleGame;
