// frontend/src/app/page.js

'use client';

import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      <div className="bg-base-100 p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Welcome to the Blockchain Boilerplate</h1>
        <p className="mb-6">
          This boilerplate provides a ready-to-use foundation for your blockchain web applications.
        </p>
        <div className="mb-4">
          <Link href="/pages/buytoken/" className="btn btn-primary w-full mb-4">
            Buy Tokens
          </Link>
          <Link href="/pages/auth/register" className="btn btn-success w-full">
            Register
          </Link>
          
        </div>
        
      </div>

    </div>
  );
};

export default HomePage;
