import React, { useEffect } from "react";
import PageHeader from "../components/PageHeader";

const Cart = ({ setCurrentPage, currentPage, cart, setCart }) => {
  useEffect(() => {
    if (currentPage === "cart") {
      window.scrollTo(0, 0);
    }
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

  const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans antialiased">
      <PageHeader
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Cart</h2>
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
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2 py-1 bg-gray-100 text-gray-900 text-sm rounded-md border-none cursor-pointer hover:bg-gray-200"
                    >
                      -
                    </button>
                    <span className="mx-2 text-sm text-gray-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2 py-1 bg-gray-100 text-gray-900 text-sm rounded-md border-none cursor-pointer hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>
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
// This code defines a Cart component that displays the user's shopping cart.
