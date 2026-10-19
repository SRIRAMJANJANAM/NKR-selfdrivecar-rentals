import { Link } from "react-router-dom";
import { useEffect } from "react";
import { 
  FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaCar,
  FaHome, FaInfoCircle, FaCalendarCheck, FaEnvelope, FaGoogle,
  FaMapMarkerAlt, FaPhoneAlt, FaExternalLinkAlt
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = footerStyles;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d969.301942456951!2d79.51246371571425!3d13.645121782594446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b1eb6466a8d%3A0xdc98fe9aa7ec2e76!2sNKR%20self%20Drive%20Car%20Rentals%20Tirupati!5e0!3m2!1sen!2sin!4v1771779235130!5m2!1sen!2sin";

  return (
    <footer className="footer-unique">
      
      {/* ================= MAP SECTION ================= */}
      <div className="footer-map-section">
        <div className="footer-map-container">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="NKR Self Drive Location - Car Rental Tirupati"
          ></iframe>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="footer-unique-main">
        {/* Brand Column */}
        <div className="footer-unique-col brand-col">
          <div className="brand-header">
            <FaCar className="brand-icon" />
            <span className="brand-name">NKR Self Drive Cars</span>
          </div>
          <p className="brand-description">
            Drive your way with our reliable self-drive cars. Freedom, comfort, and transparency – always.
          </p>
          <div className="brand-contact">
            <p><FaMapMarkerAlt /> Tirupati, Andhra Pradesh - 517501</p>
            <p><FaPhoneAlt /> +91 86600 14029</p>
          </div>
        </div>

        {/* Quick Links Column */}
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
            <a href="https://www.instagram.com/neelendar_reddy_nkr_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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

      {/* ================= BOTTOM BAR ================= */}
      <div className="footer-unique-bottom">
        <div className="bottom-content">
          <p className="developer-credit">
            Developed by{" "}
            <a 
              href="https://smyvisiontechnologies.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="smyvision-highlight"
            >
              SMYVISION TECHNOLOGIES <FaExternalLinkAlt className="ext-icon" />
            </a>
          </p>
          <p className="copyright">
            &copy; {currentYear} NKR Self Drive Cars Rentals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   STYLES
   ========================================================= */
const footerStyles = `
  :root {
    --gold: #e6b23a;
    --gold-2: #f5d76e;
    --gold-deep: #b8860b;
    --line: rgba(230,178,58,0.35);
  }

  .footer-unique {
    background: #0a0a0a;
    position: relative;
    color: #e6e6e6;
    font-family: 'Segoe UI', 'Poppins', system-ui, -apple-system, sans-serif;
    overflow: hidden;
  }

  /* ---------- MAP SECTION ---------- */
  .footer-map-section {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 24px;
    transform: translateY(-40px);
    position: relative;
    z-index: 10;
  }

  .footer-map-container {
    height: 260px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0,0,0,0.8);
    border: 1px solid rgba(230,178,58,0.4);
    background: #111;
  }

  .footer-map-container iframe {
    width: 100%;
    height: 100%;
    filter: grayscale(20%) contrast(1.05);
  }

  /* ---------- MAIN FOOTER ---------- */
  .footer-unique-main {
    max-width: 1300px;
    margin: 0 auto;
    padding: 2rem 24px 4rem;
    display: grid;
    grid-template-columns: 2fr 1fr 1.5fr;
    gap: 3rem;
  }

  .footer-unique-col {
    display: flex;
    flex-direction: column;
  }

  /* Brand column */
  .brand-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  .brand-icon {
    font-size: 2.2rem;
    color: var(--gold);
    filter: drop-shadow(0 0 10px rgba(230,178,58,0.4));
    animation: iconFloat 3s ease-in-out infinite;
  }

  @keyframes iconFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }

  .brand-name {
    font-family: Georgia, serif;
    font-weight: 700;
    font-size: 1.5rem;
    background: linear-gradient(135deg, #ffffff, var(--gold));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.5px;
  }

  .brand-description {
    font-size: 0.95rem;
    line-height: 1.7;
    color: #a0a0a0;
    margin-bottom: 24px;
    max-width: 320px;
  }

  .brand-contact {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .brand-contact p {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.9rem;
    color: #d0d0d0;
    margin: 0;
  }

  .brand-contact svg {
    color: var(--gold);
    font-size: 1rem;
  }

  /* Column titles */
  .col-title {
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 10px;
  }

  .col-title::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 40px;
    height: 3px;
    background: var(--gold);
    border-radius: 2px;
    animation: underlinePulse 3s ease-in-out infinite;
  }

  @keyframes underlinePulse {
    0%, 100% { transform: scaleX(0.8); opacity: 0.8; }
    50% { transform: scaleX(1.1); opacity: 1; }
  }

  /* Icon links */
  .icon-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .icon-links a {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #b0b0b0;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.25s ease;
  }

  .icon-links a:hover {
    color: var(--gold);
    transform: translateX(6px);
  }

  .link-icon {
    font-size: 1.1rem;
    color: var(--gold);
    transition: transform 0.25s ease;
  }

  .icon-links a:hover .link-icon {
    transform: scale(1.15);
  }

  /* Social Icons */
  .social-unique {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }

  .social-unique a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(230,178,58,0.3);
    border-radius: 12px;
    color: var(--gold);
    font-size: 1.2rem;
    transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .social-unique a:hover {
    background: var(--gold);
    color: #000;
    border-color: var(--gold);
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(230,178,58,0.3);
  }

  .google-review-icon:hover {
    background: #4285F4 !important;
    border-color: #4285F4 !important;
    color: #fff !important;
    box-shadow: 0 10px 20px rgba(66, 133, 244, 0.4) !important;
  }

  /* Review Link */
  .review-text-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--gold);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 600;
    padding: 10px 20px;
    background: rgba(230,178,58,0.1);
    border-radius: 30px;
    border: 1px solid rgba(230,178,58,0.4);
    transition: all 0.3s ease;
    width: fit-content;
  }

  .review-text-link:hover {
    background: var(--gold);
    color: #000;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(230,178,58,0.3);
  }

  .review-text-icon {
    font-size: 1rem;
  }

  /* ---------- BOTTOM BAR ---------- */
  .footer-unique-bottom {
    background: #000;
    border-top: 1px solid rgba(230,178,58,0.2);
    padding: 24px;
  }

  .bottom-content {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
  }

  .developer-credit {
    font-size: 0.95rem;
    color: #888;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  /* HIGHLIGHTING SMYVISION TECHNOLOGIES */
  .smyvision-highlight {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 1.05rem;
    font-weight: 800;
    text-decoration: none;
    background: linear-gradient(135deg, #f8e6a8 0%, #e6b23a 50%, #c9962a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    filter: drop-shadow(0 2px 8px rgba(230,178,58,0.4));
    animation: goldShimmer 3s ease-in-out infinite;
    letter-spacing: 0.05em;
    padding: 4px 8px;
    border-radius: 6px;
    background-color: rgba(230,178,58,0.1);
    border: 1px solid rgba(230,178,58,0.3);
    transition: all 0.3s ease;
  }

  .smyvision-highlight:hover {
    background-color: rgba(230,178,58,0.2);
    border-color: var(--gold);
    transform: translateY(-2px);
  }

  .ext-icon {
    font-size: 0.8rem;
    -webkit-text-fill-color: var(--gold);
    color: var(--gold);
  }

  @keyframes goldShimmer {
    0%, 100% { filter: drop-shadow(0 2px 8px rgba(230,178,58,0.4)) brightness(1); }
    50% { filter: drop-shadow(0 4px 16px rgba(245,215,110,0.7)) brightness(1.2); }
  }

  .copyright {
    font-size: 0.85rem;
    color: #666;
  }

  /* ---------- RESPONSIVE ---------- */
  @media (max-width: 1024px) {
    .footer-unique-main {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 768px) {
    .footer-map-section {
      transform: translateY(-20px);
    }

    .footer-map-container {
      height: 200px;
      border-radius: 14px;
    }

    .footer-unique-main {
      grid-template-columns: 1fr;
      gap: 2.5rem;
      text-align: center;
      padding-top: 1rem;
    }

    .brand-header, .brand-contact p {
      justify-content: center;
    }

    .brand-description {
      margin: 0 auto 24px;
    }

    .col-title::after {
      left: 50%;
      transform: translateX(-50%);
    }

    .icon-links a {
      justify-content: center;
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
      justify-content: center;
    }

    .developer-credit {
      flex-direction: column;
      gap: 6px;
    }
  }

  @media (max-width: 480px) {
    .footer-map-container {
      height: 180px;
    }
    
    .social-unique a {
      width: 40px;
      height: 40px;
      font-size: 1.1rem;
    }

    .smyvision-highlight {
      font-size: 0.95rem;
    }
  }
`;

export default Footer;