import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";

const Cart = ({ setCurrentPage, currentPage, cartCount }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/cart/");
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };
    if (currentPage === "cart") {
      fetchCart();
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gray-100 text-gray-900 py-10 px-4 sm:px-6 md:px-8 flex-grow">
        <PageHeader setCurrentPage={setCurrentPage} currentPage={currentPage} />
        <div className="w-full max-w-screen-xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">Your Cart</h1>
          {cartItems.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
          ) : (
            <div className="flex flex-col space-y-4">
              {cartItems.map((item, index) => (
                <div key={index} className="border-b border-gray-300 pb-4">
                  <p>
                    {item.name} - ${item.price} x {item.quantity}
                  </p>
                </div>
              ))}
            </div>
          )}
          <button
            onClick={() => setCurrentPage("shop")}
            className="mt-6 bg-transparent text-yellow-600 font-medium hover:underline cursor-pointer outline-none"
          >
            Browse All Products →
          </button>
        </div>
      </section>
    </div>
  );
};
export default Cart;
