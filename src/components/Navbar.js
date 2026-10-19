
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const phone = "+918660014029";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Book a Car", path: "/book" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-padding-top: 110px;
        }

        body {
          margin: 0;
        }

        .nkr-navbar {
          width: 100%;
          min-height: 105px;
          padding: 10px clamp(16px, 5vw, 80px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          background: linear-gradient(
            110deg,
            #050505,
            #171717,
            #050505
          );
          border-bottom: 3px solid #ffc629;

          /* Fixed navbar */
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9999;

          font-family: Arial, Helvetica, sans-serif;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.22);
        }

        /* Reserve space for the fixed navbar */
        .nkr-navbar-spacer {
          width: 100%;
          height: 105px;
          flex-shrink: 0;
        }

        .nkr-navbar a {
          text-decoration: none;
        }

        .nkr-navbar-brand {
          display: flex;
          align-items: center;
          gap: 15px;
          flex-shrink: 0;
        }

        .nkr-navbar-logo {
          width: 100px;
          height: 100px;
          border: 3px solid #ffc629;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding-bottom: 12px;
          overflow: hidden;
          background:
            linear-gradient(
              to top,
              #050505 0%,
              #050505e8 27%,
              transparent 70%
            ),
            url("/logo.png") center / cover no-repeat,
            #111;
          box-shadow: 0 0 12px #ffc62935;
          color: #ffc629;
        }

        .nkr-navbar-logo strong {
          font-size: 25px;
          line-height: 1;
          font-weight: 1000;
          font-style: italic;
        }

        .nkr-navbar-logo span {
          font-size: 8px;
          font-weight: 900;
          color: #fff;
          letter-spacing: 1px;
          margin-top: 3px;
        }

        .nkr-navbar-wordmark {
          white-space: nowrap;
          line-height: 0.95;
        }

        .nkr-navbar-wordmark strong {
          display: block;
          color: #ffc629;
          font-size: clamp(30px, 3vw, 50px);
          font-weight: 1000;
          font-style: italic;
          letter-spacing: -2px;
        }

        .nkr-navbar-wordmark span {
          display: block;
          margin-top: 6px;
          color: #fff;
          font-size: clamp(13px, 1.4vw, 22px);
          font-weight: 900;
          letter-spacing: 2px;
        }

        .nkr-navbar-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(22px, 4vw, 65px);
        }

        .nkr-navbar-links > a {
          position: relative;
          padding: 15px 0;
          color: #f5f5f5;
          font-size: 17px;
          font-weight: 700;
          white-space: nowrap;
          transition: color 0.2s ease;
        }

        .nkr-navbar-links > a:hover,
        .nkr-navbar-links > a.active {
          color: #ffcf36;
        }

        .nkr-navbar-links > a.active::after,
        .nkr-navbar-links > a:hover::after {
          content: "";
          position: absolute;
          bottom: 3px;
          left: 0;
          width: 100%;
          height: 3px;
          background: #ffc629;
        }

        .nkr-navbar-call {
          min-height: 54px;
          padding: 14px 25px;
          border-radius: 22px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          background: linear-gradient(
            180deg,
            #ffdc53,
            #e8a800
          );
          border: 1px solid #ffdc53;
          color: #080808;
          font-size: 18px;
          font-weight: 900;
          white-space: nowrap;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .nkr-navbar-call:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px #ffc62935;
        }

        .nkr-navbar-call svg {
          font-size: 22px;
        }

        .nkr-navbar-mobile-call {
          display: none !important;
        }

        .nkr-navbar-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          padding: 12px;
          background: #ffc629;
          color: #111;
          border: none;
          border-radius: 9px;
          font-size: 22px;
          cursor: pointer;
          flex-shrink: 0;
        }

        .nkr-navbar-toggle:focus-visible,
        .nkr-navbar a:focus-visible {
          outline: 2px solid #ffc629;
          outline-offset: 4px;
        }

        @media (max-width: 1150px) {
          .nkr-navbar {
            gap: 15px;
            padding-inline: 22px;
          }

          .nkr-navbar-logo {
            width: 75px;
            height: 75px;
          }

          .nkr-navbar-links {
            gap: 22px;
          }

          .nkr-navbar-links > a {
            font-size: 15px;
          }

          .nkr-navbar-call {
            padding: 13px 16px;
            font-size: 15px;
          }

          .nkr-navbar-call svg {
            font-size: 18px;
          }
        }

        @media (max-width: 760px) {
          .nkr-navbar {
            min-height: 80px;
            padding: 9px 15px;
            gap: 10px;
          }

          .nkr-navbar-spacer {
            height: 80px;
          }

          html {
            scroll-padding-top: 85px;
          }

          .nkr-navbar-brand {
            gap: 9px;
          }

          .nkr-navbar-logo {
            width: 58px;
            height: 58px;
            border-width: 2px;
            padding-bottom: 6px;
          }

          .nkr-navbar-logo strong {
            font-size: 17px;
          }

          .nkr-navbar-logo span {
            font-size: 6px;
            letter-spacing: 0.5px;
          }

          .nkr-navbar-wordmark strong {
            font-size: clamp(23px, 5.8vw, 34px);
            letter-spacing: -1px;
          }

          .nkr-navbar-wordmark span {
            font-size: clamp(9px, 2.4vw, 12px);
            letter-spacing: 1px;
            margin-top: 4px;
          }

          .nkr-navbar > .nkr-navbar-call {
            display: none;
          }

          .nkr-navbar-toggle {
            display: inline-flex;
          }

          .nkr-navbar-links {
            display: none;
            position: absolute;
            top: calc(100% + 3px);
            left: 0;
            right: 0;
            padding: 12px 20px 20px;
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            background: #080808;
            border-bottom: 3px solid #ffc629;
            box-shadow: 0 12px 20px #0005;
            max-height: calc(100dvh - 83px);
            overflow-y: auto;
          }

          .nkr-navbar-links.nkr-navbar-open {
            display: flex;
          }

          .nkr-navbar-links > a {
            padding: 15px 10px;
            font-size: 17px;
            border-bottom: 1px solid #ffffff18;
          }

          .nkr-navbar-links > a.active::after,
          .nkr-navbar-links > a:hover::after {
            left: 0;
            top: 20%;
            bottom: auto;
            width: 4px;
            height: 60%;
          }

          .nkr-navbar-links > .nkr-navbar-mobile-call {
            display: flex !important;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-top: 15px;
            padding: 15px;
            border-radius: 12px;
            border: none;
            background: linear-gradient(
              180deg,
              #ffdc53,
              #e8a800
            );
            color: #111;
            font-weight: 900;
          }

          .nkr-navbar-mobile-call svg {
            font-size: 19px;
          }
        }

        @media (max-width: 360px) {
          .nkr-navbar {
            padding-inline: 9px;
          }

          .nkr-navbar-logo {
            width: 46px;
            height: 46px;
          }

          .nkr-navbar-logo strong {
            font-size: 14px;
          }

          .nkr-navbar-wordmark strong {
            font-size: 21px;
          }

          .nkr-navbar-wordmark span {
            font-size: 8px;
          }

          .nkr-navbar-toggle {
            padding: 9px;
            font-size: 19px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .nkr-navbar *,
          .nkr-navbar *::before,
          .nkr-navbar *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>

      <header className="nkr-navbar">
        <Link
          to="/"
          className="nkr-navbar-brand"
          onClick={() => setMenuOpen(false)}
          aria-label="NKR Car Rentals home"
        >
          <div className="nkr-navbar-logo">
            <strong>NKR</strong>
            <span>CAR RENTALS</span>
          </div>

          <div className="nkr-navbar-wordmark">
            <strong>NKR</strong>
            <span>CAR RENTALS</span>
          </div>
        </Link>

        <nav
          id="nkr-navigation"
          className={`nkr-navbar-links ${
            menuOpen ? "nkr-navbar-open" : ""
          }`}
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              {item.name}
            </NavLink>
          ))}

          <a
            className="nkr-navbar-mobile-call"
            href={`tel:${phone}`}
          >
            <FaPhoneAlt aria-hidden="true" />
            +91 86600 14029
          </a>
        </nav>

        <a
          className="nkr-navbar-call"
          href={`tel:${phone}`}
          aria-label="Call NKR Car Rentals"
        >
          <FaPhoneAlt aria-hidden="true" />
          <span>+91 86600 14029</span>
        </a>

        <button
          type="button"
          className="nkr-navbar-toggle"
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
          aria-controls="nkr-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* Keeps page content below the fixed navbar */}
      <div
        className="nkr-navbar-spacer"
        aria-hidden="true"
      />
    </>
  );
}
