import { Link } from "react-router-dom";
import { useEffect } from "react";
import { 
  FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaCar,
  FaHome, FaInfoCircle,FaCalendarCheck, FaEnvelope, FaGoogle
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = footerStyles;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <footer className="footer-unique">
      <div className="footer-unique-main">
        {/* Brand Column */}
        <div className="footer-unique-col brand-col">
          <div className="brand-header">
            <FaCar className="brand-icon" />
            <span className="brand-name">NKR self drive cars rentals</span>
          </div>
          <p className="brand-description">
            Drive your way with our reliable self-drive cars. Freedom, comfort, and transparency – always.
          </p>
        </div>

        {/* Quick Links Column with Icons */}
        <div className="footer-unique-col links-col">
          <h3 className="col-title">Quick Links</h3>
          <ul className="icon-links">
            <li>
              <Link to="/">
                <FaHome className="link-icon" /> Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FaInfoCircle className="link-icon" /> About Us
              </Link>
            </li>
            <li>
              <Link to="/book">
                <FaCalendarCheck className="link-icon" /> Book Now
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <FaEnvelope className="link-icon" /> Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links Column */}
        <div className="footer-unique-col social-col">
          <h3 className="col-title">Connect With Us</h3>
          <div className="social-unique">
            <a href="https://www.instagram.com/neelendar_reddy_nkr_?utm_source=qr&igsh=MWJ6YTN3OTN5bzRqYQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/share/1DcKcWZUBe/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com/@neelandarreddy?si=W_RTEtCIVakU9ypb" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://wa.me/918660014029" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            {/* Google Review Icon */}
            <a 
              href="https://search.google.com/local/writereview?placeid=ChIJjWpGth5LTToRdi7sp5r-mNw" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Review us on Google"
              className="google-review-icon"
            >
              <FaGoogle />
            </a>
          </div>
          {/* Review text link */}
          <div className="review-link-container">
            <a 
              href="https://search.google.com/local/writereview?placeid=ChIJjWpGth5LTToRdi7sp5r-mNw"
              target="_blank"
              rel="noopener noreferrer"
              className="review-text-link"
            >
              <FaGoogle className="review-text-icon" /> Write a Google Review
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Developer Credit */}
      <div className="footer-unique-bottom">
        <div className="bottom-content">
          <p className="developer-credit">
            Developed by <strong>SMYVISION TECHNOLOGIES</strong>
          </p>
          <p className="copyright">
            &copy; {currentYear} NKR Self Drive Cars Rentals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Fresh monochromatic blue theme with distinct styling
const footerStyles = `
  .footer-unique {
    background: linear-gradient(145deg, #0b1e33 0%, #102b44 100%);
    border-top: 4px solid transparent;
    border-image: linear-gradient(90deg, #1e4a76, #4a9eff, #1e4a76);
    border-image-slice: 1;
    box-shadow: 0 -10px 30px rgba(0, 20, 40, 0.6);
    padding: 3rem 2rem 0;
    color: #e6f0ff;
    animation: slideUp 0.6s ease-out;
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .footer-unique-main {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2.5rem 1.5rem;
  }

  .footer-unique-col {
    display: flex;
    flex-direction: column;
  }

  /* Brand column */
  .brand-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .brand-icon {
    font-size: 2.2rem;
    color: #4a9eff;
    filter: drop-shadow(0 2px 4px rgba(0, 160, 255, 0.4));
    transition: transform 0.3s ease;
  }

  .brand-header:hover .brand-icon {
    transform: rotate(5deg) scale(1.1);
  }

  .brand-name {
    font-family: 'Segoe UI', 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.3rem;
    color: #ffffff;
    letter-spacing: -0.5px;
    background: linear-gradient(135deg, #ffffff, #b0d0ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .brand-description {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #b0d0ff;
    max-width: 280px;
  }

  /* Column titles */
  .col-title {
    color: #ffffff;
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.5rem;
  }

  .col-title::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #1e4a76, #4a9eff);
    border-radius: 2px;
  }

  /* Icon links list */
  .icon-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .icon-links li {
    margin-bottom: 0.9rem;
  }

  .icon-links a {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: #b0d0ff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.4rem 0.8rem;
    border-radius: 8px;
    transition: all 0.2s ease;
    background-color: rgba(30, 74, 118, 0.2);
    backdrop-filter: blur(2px);
  }

  .icon-links a:hover {
    background-color: #1e4a76;
    color: #ffffff;
    transform: translateX(6px);
    box-shadow: 0 4px 10px rgba(0, 40, 80, 0.6);
  }

  .link-icon {
    font-size: 1.2rem;
    color: #4a9eff;
    transition: all 0.2s ease;
  }

  .icon-links a:hover .link-icon {
    color: #ffffff;
    transform: scale(1.15);
  }

  /* Social icons unique */
  .social-unique {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 1.2rem;
  }

  .social-unique a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    background: #1a2f45;
    border-radius: 12px;
    color: #4a9eff;
    font-size: 1.6rem;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 1px solid #1e4a76;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  .social-unique a:hover {
    background: linear-gradient(145deg, #1e4a76, #2a5f8a);
    color: #ffffff;
    border-radius: 50%;
    transform: translateY(-6px) scale(1.1);
    box-shadow: 0 12px 20px rgba(0, 80, 160, 0.5);
  }

  /* Google Review Icon specific styling */
  .google-review-icon:hover {
    background: linear-gradient(145deg, #4285F4, #0d47a1) !important;
  }

  /* Review link container */
  .review-link-container {
    margin-top: 0.5rem;
  }

  .review-text-link {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    color: #b0d0ff;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    background: rgba(66, 133, 244, 0.15);
    border-radius: 30px;
    border: 1px solid rgba(66, 133, 244, 0.3);
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);
  }

  .review-text-link:hover {
    background: #4285F4;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(66, 133, 244, 0.4);
    border-color: transparent;
  }

  .review-text-icon {
    font-size: 1.1rem;
    color: #4285F4;
    transition: all 0.3s ease;
  }

  .review-text-link:hover .review-text-icon {
    color: white;
    transform: scale(1.1);
  }

  /* Bottom bar */
  .footer-unique-bottom {
    background-color: #071626;
    margin-top: 3rem;
    padding: 1.2rem 2rem;
    border-top: 1px solid #1e4a76;
  }

  .bottom-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .developer-credit {
    font-size: 0.95rem;
    color: #b0d0ff;
  }

  .developer-credit strong {
    color: #ffffff;
    font-weight: 700;
    background: linear-gradient(135deg, #4a9eff, #a0c8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .copyright {
    font-size: 0.85rem;
    color: #8aadff;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .footer-unique-main {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .footer-unique-col {
      text-align: center;
      align-items: center;
    }

    .brand-description {
      max-width: 100%;
    }

    .col-title::after {
      left: 50%;
      transform: translateX(-50%);
    }

    .icon-links a {
      justify-content: center;
    }

    .icon-links a:hover {
      transform: translateX(0) scale(1.03);
    }

    .social-unique {
      justify-content: center;
    }

    .review-text-link {
      margin: 0 auto;
    }

    .bottom-content {
      flex-direction: column;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    .footer-unique {
      padding: 2rem 1rem 0;
    }
    .brand-icon {
      font-size: 2rem;
    }
    .brand-name {
      font-size: 1.2rem;
    }
    .social-unique a {
      width: 46px;
      height: 46px;
      font-size: 1.4rem;
    }
    .review-text-link {
      font-size: 0.85rem;
      padding: 0.4rem 0.8rem;
    }
  }
`;

export default Footer;