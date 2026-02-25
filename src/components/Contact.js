import { Helmet } from "react-helmet";
import { 
  FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, 
  FaPhone, FaEnvelope,FaGoogle 
} from "react-icons/fa";
import { useEffect, useRef } from "react";

function Contact() {
  // Refs for scroll animations
  const infoCardsRef = useRef([]);

  // Intersection Observer for fade-in effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    infoCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Inject global styles
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = contactStyles;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  // Social media links (replace with your actual profiles)
  const socialLinks = {
    facebook: "https://www.facebook.com/share/1DcKcWZUBe/",
    instagram: "https://www.instagram.com/neelendar_reddy_nkr_?utm_source=qr&igsh=MWJ6YTN3OTN5bzRqYQ==",
    whatsapp: "https://wa.me/918660014029",
    location: "https://maps.app.goo.gl/J5n6MZKT6stpCAXV7",
    googleReview: "https://search.google.com/local/writereview?placeid=ChIJjWpGth5LTToRdi7sp5r-mNw" // Replace with your actual Google Place ID
  };

  // Business contact details
  const contactDetails = {
    phone: "+91 8660014029",
    phoneLink: "tel:+918660014029",
    whatsapp: "+91 8660014029",
    whatsappLink: "https://wa.me/918660014029",
    email: "neelandarnkr@gmail.com",
    emailLink: "mailto:neelandarnkr@gmail.com",
    address: "Tirupati, Andhra Pradesh - 517501",
    hours: "Open 24/7 - Available anytime"
  };

  // Embed map URL
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d969.301942456951!2d79.51246371571425!3d13.645121782594446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b1eb6466a8d%3A0xdc98fe9aa7ec2e76!2sNKR%20self%20Drive%20Car%20Rentals%20Tirupati!5e0!3m2!1sen!2sin!4v1771779235130!5m2!1sen!2sin";

  // Function to handle location card click
  const handleLocationClick = () => {
    window.open(socialLinks.location, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Helmet>
        {/* ========== SEO ENHANCED META TAGS (ADDED - REST UNCHANGED) ========== */}
        
        {/* Primary Title with Location Keywords */}
        <title>Contact NKR Self Drive - Best Car Rental in Tirupati & Renigunta | 24/7 Support</title>
        
        {/* Enhanced Meta Description with Keywords */}
        <meta name="description" content="Contact NKR Self Drive for best self drive car rentals in Tirupati and Renigunta. Call +91 8660014029, WhatsApp, or email neelandarnkr@gmail.com. Free pickup & drop. 24/7 customer support. Instant booking confirmation." />
        
        {/* Comprehensive Meta Keywords */}
        <meta name="keywords" content="contact NKR Self Drive, car rental Tirupati phone number, self drive cars Tirupati contact, Tirupati car rental WhatsApp, Renigunta car rental address, book self drive car Tirupati, car rental customer service, 24/7 car rental Tirupati, NKR Self Drive contact details" />
        
        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Tirupati, Renigunta, Andhra Pradesh" />
        <meta name="geo.position" content="13.6288;79.4192" />
        <meta name="ICBM" content="13.6288, 79.4192" />
        
        {/* Robots */}
        <meta name="robots" content="index, follow" />
        
        {/* Author */}
        <meta name="author" content="NKR Self Drive" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://nkrselfdrivecarrentals.in/contact" />
        
        {/* Alternate for Mobile */}
        <link rel="alternate" media="only screen and (max-width: 640px)" href="https://nkrselfdrivecarrentals.in/contact" />
        
        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nkrselfdrivecarrentals.in/contact" />
        <meta property="og:title" content="Contact NKR Self Drive - Best Car Rental in Tirupati & Renigunta" />
        <meta property="og:description" content="Get in touch with NKR Self Drive for self-drive car bookings in Tirupati and Renigunta. Call, WhatsApp, or email us for instant support. Free pickup & drop." />
        <meta property="og:image" content="https://nkrselfdrivecarrentals.in/og-contact.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="NKR Self Drive" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nkrselfdrive" />
        <meta name="twitter:creator" content="@nkrselfdrive" />
        <meta name="twitter:title" content="Contact NKR Self Drive - Tirupati Car Rental" />
        <meta name="twitter:description" content="Contact us for self-drive car rentals in Tirupati & Renigunta. 24/7 support. Free pickup & drop." />
        <meta name="twitter:image" content="https://nkrselfdrivecarrentals.in/og-contact.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="target" content="all" />
        
        {/* Phone number meta for click-to-call on mobile */}
        <meta name="format-detection" content="telephone=yes" />
        
        {/* ========== END OF ADDED SEO META TAGS ========== */}
      </Helmet>

      <main className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">Get in Touch with NKR Self Drive</h1>
            <p className="hero-subtitle">
              We're here 24/7 to help you with your self-drive car needs in <strong>Tirupati and Renigunta</strong>.
              Call, WhatsApp, or visit us – we respond instantly. Free pickup & drop anywhere in the city.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="contact-info-section">
          <div className="container">
            <h2 className="section-title">Connect With Us in Tirupati & Renigunta</h2>
            <div className="info-cards">
              {/* Phone Card */}
              <div 
                className="info-card"
                ref={(el) => (infoCardsRef.current[0] = el)}
              >
                <div className="card-icon phone-icon">
                  <FaPhone />
                </div>
                <h3>Call Us</h3>
                <a href={contactDetails.phoneLink} className="contact-link">
                  {contactDetails.phone}
                </a>
                <p className="card-note">Available 24/7 for bookings in Tirupati & Renigunta</p>
              </div>

              {/* WhatsApp Card */}
              <div 
                className="info-card"
                ref={(el) => (infoCardsRef.current[1] = el)}
              >
                <div className="card-icon whatsapp-icon">
                  <FaWhatsapp />
                </div>
                <h3>WhatsApp</h3>
                <a href={contactDetails.whatsappLink} className="contact-link" target="_blank" rel="noopener noreferrer">
                  {contactDetails.whatsapp}
                </a>
                <p className="card-note">Instant replies on WhatsApp for car bookings</p>
              </div>

              {/* Email Card */}
              <div 
                className="info-card"
                ref={(el) => (infoCardsRef.current[2] = el)}
              >
                <div className="card-icon email-icon">
                  <FaEnvelope />
                </div>
                <h3>Email</h3>
                <a href={contactDetails.emailLink} className="contact-link">
                  {contactDetails.email}
                </a>
                <p className="card-note">We'll get back within 1 hour for your queries</p>
              </div>

              {/* Location Card - Now clickable to open Google Maps */}
              <div 
                className="info-card clickable-card"
                ref={(el) => (infoCardsRef.current[3] = el)}
                onClick={handleLocationClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleLocationClick();
                  }
                }}
              >
                <div className="card-icon location-icon">
                  <FaMapMarkerAlt />
                </div>
                <h3>Visit Us</h3>
                <p className="address">{contactDetails.address}</p>
                <span className="map-link">
                  Click to open in Google Maps → (Serving Tirupati & Renigunta)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <div className="container">
            <h2 className="section-title">Find Our Location in Tirupati</h2>
            <div className="map-container">
              <iframe
                src={mapSrc}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NKR Self Drive Location - Car Rental Tirupati"
              ></iframe>
            </div>
            <p className="map-note">
              <FaMapMarkerAlt /> We operate across <strong>Tirupati & Renigunta</strong> – free pickup and drop anywhere in the city. 
              Serving all areas including Railway Station, Bus Stand, Airport, and Renigunta Junction.
            </p>
          </div>
        </section>

        {/* Social Links Bar with Google Review */}
        <div className="social-bar">
          <div className="container">
            <span className="follow-text">Follow NKR Self Drive:</span>
            <div className="social-icons">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook - NKR Self Drive">
                <FaFacebookF />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram - NKR Self Drive">
                <FaInstagram />
              </a>
              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp - NKR Self Drive Car Rentals">
                <FaWhatsapp />
              </a>
              <a href={socialLinks.googleReview} target="_blank" rel="noopener noreferrer" aria-label="Review us on Google - NKR Self Drive" className="google-review-link">
                <FaGoogle />
              </a>
              <a href={socialLinks.location} target="_blank" rel="noopener noreferrer" aria-label="Location - NKR Self Drive Tirupati">
                <FaMapMarkerAlt />
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced responsive review banner */}
        <div className="review-banner">
          <div className="container">
            <div className="review-content">
              <div className="review-left">
                <FaGoogle className="review-icon" />
                <div className="review-text">
                  <h3>Love our self-drive car service in Tirupati?</h3>
                  <p>Your feedback helps us serve you better. Review us on Google!</p>
                </div>
              </div>
              <a href={socialLinks.googleReview} target="_blank" rel="noopener noreferrer" className="review-button">
                Write a Google Review <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

