import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";

const Cart = ({
  setCurrentPage,
  currentPage,
  cart,
  setCart,
  currency,
  setCurrency,
}) => {
  const [rates, setRates] = useState({ GHC: 1 });

  useEffect(() => {
    if (currentPage === "cart") {
      window.scrollTo(0, 0);
    }
    fetch("https://api.exchangerate-api.com/v4/latest/GHS")
      .then((response) => response.json())
      .then((data) => setRates(data.rates))
      .catch((error) => console.error("Error fetching rates:", error));
  }, [currentPage]);

  const updateQuantity = (itemId, delta) => {
    setCart(
      cart.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const formatPrice = (price) => {
    const convertedPrice = price * (rates[currency] || 1);
    return new Intl.NumberFormat("en-GH", {
      style: "currency",
      currency: currency === "GHC" ? "GHS" : currency,
    }).format(convertedPrice);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans antialiased">
      <PageHeader
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Cart</h2>
        <div className="flex justify-end mb-4">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="px-2 py-1 bg-gray-100 text-gray-900 text-sm rounded-md border-none cursor-pointer"
          >
            <option value="GHC">GHC (₵)</option>
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
          </select>
        </div>
        {cart.length === 0 ? (
          <p className="text-gray-700">Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-md mb-4 border border-gray-200 flex items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-sm mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {formatPrice(item.price)}
                  </p>
                  <div className="flex items-center mt-2 space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2 py-1 bg-gray-100 text-gray-900 text-sm rounded-md border-none cursor-pointer hover:bg-gray-200"
                    >
                      -
                    </button>
                    <span className="text-sm text-gray-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2 py-1 bg-gray-100 text-gray-900 text-sm rounded-md border-none cursor-pointer hover:bg-gray-200"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="px-2 py-1 bg-gray-100 text-gray-900 text-sm rounded-md border-none cursor-pointer hover:bg-gray-200"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <p className="text-lg font-semibold text-gray-900 mt-4">
              Total: {formatPrice(total)}
            </p>
            <button className="mt-4 px-4 py-2 bg-gray-900 text-white text-sm rounded-md border-none cursor-pointer transition-colors duration-200 hover:bg-gray-700">
              Proceed to Checkout
            </button>
          </div>
        )}
        {/* Browse All Products Button */}
        <button
          onClick={() => setCurrentPage("shop")}
          className="mt-6 bg-transparent text-yellow-600 font-medium hover:underline cursor-pointer outline-none"
        >
          Browse All Products →
        </button>
      </div>
    </div>
  );
};

export default Cart;
