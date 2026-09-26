import React, { createContext, useState, useEffect } from 'react';
import { Products } from '../data/products.js';

// Create Product Context for managing products globally
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // Backend API URL
  const API_URL = 'https://ginas-luxury.onrender.com/api/products?limit=100';

  // State to store all products
  // Starts with local products so the website doesn't break while the API loads
  const [products, setProducts] = useState(Products);

  // State for filtered/searched products
  const [filteredProducts, setFilteredProducts] = useState(Products);

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();

        // Match backend products with the existing local products
        // so we can keep using your existing imported images.
        const apiProducts = data.products.map((apiProduct) => {
          const localProduct = Products.find(
            (product) => product.name === apiProduct.name
          );

          return {
            ...apiProduct,

            // Use MongoDB ID for backend-connected products
            id: apiProduct._id,

            // Keep your existing local image
            image: localProduct?.image || apiProduct.image,
          };
        });

        // Update the frontend with products from MongoDB
        setProducts(apiProducts);
        setFilteredProducts(apiProducts);

        console.log('Products successfully loaded from backend:', apiProducts);
      } catch (error) {
        console.error('Error fetching products from backend:', error);

        // If the API fails, keep using the existing local products
        // so your website does not go blank.
        setProducts(Products);
        setFilteredProducts(Products);
      }
    };

    fetchProducts();
  }, []);

  // Filter products by category
  const filterByCategory = (category) => {
    setSelectedCategory(category);

    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((prod) => prod.category === category)
      );
    }
  };

  // Search products by name or category
  const searchProducts = (searchTerm) => {
    if (!searchTerm.trim()) {
      filterByCategory(selectedCategory);
      return;
    }

    const searched = products.filter(
      (prod) =>
        (
          prod.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          prod.category.toLowerCase().includes(searchTerm.toLowerCase())
        ) &&
        (selectedCategory === 'All' ||
          prod.category === selectedCategory)
    );

    setFilteredProducts(searched);
  };

  // Get new arrivals (products marked as new)
  const getNewArrivals = () => {
    return products.filter((prod) => prod.isNew).slice(0, 8);
  };

  // Get best sellers (products with high ratings)
  const getBestSellers = () => {
    return products.filter((prod) => prod.rating >= 4.8).slice(0, 8);
  };

  // Get sale products (products with discount)
  const getSaleProducts = () => {
    return products
      .filter((prod) => prod.isSale && prod.discount > 0)
      .slice(0, 8);
  };

  // Get related products for product details page
  const getRelatedProducts = (productId, category) => {
    return products
      .filter(
        (prod) =>
          prod.category === category &&
          prod.id !== productId
      )
      .slice(0, 4);
  };

  const value = {
    products,
    filteredProducts,
    selectedCategory,
    filterByCategory,
    searchProducts,
    getNewArrivals,
    getBestSellers,
    getSaleProducts,
    getRelatedProducts,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

