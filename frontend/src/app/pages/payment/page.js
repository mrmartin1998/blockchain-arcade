'use client';

import StripePayment from '@/app/components/payment/StripePayment';

const PaymentPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <StripePayment />
    </div>
  );
};

export default PaymentPage;
