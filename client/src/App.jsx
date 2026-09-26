import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CartProvider from './context/CartContext';
import ProductProvider from './context/ProductContext';
import WishlistProvider from './context/WishlistContext';
import NavbarNew from './components/NavbarNew';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import Checkout from './pages/Checkout';
import PaymentSuccess from './pages/PaymentSuccess';
import About from './pages/About';

// Scroll to the top whenever the user changes pages
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Main App Component - Sets up routing and global context providers
function App() {
  return (
    <Router>
      <ScrollToTop />

      <CartProvider>
        <ProductProvider>
          <WishlistProvider>
            <NavbarNew />

            <main className="pt-20 min-h-screen bg-gray-50">
              <Routes>
                {/* Home page route */}
                <Route path="/" element={<Home />} />

                {/* Products listing page */}
                <Route path="/products" element={<Products />} />

                {/* Single product details page */}
                <Route path="/product/:id" element={<ProductDetails />} />

                {/* Shopping cart page */}
                <Route path="/cart" element={<CartPage />} />

                {/* Wishlist page */}
                <Route path="/wishlist" element={<WishlistPage />} />

                {/* Checkout page */}
                <Route path="/checkout" element={<Checkout />} />

                {/* Paystack payment success page */}
                <Route path="/payment-success" element={<PaymentSuccess />} />

                {/* New Arrivals page */}
                <Route path="/new-arrivals" element={<Products filter="new" />} />

                {/* Sale products page */}
                <Route path="/sale" element={<Products filter="sale" />} />

                {/* About Us page */}
                <Route path="/about" element={<About />} />
              </Routes>
            </main>

            <Footer />
          </WishlistProvider>
        </ProductProvider>
      </CartProvider>
    </Router>
  );
}

export default App;

