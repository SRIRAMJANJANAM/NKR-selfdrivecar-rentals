import React from "react";

function Preloader() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600&display=swap');

          .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: linear-gradient(135deg, #0a1928 0%, #0f1f2f 50%, #1a2a3a 100%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            font-family: 'Poppins', sans-serif;
            color: #ffffff;
            text-align: center;
            overflow: hidden;
          }

          .preloader::before {
            content: '';
            position: absolute;
            width: 150%;
            height: 150%;
            background: radial-gradient(circle at 30% 50%, rgba(200, 170, 110, 0.08) 0%, transparent 50%),
                        radial-gradient(circle at 70% 50%, rgba(180, 150, 100, 0.08) 0%, transparent 50%);
            animation: slowRotate 40s linear infinite;
          }

          @keyframes slowRotate {
            from { transform: rotate(0deg) scale(1); }
            to { transform: rotate(360deg) scale(1.1); }
          }

          .content-wrapper {
            position: relative;
            z-index: 2;
            animation: elegantFade 1.5s ease-out;
          }

          @keyframes elegantFade {
            from {
              opacity: 0;
              transform: translateY(20px) scale(0.98);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          /* Premium Animation Container */
          .premium-animation {
            position: relative;
            width: 380px;
            height: 200px;
            margin: 0 auto 2.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          /* Sophisticated Geometric Pattern */
          .geometric-bg {
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0.15;
          }

          .geo-shape {
            position: absolute;
            background: linear-gradient(135deg, #c8aa6e, #e5d1a3);
            clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          }

          .shape-1 {
            width: 180px;
            height: 180px;
            top: 10px;
            left: 100px;
            opacity: 0.1;
            animation: floatShape 8s ease-in-out infinite;
          }

          .shape-2 {
            width: 120px;
            height: 120px;
            top: 40px;
            left: 130px;
            opacity: 0.08;
            animation: floatShape 12s ease-in-out infinite reverse;
          }

          @keyframes floatShape {
            0%, 100% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.1); }
          }

          /* Elegant Rotating Rings */
          .rings {
            position: absolute;
            width: 160px;
            height: 160px;
          }

          .ring {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 1.5px solid transparent;
            border-radius: 50%;
            animation: elegantSpin 3s cubic-bezier(0.65, 0, 0.35, 1) infinite;
          }

          .ring-1 {
            border-top-color: #c8aa6e;
            border-right-color: #e5d1a3;
            animation-duration: 3s;
          }

          .ring-2 {
            border-bottom-color: #b89a66;
            border-left-color: #d4bc8c;
            width: 130px;
            height: 130px;
            top: 15px;
            left: 15px;
            animation-duration: 4s;
            animation-direction: reverse;
          }

          .ring-3 {
            border: 1px solid rgba(200, 170, 110, 0.3);
            width: 100px;
            height: 100px;
            top: 30px;
            left: 30px;
            animation: pulseRing 3s ease-in-out infinite;
          }

          @keyframes elegantSpin {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.05); }
            100% { transform: rotate(360deg) scale(1); }
          }

          @keyframes pulseRing {
            0%, 100% { 
              transform: scale(1);
              border-color: rgba(200, 170, 110, 0.3);
            }
            50% { 
              transform: scale(1.1);
              border-color: rgba(200, 170, 110, 0.6);
            }
          }

          /* Luxurious Core */
          .core {
            position: absolute;
            width: 70px;
            height: 70px;
            background: linear-gradient(135deg, #c8aa6e, #e5d1a3);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 0 40px rgba(200, 170, 110, 0.4);
            animation: elegantPulse 3s ease-in-out infinite;
          }

          .core-inner {
            width: 35px;
            height: 35px;
            background: #0a1928;
            border-radius: 50%;
            position: relative;
          }

          .core-inner::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 15px;
            height: 15px;
            background: linear-gradient(135deg, #c8aa6e, #e5d1a3);
            border-radius: 50%;
          }

          @keyframes elegantPulse {
            0%, 100% { 
              transform: scale(1);
              box-shadow: 0 0 40px rgba(200, 170, 110, 0.3);
            }
            50% { 
              transform: scale(1.08);
              box-shadow: 0 0 60px rgba(200, 170, 110, 0.6);
            }
          }

          /* Floating Gold Dust */
          .dust-particles {
            position: absolute;
            width: 100%;
            height: 100%;
          }

          .dust {
            position: absolute;
            width: 3px;
            height: 3px;
            background: #c8aa6e;
            border-radius: 50%;
            opacity: 0.3;
            filter: blur(1px);
            animation: floatDust 4s ease-in-out infinite;
          }

          .dust-1 { top: 15%; left: 20%; animation-delay: 0s; }
          .dust-2 { top: 75%; right: 15%; animation-delay: 0.8s; }
          .dust-3 { bottom: 10%; left: 30%; animation-delay: 1.5s; }
          .dust-4 { top: 45%; right: 25%; animation-delay: 2.2s; }
          .dust-5 { bottom: 35%; left: 45%; animation-delay: 2.9s; }
          .dust-6 { top: 85%; right: 35%; animation-delay: 3.6s; }

          @keyframes floatDust {
            0%, 100% { 
              transform: translateY(0) scale(1);
              opacity: 0.2;
            }
            50% { 
              transform: translateY(-30px) scale(1.8);
              opacity: 0.6;
              background: #e5d1a3;
            }
          }

          /* Sophisticated Progress Bar */
          .loading-bar-container {
            width: 380px;
            margin: 2.5rem auto 1.5rem;
            position: relative;
          }

          .loading-bar {
            width: 100%;
            height: 1px;
            background: rgba(255, 255, 255, 0.1);
            position: relative;
            overflow: hidden;
          }

          .loading-progress {
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
              transparent 0%, 
              #c8aa6e 30%,
              #e5d1a3 50%,
              #c8aa6e 70%,
              transparent 100%
            );
            animation: premiumLoading 2s ease-in-out infinite;
          }

          .loading-bar-glow {
            position: absolute;
            top: -4px;
            left: 0;
            width: 100%;
            height: 9px;
            background: radial-gradient(circle at center, rgba(200, 170, 110, 0.3) 0%, transparent 70%);
            filter: blur(4px);
            animation: glowMove 2s ease-in-out infinite;
          }

          @keyframes premiumLoading {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          @keyframes glowMove {
            0% { left: -100%; opacity: 0; }
            50% { opacity: 0.5; }
            100% { left: 100%; opacity: 0; }
          }

          /* Premium Typography */
          .brand-name {
            font-family: 'Playfair Display', serif;
            font-size: clamp(3.5rem, 10vw, 6rem);
            font-weight: 800;
            letter-spacing: 8px;
            margin-bottom: 0.5rem;
            color: #ffffff;
            text-shadow: 0 0 20px rgba(200, 170, 110, 0.3);
            position: relative;
          }

          .brand-name span {
            background: linear-gradient(135deg, #c8aa6e, #e5d1a3);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            position: relative;
          }

          .brand-name::before {
            content: '';
            position: absolute;
            width: 60px;
            height: 2px;
            background: linear-gradient(90deg, #c8aa6e, transparent);
            top: 50%;
            left: -40px;
            transform: translateY(-50%);
          }

          .brand-name::after {
            content: '';
            position: absolute;
            width: 60px;
            height: 2px;
            background: linear-gradient(90deg, transparent, #c8aa6e);
            top: 50%;
            right: -40px;
            transform: translateY(-50%);
          }

          .tagline {
            font-family: 'Playfair Display', serif;
            font-size: clamp(1rem, 3vw, 1.2rem);
            font-weight: 400;
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 1rem;
            letter-spacing: 12px;
            text-transform: uppercase;
          }

          .location {
            font-size: clamp(1.3rem, 5vw, 2rem);
            font-weight: 300;
            color: #c8aa6e;
            margin-bottom: 2.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
          }

          .location-icon {
            width: 30px;
            height: 30px;
            position: relative;
          }

          .location-icon::before,
          .location-icon::after {
            content: '';
            position: absolute;
            background: #c8aa6e;
          }

          .location-icon::before {
            width: 2px;
            height: 30px;
            left: 14px;
            transform: rotate(45deg);
          }

          .location-icon::after {
            width: 2px;
            height: 30px;
            left: 14px;
            transform: rotate(-45deg);
          }

          /* Elegant Features */
          .features {
            display: flex;
            gap: 3rem;
            justify-content: center;
            margin: 2.5rem 0;
            flex-wrap: wrap;
          }

          .feature-item {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.8);
            text-transform: uppercase;
            letter-spacing: 2px;
            position: relative;
          }

          .feature-dot {
            width: 6px;
            height: 6px;
            background: #c8aa6e;
            border-radius: 50%;
            box-shadow: 0 0 15px rgba(200, 170, 110, 0.5);
          }

          .feature-item::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 1px;
            background: linear-gradient(90deg, #c8aa6e, transparent);
            transition: width 0.3s ease;
          }

          .feature-item:hover::after {
            width: 100%;
          }

          /* Loading Text */
          .loading-text {
            font-size: 1rem;
            color: rgba(255, 255, 255, 0.6);
            letter-spacing: 3px;
            text-transform: uppercase;
            margin-top: 1rem;
            font-weight: 300;
          }

          .loading-text span {
            color: #c8aa6e;
            font-weight: 400;
            position: relative;
          }

          .loading-text span::before {
            content: '⏤';
            margin-right: 8px;
            opacity: 0.5;
          }

          .loading-text span::after {
            content: '⏤';
            margin-left: 8px;
            opacity: 0.5;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .premium-animation {
              transform: scale(0.75);
            }
            
            .features {
              gap: 1.5rem;
            }
            
            .loading-bar-container {
              width: 280px;
            }

            .brand-name::before,
            .brand-name::after {
              width: 30px;
            }
          }

          /* Additional Elegant Touches */
          .elegant-line {
            position: absolute;
            width: 1px;
            height: 100px;
            background: linear-gradient(to bottom, transparent, #c8aa6e, transparent);
            left: 20%;
            top: 20%;
            opacity: 0.2;
            animation: lineGlow 3s ease-in-out infinite;
          }

          .elegant-line-2 {
            right: 20%;
            left: auto;
            animation-delay: 1.5s;
          }

          @keyframes lineGlow {
            0%, 100% { opacity: 0.2; transform: scaleY(1); }
            50% { opacity: 0.5; transform: scaleY(1.5); }
          }
        `}
      </style>

      <div className="preloader">
        <div className="elegant-line"></div>
        <div className="elegant-line elegant-line-2"></div>
        
        <div className="content-wrapper">
          <div className="premium-animation">
            <div className="geometric-bg">
              <div className="geo-shape shape-1"></div>
              <div className="geo-shape shape-2"></div>
            </div>
            
            <div className="rings">
              <div className="ring ring-1"></div>
              <div className="ring ring-2"></div>
              <div className="ring ring-3"></div>
            </div>
            
            <div className="core">
              <div className="core-inner"></div>
            </div>

            <div className="dust-particles">
              <div className="dust dust-1"></div>
              <div className="dust dust-2"></div>
              <div className="dust dust-3"></div>
              <div className="dust dust-4"></div>
              <div className="dust dust-5"></div>
              <div className="dust dust-6"></div>
            </div>
          </div>

          <div className="brand-name">
            <span>NKR</span>
          </div>
          
          <div className="tagline">
            SELF DRIVE
          </div>

          <div className="location">
            <div className="location-icon"></div>
            <span>TIRUPATI</span>
            <div className="location-icon"></div>
          </div>

          <div className="features">
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Premium Fleet</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>24/7 Concierge</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Complimentary Pickup</span>
            </div>
          </div>

          <div className="loading-bar-container">
            <div className="loading-bar">
              <div className="loading-progress"></div>
            </div>
            <div className="loading-bar-glow"></div>
          </div>
          
          <div className="loading-text">
            <span>Experience Luxury</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preloader;