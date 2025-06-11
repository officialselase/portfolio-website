import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";

const Shop = ({ setCurrentPage, currentPage, cart, setCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (currentPage === "shop") {
      window.scrollTo(0, 0);
    }
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [currentPage]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans antialiased">
      <PageHeader
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-row gap-4 justify-center mt-4">
          <a
            href="#support"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-3 py-2 bg-gray-100 rounded-md text-inherit no-underline transition-colors duration-200 hover:bg-gray-200"
          >
            <p className="text-lg font-medium text-gray-900 flex items-center justify-end">
              Support me directly
              <span className="ml-2">→</span>
            </p>
          </a>
          <a
            href="#register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-3 py-2 bg-gray-100 rounded-md text-inherit no-underline transition-colors duration-200 hover:bg-gray-200"
          >
            <p className="text-lg font-medium text-gray-900 flex items-center justify-end">
              Register for a course
              <span className="ml-2">→</span>
            </p>
          </a>
        </div>
        <div className="mt-16 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Shop My Products
          </h2>
          <p className="text-sm text-gray-700 mb-4">
            Items in cart: {cart.reduce((sum, item) => sum + item.quantity, 0)}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.length === 0 ? (
              <p className="text-gray-700">Loading products...</p>
            ) : (
              products.map((product) => (
                <div key={product.id} className="bg-white p-4 rounded-md">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-cover mb-4 rounded-sm"
                  />
                  <h3 className="text-xl font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-700 mt-1">
                    {product.description}
                  </p>
                  <p className="text-lg font-semibold text-gray-800 mt-2">
                    ${product.price.toFixed(2)}
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-4 px-4 py-2 bg-gray-900 text-white text-sm rounded-md border-none cursor-pointer transition-colors duration-200 hover:bg-gray-700"
                  >
                    Add to Cart
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
