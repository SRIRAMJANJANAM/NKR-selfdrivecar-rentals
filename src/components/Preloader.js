import React from "react";

function Preloader() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800&display=swap');

          .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: linear-gradient(135deg, #0a1a1f 0%, #1a2f35 50%, #0f2a2f 100%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            font-family: 'Montserrat', sans-serif;
            color: white;
            text-align: center;
            overflow: hidden;
          }

          .preloader::before {
            content: '';
            position: absolute;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle at center, rgba(255, 215, 0, 0.1) 0%, transparent 70%);
            animation: rotate 20s linear infinite;
          }

          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          .content-wrapper {
            position: relative;
            z-index: 2;
            animation: fadeInUp 1.2s ease-out;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .car-animation {
            position: relative;
            width: 300px;
            height: 120px;
            margin: 0 auto 2rem;
          }

          .car-body {
            position: relative;
            width: 260px;
            height: 60px;
            background: linear-gradient(145deg, #e63946, #c92a3a);
            border-radius: 60px 60px 20px 20px;
            margin: 0 auto;
            box-shadow: 0 20px 30px rgba(230, 57, 70, 0.3);
            animation: float 3s ease-in-out infinite;
          }

          .car-body::before {
            content: '';
            position: absolute;
            top: -25px;
            left: 40px;
            width: 100px;
            height: 35px;
            background: linear-gradient(145deg, #e63946, #c92a3a);
            border-radius: 40px 40px 0 0;
          }

          .car-window {
            position: absolute;
            top: -20px;
            left: 50px;
            width: 80px;
            height: 25px;
            background: linear-gradient(145deg, #a8d8ff, #7ab8ff);
            border-radius: 20px 20px 0 0;
            border: 2px solid rgba(255, 255, 255, 0.3);
          }

          .car-window::before {
            content: '';
            position: absolute;
            right: -30px;
            width: 35px;
            height: 25px;
            background: linear-gradient(145deg, #a8d8ff, #7ab8ff);
            border-radius: 20px 20px 0 0;
          }

          .car-wheel {
            position: absolute;
            bottom: -10px;
            width: 35px;
            height: 35px;
            background: #2b2b2b;
            border-radius: 50%;
            border: 5px solid #4a4a4a;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
            animation: roll 0.8s linear infinite;
          }

          .car-wheel::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 15px;
            height: 15px;
            background: #c0c0c0;
            border-radius: 50%;
            border: 2px solid #666;
          }

          .car-wheel.left {
            left: 35px;
          }

          .car-wheel.right {
            right: 35px;
          }

          @keyframes roll {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .road-lines {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 4px;
            background: repeating-linear-gradient(
              90deg,
              #ffd700 0px,
              #ffd700 40px,
              transparent 40px,
              transparent 80px
            );
            animation: moveRoad 1s linear infinite;
          }

          @keyframes moveRoad {
            from { background-position: 0 0; }
            to { background-position: 80px 0; }
          }

          .brand-name {
            font-size: clamp(2.5rem, 8vw, 5rem);
            font-weight: 800;
            letter-spacing: 4px;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            background: linear-gradient(135deg, #ffd700, #ffb347, #ffd700);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
          }

          .tagline {
            font-size: clamp(1rem, 4vw, 1.5rem);
            font-weight: 400;
            color: #b8e2e2;
            margin-bottom: 0.5rem;
            letter-spacing: 8px;
            text-transform: uppercase;
            opacity: 0.9;
          }

          .location {
            font-size: clamp(1.2rem, 5vw, 1.8rem);
            font-weight: 600;
            color: #ffd700;
            margin-bottom: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }

          .location-icon {
            width: 24px;
            height: 24px;
            background: #ffd700;
            clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
            animation: pulse 2s ease-in-out infinite;
          }

          .features {
            display: flex;
            gap: 2rem;
            justify-content: center;
            margin: 2rem 0;
            flex-wrap: wrap;
          }

          .feature-item {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.9rem;
            color: #b8e2e2;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .feature-dot {
            width: 8px;
            height: 8px;
            background: #ffd700;
            border-radius: 50%;
            box-shadow: 0 0 10px #ffd700;
          }

          .loading-bar {
            width: 300px;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            margin: 2rem auto 1rem;
            overflow: hidden;
          }

          .loading-progress {
            width: 60%;
            height: 100%;
            background: linear-gradient(90deg, #ffd700, #ffb347, #ffd700);
            border-radius: 4px;
            animation: loading 1.5s ease-in-out infinite;
          }

          @keyframes loading {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(300%); }
          }

          .loading-text {
            font-size: 0.9rem;
            color: #b8e2e2;
            letter-spacing: 2px;
            text-transform: uppercase;
          }

          .loading-text span {
            color: #ffd700;
            font-weight: 600;
          }

          @media (max-width: 768px) {
            .car-animation {
              transform: scale(0.8);
            }
            
            .features {
              gap: 1rem;
            }
          }
        `}
      </style>

      <div className="preloader">
        <div className="content-wrapper">
          <div className="car-animation">
            <div className="car-body">
              <div className="car-window"></div>
              <div className="car-wheel left"></div>
              <div className="car-wheel right"></div>
            </div>
            <div className="road-lines"></div>
          </div>

          <div className="brand-name">
            NKR
          </div>
          
          <div className="tagline">
            SELF DRIVE
          </div>

          <div className="location">
            <div className="location-icon"></div>
            <span>Tirupati</span>
            <div className="location-icon"></div>
          </div>

          <div className="features">
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Premium Fleet</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>24/7 Support</span>
            </div>
            <div className="feature-item">
              <div className="feature-dot"></div>
              <span>Free Pickup</span>
            </div>
          </div>

          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
          
          <div className="loading-text">
            <span>Shift</span> into gear...
          </div>
        </div>
      </div>
    </>
  );
}

export default Preloader;