import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Work from "./pages/Work.jsx";
import ThoughtsPage from "./pages/ThoughtsPage.jsx";
import Shop from "./pages/Shop.jsx";
import Cart from "./pages/Cart.jsx";

const App = () => {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.substring(1);
    const validPages = [
      "home",
      "about",
      "projects",
      "work",
      "thoughts",
      "shop",
      "cart",
    ];
    return validPages.includes(hash) ? hash : "home";
  });
  const [cart, setCart] = useState([]);
  const [currency, setCurrency] = useState("GHC");

  useEffect(() => {
    window.location.hash = currentPage;
  }, [currentPage]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      const validPages = [
        "home",
        "about",
        "projects",
        "work",
        "thoughts",
        "shop",
        "cart",
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <Home setCurrentPage={setCurrentPage} currentPage={currentPage} />
        );
      case "about":
        return (
          <About setCurrentPage={setCurrentPage} currentPage={currentPage} />
        );
      case "projects":
        return (
          <Projects setCurrentPage={setCurrentPage} currentPage={currentPage} />
        );
      case "work":
        return (
          <Work setCurrentPage={setCurrentPage} currentPage={currentPage} />
        );
      case "thoughts":
        return (
          <ThoughtsPage
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        );
      case "shop":
        return (
          <Shop
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            cart={cart}
            setCart={setCart}
            currency={currency}
            setCurrency={setCurrency}
          />
        );
      case "cart":
        return (
          <Cart
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            cart={cart}
            setCart={setCart}
            currency={currency}
            setCurrency={setCurrency}
          />
        );
      default:
        return (
          <Home setCurrentPage={setCurrentPage} currentPage={currentPage} />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100 font-sans antialiased">
      {renderPage()}
      <footer className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 py-6 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} sels.officialgh. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
