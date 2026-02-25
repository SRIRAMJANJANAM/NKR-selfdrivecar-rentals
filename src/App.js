import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet"; // Add this import

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Book from "./components/Book";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <Router>
      {/* Optional: Add global Helmet for fallback SEO */}
      <Helmet>
        <html lang="en" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nkrselfdrivecarrentals.in/" />
      </Helmet>
      
      <ScrollToTop />

      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
          
          {/* Optional: Add a 404 redirect */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>

      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </Router>
  );
}

export default App;