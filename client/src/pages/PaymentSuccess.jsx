import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CartContext } from '../context/CartContext';

// Page shown when Paystack sends the customer back to Gina's Luxury
const PaymentSuccess = () => {
  const { clearCart } = useContext(CartContext);
  const location = useLocation();

  const [status, setStatus] = useState('verifying');
  const [message, setMessage] = useState(
    'Please wait while we confirm your payment...'
  );

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        // Get the Paystack reference from the URL.
        // Example:
        // /payment-success?reference=PAYSTACK_REFERENCE
        const params = new URLSearchParams(location.search);
        const reference = params.get('reference');

        if (!reference) {
          setStatus('failed');
          setMessage(
            'We could not find your payment reference. Please contact us if you were charged.'
          );
          return;
        }

        // Ask our backend to verify the payment with Paystack.
        const verifyResponse = await fetch(
          `https://ginas-luxury.onrender.com/api/orders/paystack/verify/${encodeURIComponent(reference)}`
        );

        const verifyData = await verifyResponse.json();

        // Stop if Paystack did not confirm a successful payment.
        if (!verifyResponse.ok) {
          throw new Error(
            verifyData.message || 'Payment verification failed'
          );
        }

        // Get the order information we temporarily saved
        // before sending the customer to Paystack.
        const pendingOrder = sessionStorage.getItem('pendingOrder');

        if (!pendingOrder) {
          throw new Error(
            'We could not find your order information.'
          );
        }

        const orderData = JSON.parse(pendingOrder);

        // Create the order only after payment has been verified.
        const orderResponse = await fetch(
          'https://ginas-luxury.onrender.com/api/orders',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...orderData,
              paymentMethod: 'paystack',
              paymentStatus: 'paid',
              transactionId: verifyData.payment.reference,
            }),
          }
        );

        const createdOrder = await orderResponse.json();

        if (!orderResponse.ok) {
          throw new Error(
            createdOrder.message || 'Failed to create order'
          );
        }

        console.log(
          'Paid order created successfully:',
          createdOrder
        );

        // Payment and order are both successful.
        // Now it is safe to clear the cart.
        clearCart();

        // Remove temporary checkout information.
        sessionStorage.removeItem('pendingOrder');
        sessionStorage.removeItem('paystackReference');

        setStatus('success');
        setMessage(
          'Your payment has been received and your order has been placed successfully.'
        );

      } catch (error) {
        console.error('Payment verification error:', error);

        setStatus('failed');
        setMessage(
          error.message ||
          'Something went wrong while confirming your payment.'
        );
      }
    };

    verifyPayment();
  }, [location.search, clearCart]);

  // Payment is still being verified
  if (status === 'verifying') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mb-6"
        >
          <div className="text-6xl text-yellow-600 mb-4">
            ...
          </div>
        </motion.div>

        <h1 className="text-4xl font-bold mb-4 text-black">
          Confirming Your Payment
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          {message}
        </p>

      </div>
    );
  }

  // Payment verification failed
  if (status === 'failed') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mb-6"
        >
          <div className="text-6xl text-red-600 mb-4">
            ×
          </div>
        </motion.div>

        <h1 className="text-4xl font-bold mb-4 text-black">
          Payment Could Not Be Confirmed
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          {message}
        </p>

        <Link
          to="/checkout"
          className="inline-block bg-yellow-600 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
        >
          Return to Checkout
        </Link>

      </div>
    );
  }

  // Payment and order were successful
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="mb-6"
      >
        <div className="text-6xl text-yellow-600 mb-4">
          ✓
        </div>
      </motion.div>

      <h1 className="text-4xl font-bold mb-4 text-black">
        Payment Successful!
      </h1>

      <p className="text-xl text-gray-600 mb-8">
        {message}
      </p>

      <Link
        to="/"
        className="inline-block bg-yellow-600 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
      >
        Continue Shopping
      </Link>

    </div>
  );
};

export default PaymentSuccess;

