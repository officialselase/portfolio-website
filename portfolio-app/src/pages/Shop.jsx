// src/pages/Shop.jsx
import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";

const Shop = ({
  setCurrentPage,
  currentPage,
  cart,
  setCart,
  currency,
  setCurrency,
  cartCount,
}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/products/", {
          credentials: "include",
        });
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    if (currentPage === "shop") {
      fetchProducts();
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === product.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gray-100 text-gray-900 py-10 px-4 sm:px-6 md:px-8 flex-grow">
        <PageHeader
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          cartCount={cartCount}
        />
        <div className="w-full max-w-screen-xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">Shop</h1>
          {products.length === 0 ? (
            <p className="text-center">No products available.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div key={index} className="border border-gray-300 p-4 rounded">
                  <h3 className="text-xl font-medium">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-yellow-600 font-bold">${product.price}</p>
                  {product.image_url && (
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-32 object-cover mt-2"
                    />
                  )}
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-2 bg-transparent text-yellow-600 font-medium hover:underline cursor-pointer outline-none"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
export default Shop;