// Enhanced responsive styles with wider container for desktop
const contactStyles = `
  .contact-page {
    font-family: 'Segoe UI', 'Poppins', system-ui, sans-serif;
    background-color: #f4f7fb;
    color: #1e293b;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* Hero Section */
  .contact-hero {
    background: linear-gradient(135deg, #d7ebff, #ffffff, #f0f9ff);
    background-size: 300% 300%;
    animation: gradientShift 12s ease infinite;
    padding: clamp(2rem, 8vw, 4rem) 1rem;
    text-align: center;
    position: relative;
    border-bottom: 3px solid #2563eb20;
    min-height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(37,99,235,0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  .hero-content {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 1rem;
    position: relative;
    z-index: 1;
  }

  .hero-title {
    font-size: clamp(2rem, 6vw, 3.2rem);
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: #0f2a40;
    text-shadow: 0 2px 4px rgba(0,0,0,0.05);
    animation: slideUp 0.6s ease-out;
    line-height: 1.2;
  }

  .hero-subtitle {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    margin-bottom: 1rem;
    color: #334155;
    animation: slideUp 0.7s ease-out;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5;
  }

  /* Section Title */
  .section-title {
    font-size: clamp(1.6rem, 5vw, 2.2rem);
    text-align: center;
    margin: 2rem 1rem 1.5rem;
    color: #0f2a40;
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
    padding: 0 1rem;
  }

  .section-title::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: #1e4a76;
    margin: 0.5rem auto;
    transition: width 0.3s ease;
  }

  .section-title:hover::after {
    width: 100px;
    background-color: #2563eb;
  }

  /* ===== CONTAINER – WIDER ON DESKTOP ===== */
  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* Contact Info Cards */
  .contact-info-section {
    padding: 2rem 0;
  }

  .info-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .info-card {
    background: white;
    border-radius: 24px;
    padding: 2rem 1.5rem;
    text-align: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s;
    opacity: 0;
    transform: translateY(30px);
    border: 2px solid transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .info-card.in-view {
    animation: fadeInUp 0.5s forwards;
  }

  .info-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 25px 35px rgba(0, 0, 0, 0.1);
    border-color: #1e4a7620;
  }

  /* Clickable card styles */
  .clickable-card {
    cursor: pointer;
    position: relative;
  }

  .clickable-card:active {
    transform: scale(0.98);
  }

  .clickable-card:focus-visible {
    outline: 3px solid #2563eb;
    outline-offset: 2px;
  }

  .card-icon {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 2rem;
    color: white;
    flex-shrink: 0;
  }

  .phone-icon { background-color: #1e4a76; }
  .whatsapp-icon { background-color: #25D366; }
  .email-icon { background-color: #ea4335; }
  .location-icon { background-color: #f59e0b; }

  .info-card h3 {
    font-size: 1.4rem;
    margin-bottom: 0.75rem;
    color: #0f2a40;
    font-weight: 600;
  }

  .contact-link {
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 600;
    color: #1e4a76;
    text-decoration: none;
    margin-bottom: 0.5rem;
    transition: color 0.2s;
    padding: 0.25rem 0;
    word-break: break-word;
  }

  .contact-link:hover {
    color: #2563eb;
    text-decoration: underline;
  }

  .card-note {
    font-size: 0.9rem;
    color: #64748b;
    line-height: 1.4;
  }

  .address {
    font-size: 1rem;
    color: #334155;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  .map-link {
    display: inline-block;
    color: #1e4a76;
    font-weight: 600;
    text-decoration: none;
    border-bottom: 2px dotted #1e4a76;
    padding-bottom: 2px;
    transition: color 0.2s, border-color 0.2s;
  }

  .clickable-card:hover .map-link {
    color: #2563eb;
    border-color: #2563eb;
  }

  /* Map Section */
  .map-section {
    padding: 2rem 0 3rem;
    background-color: white;
  }

  .map-container {
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    margin: 2rem 0 1.5rem;
  }

  .map-container iframe {
    display: block;
    height: 450px;
  }

  .map-note {
    text-align: center;
    color: #334155;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1rem;
    flex-wrap: wrap;
  }

  .map-note svg {
    color: #f59e0b;
    font-size: 1.2rem;
  }

  /* Social Bar */
  .social-bar {
    background-color: #1e4a76;
    color: white;
    padding: 1.5rem 0;
    margin-top: 2rem;
  }

  .social-bar .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem 2rem;
  }

  .follow-text {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .social-icons {
    display: flex;
    gap: 1.5rem;
  }

  .social-icons a {
    color: white;
    font-size: 2rem;
    transition: transform 0.3s, color 0.3s;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 50%;
  }

  .social-icons a:hover {
    transform: translateY(-5px);
    color: #f59e0b;
    background-color: rgba(255,255,255,0.1);
  }

  .google-review-link:hover {
    color: #4285F4 !important; /* Google blue color on hover */
  }

  /* Enhanced Review Banner */
  .review-banner {
    background: linear-gradient(135deg, #f8f9fa, #ffffff);
    padding: 2rem 0;
    border-top: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;
  }

  .review-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
    background: white;
    padding: 1.5rem 2rem;
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    border-left: 6px solid #4285F4;
  }

  .review-left {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex: 1 1 auto;
    min-width: 280px;
  }

  .review-icon {
    font-size: 3rem;
    color: #4285F4;
    animation: pulse 2s infinite;
    flex-shrink: 0;
  }

  .review-text h3 {
    font-size: clamp(1.1rem, 3vw, 1.3rem);
    font-weight: 600;
    color: #0f2a40;
    margin-bottom: 0.25rem;
    line-height: 1.3;
  }

  .review-text p {
    color: #64748b;
    font-size: clamp(0.85rem, 2.5vw, 0.95rem);
  }

  .review-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: #4285F4;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: clamp(0.9rem, 2.5vw, 1rem);
    transition: all 0.3s ease;
    white-space: nowrap;
    box-shadow: 0 4px 12px rgba(66, 133, 244, 0.3);
    min-width: 140px;
  }

  .review-button:hover {
    background-color: #3367D6;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(66, 133, 244, 0.4);
  }

  .review-button span {
    font-size: 1.2rem;
    transition: transform 0.3s;
  }

  .review-button:hover span {
    transform: translateX(4px);
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  /* Animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Responsive adjustments */
  @media (max-width: 1024px) {
    .container {
      padding: 0 1.5rem;
    }
    .info-cards {
      gap: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1.25rem;
    }
    .info-cards {
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1.25rem;
    }
    .info-card {
      padding: 1.75rem 1rem;
    }
    .card-icon {
      width: 60px;
      height: 60px;
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
    .info-card h3 {
      font-size: 1.3rem;
    }
    .contact-link {
      font-size: 1.1rem;
    }
    .social-bar .container {
      flex-direction: column;
      text-align: center;
    }
    .social-icons {
      gap: 1rem;
    }
    .social-icons a {
      font-size: 1.8rem;
    }
    .map-container iframe {
      height: 350px;
    }
    .review-content {
      flex-direction: column;
      text-align: center;
      padding: 1.5rem;
    }
    .review-left {
      flex-direction: column;
      text-align: center;
      gap: 1rem;
      min-width: auto;
      width: 100%;
    }
    .review-button {
      width: 100%;
      max-width: 300px;
      white-space: normal;
      padding: 0.75rem 1rem;
    }
  }

  @media (max-width: 600px) {
    .info-cards {
      grid-template-columns: 1fr;
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
    }
    .hero-title {
      font-size: clamp(1.8rem, 7vw, 2.4rem);
    }
    .hero-subtitle {
      font-size: 1rem;
    }
    .review-button {
      max-width: 100%;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 0 1rem;
    }
    .contact-hero {
      padding: 2rem 0.5rem;
    }
    .section-title {
      font-size: 1.6rem;
      margin: 1.5rem 0.5rem 1rem;
    }
    .card-icon {
      width: 55px;
      height: 55px;
      font-size: 1.4rem;
    }
    .info-card h3 {
      font-size: 1.2rem;
    }
    .contact-link {
      font-size: 1rem;
    }
    .map-container iframe {
      height: 280px;
    }
    .map-note {
      font-size: 0.9rem;
      flex-direction: column;
      gap: 0.25rem;
    }
    .social-icons a {
      font-size: 1.6rem;
      padding: 0.4rem;
    }
    .review-text h3 {
      font-size: 1.1rem;
    }
    .review-text p {
      font-size: 0.85rem;
    }
    .review-button {
      font-size: 0.9rem;
      padding: 0.7rem 1rem;
    }
  }

  @media (max-width: 360px) {
    .container {
      padding: 0 0.75rem;
    }
    .info-card {
      padding: 1.25rem 0.75rem;
    }
    .contact-link {
      font-size: 0.95rem;
      word-break: break-all;
    }
    .social-icons {
      gap: 0.5rem;
    }
    .social-icons a {
      font-size: 1.4rem;
    }
    .review-button {
      font-size: 0.85rem;
      padding: 0.6rem 0.8rem;
    }
  }
`;

export default Contact;