import React, { useEffect } from "react";
import PageHeader from "../components/PageHeader";

const Cart = ({ setCurrentPage, currentPage, cart, setCart }) => {
  useEffect(() => {
    if (currentPage === "cart") {
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans antialiased">
      <PageHeader
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        cartCount={cart.length}
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-700">Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-md mb-4 border border-gray-200"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-700">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            ))}
            <p className="text-lg font-semibold text-gray-900 mt-4">
              Total: ${total}
            </p>
            <button className="mt-4 px-4 py-2 bg-gray-900 text-white text-sm rounded-md border-none cursor-pointer transition-colors duration-200 hover:bg-gray-700">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
