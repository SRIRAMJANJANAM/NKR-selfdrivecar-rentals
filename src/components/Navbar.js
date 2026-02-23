import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaHome, FaInfoCircle, FaWrench, FaCalendarCheck, FaEnvelope, FaCar } from "react-icons/fa";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = navbarStyles;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <span className="logo-badge">
            <FaCar className="logo-icon" />
            <span className="logo-text">NKR self drive cars rentals</span>
          </span>
        </Link>
      </div>

      <button
        className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
          <FaHome className="nav-icon" /> Home
        </Link>
        <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
          <FaInfoCircle className="nav-icon" /> About
        </Link>

        <Link to="/book" onClick={() => setIsMobileMenuOpen(false)}>
          <FaCalendarCheck className="nav-icon" /> Book
        </Link>
        <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
          <FaEnvelope className="nav-icon" /> Contact
        </Link>
      </div>
    </nav>
  );
}

// Monochromatic blue theme with enhanced animations – solid colors only
const navbarStyles = `
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 2rem;
    background-color: #0b1e33;
    box-shadow: 0 8px 20px rgba(0, 20, 40, 0.4);
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 3px solid #1e4a76;
    animation: slideInDown 0.5s ease-out;
  }

  @keyframes slideInDown {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* Logo with enhanced entrance and hover */
  .navbar-logo a {
    text-decoration: none;
    display: block;
  }

  .logo-badge {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background-color: #1a2f45;
    padding: 0.5rem 1.5rem 0.5rem 1rem;
    border-radius: 50px;
    border-left: 4px solid #1e4a76;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    animation: fadeInLeft 0.6s ease-out;
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .logo-badge:hover {
    transform: translateY(-3px) scale(1.02);
    background-color: #1e3a5a;
    box-shadow: 0 8px 16px rgba(0, 40, 80, 0.5);
  }

  .logo-text {
    font-family: 'Segoe UI', 'Poppins', system-ui, sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    color: #ffffff;
    letter-spacing: -0.5px;
    text-transform: uppercase;
  }

  .logo-icon {
    font-size: 2rem;
    color: #4a9eff;
    filter: drop-shadow(0 2px 2px rgba(0,0,0,0.3));
    transition: transform 0.4s ease;
  }

  .logo-badge:hover .logo-icon {
    transform: rotate(5deg) scale(1.1);
  }

  /* Navigation links with staggered animation */
  .nav-links {
    display: flex;
    gap: 1.2rem;
  }

  .nav-links a {
    text-decoration: none;
    color: #e6f0ff;
    font-weight: 600;
    font-size: 1.1rem;
    padding: 0.5rem 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 30px;
    transition: all 0.25s ease;
    position: relative;
    opacity: 0;
    animation: fadeInUp 0.4s forwards;
    animation-delay: calc(0.1s * var(--order));
  }

  /* Assign order variables via style attribute – we'll use inline style for simplicity */
  .nav-links a:nth-child(1) { --order: 1; }
  .nav-links a:nth-child(2) { --order: 2; }
  .nav-links a:nth-child(3) { --order: 3; }
  .nav-links a:nth-child(4) { --order: 4; }
  .nav-links a:nth-child(5) { --order: 5; }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .nav-icon {
    font-size: 1.2rem;
    color: #4a9eff;
    transition: all 0.3s ease;
  }

  /* Hover effect with icon bounce */
  .nav-links a:hover {
    background-color: #1e4a76;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 30, 60, 0.4);
  }

  .nav-links a:hover .nav-icon {
    color: #ffffff;
    transform: rotate(5deg) scale(1.2);
  }

  /* Active link indicator with subtle pulse */
  .nav-links a.active {
    background-color: #1e4a76;
    color: #ffffff;
    animation: pulse 2s infinite;
  }
  .nav-links a.active .nav-icon {
    color: #ffffff;
  }

  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(30, 74, 118, 0.5); }
    70% { box-shadow: 0 0 0 6px rgba(30, 74, 118, 0); }
    100% { box-shadow: 0 0 0 0 rgba(30, 74, 118, 0); }
  }

  /* Hamburger with smoother morph */
  .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    background: transparent;
    border: none;
    padding: 0.5rem;
    z-index: 1001;
  }

  .hamburger span {
    width: 28px;
    height: 3px;
    background-color: #e6f0ff;
    margin: 3px 0;
    transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    border-radius: 2px;
  }

  .hamburger.open span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
    background-color: #4a9eff;
  }

  .hamburger.open span:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
  }

  .hamburger.open span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
    background-color: #4a9eff;
  }

  /* Mobile menu with backdrop blur and enhanced slide */
  @media (max-width: 768px) {
    .nav-links {
      position: fixed;
      top: 0;
      right: -100%;
      height: 100vh;
      width: 280px;
      background-color: #122b44;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1.5rem;
      padding-left: 2rem;
      transition: right 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
      box-shadow: -5px 0 20px rgba(0, 0, 0, 0.5);
      border-left: 3px solid #1e4a76;
    }

    .nav-links.active {
      right: 0;
    }

    .nav-links a {
      font-size: 1.3rem;
      width: 100%;
      padding: 0.8rem 1rem;
      border-radius: 30px 0 0 30px;
      animation: none; /* disable entrance animation on mobile */
      opacity: 1;
    }

    .nav-links a:hover {
      background-color: #1e4a76;
      transform: translateX(5px);
    }

    .hamburger {
      display: flex;
    }
  }

  /* Small screens */
  @media (max-width: 480px) {
    .navbar {
      padding: 0.8rem 1rem;
    }
    .logo-text {
      font-size: 1.2rem;
    }
    .logo-icon {
      font-size: 1.6rem;
    }
    .logo-badge {
      padding: 0.4rem 1rem 0.4rem 0.8rem;
    }
  }
`;

export default Navbar;