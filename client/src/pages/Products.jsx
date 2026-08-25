
import React, { useContext, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

const Products = ({ filter = null }) => {
  const { products } = useContext(ProductContext);

  const [searchParams] = useSearchParams();

  const categoryFromURL = searchParams.get('category');

  const [activeCategory, setActiveCategory] = useState(
    categoryFromURL
      ? categoryFromURL.charAt(0).toUpperCase() + categoryFromURL.slice(1)
      : 'All'
  );

  // Filter products
  const getFilteredProducts = () => {
    // New products
    if (filter === 'new') {
      return products.filter((product) => product.isNew);
    }

    // Sale products
    if (filter === 'sale') {
      return products.filter(
        (product) => product.isSale && product.discount > 0
      );
    }

    // If there is a category in the URL
    if (categoryFromURL) {
      return products.filter((product) => {
        if (categoryFromURL === 'bottoms') {
          return (
            product.category === 'skirts' ||
            product.category === 'trousers' ||
            product.category === 'shorts' ||
            product.category === 'bottoms'
          );
        }

        return product.category === categoryFromURL;
      });
    }

    // All products
    return products;
  };

  const displayProducts = getFilteredProducts();

  // Keep the button selected when navbar changes category
  useEffect(() => {
    if (categoryFromURL) {
      setActiveCategory(
        categoryFromURL.charAt(0).toUpperCase() +
          categoryFromURL.slice(1)
      );
    } else {
      setActiveCategory('All');
    }
  }, [categoryFromURL]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);

    if (category === 'All') {
      window.history.pushState({}, '', '/products');
      window.dispatchEvent(new PopStateEvent('popstate'));
    } else {
      const categoryValue = category.toLowerCase();

      window.history.pushState(
        {},
        '',
        `/products?category=${categoryValue}`
      );

      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const categories = [
    'All',
    'Dresses',
    'Tops',
    'Bottoms',
    'Accessories',
  ];

  return (
   <div className="min-h-screen bg-[#F7F5F0]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"></div>

      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-black">
          {filter === 'new'
            ? 'NEW ARRIVALS'
            : filter === 'sale'
            ? 'SALE'
            : activeCategory === 'All'
            ? 'SHOP'
            : activeCategory.toUpperCase()}
        </h1>

        <p className="text-gray-600">
          {displayProducts.length} Products Available
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-4 mb-12 justify-center">

        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCategoryChange(category)}
            className={`px-6 py-2 rounded-lg font-bold transition ${
              activeCategory === category
                ? 'bg-yellow-600 text-black'
                : 'bg-gray-200 text-black hover:bg-gray-300'
            }`}
          >
            {category}
          </motion.button>
        ))}

      </div>

      {/* Products Grid */}
      {displayProducts.length > 0 ? (

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >

          {displayProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}

        </motion.div>

      ) : (

        <div className="text-center py-12">
          <p className="text-xl text-gray-600">
            No products found
          </p>
        </div>

      )}

    </div>
    
  );
};

export default Products;

