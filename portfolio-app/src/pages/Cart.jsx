import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";

const Cart = ({
  setCurrentPage,
  currentPage,
  cart,
  setCart,
  currency,
  setCurrency,
  cartCount,
}) => {
  const [loading, setLoading] = useState(true);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    setLoading(false);
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const response = await fetch(
      "https://sels-portfolio-api.vercel.app/api/create-order/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          items: cart.map((item) => ({ name: item.name, price: item.price })),
          total_amount: total,
        }),
      }
    );
    const data = await response.json();
    if (response.ok) {
      setOrderId(data.order_id);
      setShowCheckout(false);
      setShowPayment(true);
    } else {
      alert(data.error);
    }
  };

  const PaymentPopup = () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Payment Instructions</h2>
          <p className="mb-2">
            Please send <span className="font-semibold">${total}</span> to{" "}
            <span className="font-semibold">0555964195</span>.
          </p>
          <p className="mb-2">
            <span className="font-semibold">Important:</span> Include your order
            ID <span className="font-semibold">{orderId || "MYSHOP-ORD-0001"}</span> in the
            reference.
          </p>
          <p className="mb-4">
            Once payment is complete, we will process your order. Contact{" "}
            <span className="font-semibold">0555964195</span> for issues.
          </p>
          <button
            onClick={() => setShowPayment(false)}
            className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  const CheckoutForm = () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Checkout</h2>
          <form onSubmit={handleOrderSubmit} className="space-y-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full p-2 border rounded"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              required
              className="w-full p-2 border rounded"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
              className="w-full p-2 border rounded"
            />
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Shipping Address"
              required
              className="w-full p-2 border rounded"
            />
            <h3 className="text-xl font-semibold mt-4">Order Summary</h3>
            {cart.map((item, index) => (
              <div key={index} className="mb-2">
                {item.name} - ${item.price}
              </div>
            ))}
            <div className="text-lg font-semibold">Total: ${total}</div>
            <div className="flex space-x-4 mt-4">
              <button
                type="submit"
                className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
              >
                Place Order
              </button>
              <button
                type="button"
                onClick={() => setShowCheckout(false)}
                className="text-gray-600 hover:underline"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">Your Cart</h1>
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : cart.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
          ) : (
            <div className="flex flex-col space-y-4">
              {cart.map((item, index) => (
                <div key={index} className="border-b border-gray-300 pb-4">
                  <p>
                    {item.name} - ${item.price}
                  </p>
                </div>
              ))}
              <a
                onClick={() => setShowCheckout(true)}
                className="mt-6 bg-transparent text-yellow-600 font-medium hover:underline cursor-pointer outline-none"
                style={{ textDecoration: "none" }} // Ensures no underline by default, hover adds it
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === "Enter" && setShowCheckout(true)}
                disabled={cart.length === 0}
              >
                Checkout
              </a>
            </div>
          )}
          <a
            onClick={() => setCurrentPage("shop")}
            className="mt-6 bg-transparent text-yellow-600 font-medium hover:underline cursor-pointer outline-none"
            style={{ textDecoration: "none" }}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === "Enter" && setCurrentPage("shop")}
          >
            Browse All Products →
          </a>
          {showCheckout && <CheckoutForm />}
          {showPayment && <PaymentPopup />}
        </div>
      </section>
    </div>
  );
};

export default Cart;