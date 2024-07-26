'use client';

import React from 'react';
import BuyTokens from '../../components/BuyTokens';
import TokenBalance from '@/app/components/TokenBalance';

const BuyTokenPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
            <TokenBalance />
            <BuyTokens />
            <TokenBalance />
        </div>
    );
};

export default BuyTokenPage;
