import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Checkout page with customer form
const Checkout = () => {
  const { cart, getTotalPrice, getItemPrice } = useContext(CartContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Initialize Paystack payment
  const handleSubmit = async (e) => {
    e.preventDefault();

    const totalPrice = getTotalPrice();
    const shipping = totalPrice >= 100000 ? 0 : 10000;
    const finalTotal = totalPrice + shipping;

    setIsLoading(true);

    try {
      // Save the order information temporarily in the browser.
      // We will use this information after Paystack verifies the payment.
      const pendingOrderData = {
        customerName: `${formData.firstName} ${formData.lastName}`,
        customerEmail: formData.email,
        customerPhone: formData.phone,
        shippingAddress: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zip,

        items: cart.map((item) => ({
          productId: String(item._id || item.id),
          name: item.name,
          quantity: item.quantity,
          price: getItemPrice(item),
        })),

        subtotal: totalPrice,
        tax: 0,
        shipping: shipping,
        total: finalTotal,
        paymentMethod: "paystack",
      };

      // Store the pending order temporarily.
      sessionStorage.setItem(
        "pendingOrder",
        JSON.stringify(pendingOrderData)
      );

      // Ask our backend to initialize the Paystack transaction.
      const response = await fetch(
        "https://ginas-luxury.onrender.com/api/orders/paystack/initialize",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customerEmail: formData.email,
            customerName: `${formData.firstName} ${formData.lastName}`,
            customerPhone: formData.phone,
            total: finalTotal,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to initialize payment"
        );
      }

      // Make sure Paystack gave us a checkout URL.
      if (!data.authorizationUrl) {
        throw new Error("Paystack checkout URL was not returned");
      }

      // Save the Paystack reference so we know which transaction
      // belongs to this pending order.
      sessionStorage.setItem(
        "paystackReference",
        data.reference
      );

      // Send the customer to Paystack's secure checkout page.
      window.location.href = data.authorizationUrl;

    } catch (error) {
      console.error("Payment initialization error:", error);

      // Remove the pending order if payment initialization failed.
      sessionStorage.removeItem("pendingOrder");
      sessionStorage.removeItem("paystackReference");

      alert(
        "Something went wrong while starting your payment. Please try again."
      );

      setIsLoading(false);
    }
  };

  // Empty cart
  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">

        <h1 className="text-4xl font-bold mb-6 text-black">
          Your cart is empty
        </h1>

        <Link
          to="/products"
          className="inline-block bg-yellow-600 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
        >
          Back to Shopping
        </Link>

      </div>
    );
  }

  const totalPrice = getTotalPrice();
  const shipping = totalPrice >= 100000 ? 0 : 10000;
  const finalTotal = totalPrice + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <h1 className="text-4xl font-bold mb-12 text-black">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Checkout Form */}
        <div className="lg:col-span-2">

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >

            {/* Shipping Information */}
            <h2 className="text-2xl font-bold mb-6 text-black">
              Shipping Information
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-6">

              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="col-span-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-600"
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="col-span-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-600"
              />

            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="col-span-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-600"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="col-span-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-600"
              />

            </div>

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-600 mb-4"
            />

            <div className="grid grid-cols-3 gap-4 mb-8">

              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-600"
              />

              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleInputChange}
                required
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-600"
              />

              <input
                type="text"
                name="zip"
                placeholder="ZIP"
                value={formData.zip}
                onChange={handleInputChange}
                required
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-600"
              />

            </div>

            {/* Payment Information */}
            <h2 className="text-2xl font-bold mb-4 text-black">
              Payment Information
            </h2>

            <p className="text-gray-600 mb-8">
              You will be redirected to Paystack to complete your payment securely.
            </p>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-yellow-600 text-black py-4 rounded-lg font-bold transition text-lg ${
                isLoading
                  ? 'opacity-60 cursor-not-allowed'
                  : 'hover:bg-yellow-500'
              }`}
            >
              {isLoading ? 'REDIRECTING TO PAYSTACK...' : 'PAY WITH PAYSTACK'}
            </button>

          </motion.form>

        </div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-lg p-8 h-fit sticky top-24"
        >

          <h2 className="text-2xl font-bold mb-6 text-black">
            Order Summary
          </h2>

          {/* Cart Items */}
          <div className="mb-6 pb-6 border-b max-h-64 overflow-y-auto">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between mb-4 text-sm"
              >

                <span className="text-gray-600">
                  {item.name}{' '}
                  <span className="font-bold">
                    x{item.quantity}
                  </span>
                </span>

                <span className="font-bold text-black">
                  ₦{(getItemPrice(item) * item.quantity).toFixed(2)}
                </span>

              </div>
            ))}

          </div>

          {/* Totals */}
          <div className="space-y-3 mb-6 pb-6 border-b">

            <div className="flex justify-between text-gray-600">
              <span>Subtotal:</span>
              <span>₦{totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Shipping:</span>
              <span>
                {shipping === 0
                  ? 'FREE'
                  : `₦${shipping.toFixed(2)}`}
              </span>
            </div>

          </div>

          <div className="flex justify-between mb-6">

            <span className="text-xl font-bold text-black">
              Total:
            </span>

            <span className="text-2xl font-bold text-yellow-600">
              ₦{finalTotal.toFixed(2)}
            </span>

          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default Checkout;

