import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { 
  FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, 
  FaPhone, FaEnvelope, FaGoogle, FaUser, FaCarSide
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    car: ""
  });

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = contactStyles;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const socialLinks = {
    facebook: "https://www.facebook.com/share/1DcKcWZUBe/",
    instagram: "https://www.instagram.com/neelendar_reddy_nkr_",
    whatsapp: "https://wa.me/918660014029",
    location: "https://maps.app.goo.gl/J5n6MZKT6stpCAXV7",
    googleReview: "https://search.google.com/local/writereview?placeid=ChIJjWpGth5LTToRdi7sp5r-mNw"
  };

  const contactDetails = {
    phone: "+91 86600 14029",
    phoneLink: "tel:+918660014029",
    whatsapp: "+91 86600 14029",
    whatsappLink: "https://wa.me/918660014029",
    email: "neelandarnkr@gmail.com",
    emailLink: "mailto:neelandarnkr@gmail.com",
    address: "Tirupati, Andhra Pradesh - 517501",
  };

  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d969.301942456951!2d79.51246371571425!3d13.645121782594446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b1eb6466a8d%3A0xdc98fe9aa7ec2e76!2sNKR%20self%20Drive%20Car%20Rentals%20Tirupati!5e0!3m2!1sen!2sin!4v1771779235130!5m2!1sen!2sin";

  const cars = [
    "Maruti Suzuki Ertiga",
    "Kia Carens",
    "Tata Nexon",
    "Tata Tiago",
    "Swift Diesel",
    "Swift Dzire",
    "Tata Aries AMT",
    "Hyduai VENUE IMT",
    "Toyota Innova Crysta",
    "Maruti Suzuki Baleno",
    "Other / Not sure"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.car) {
      alert("Please fill in all fields.");
      return;
    }
    const message = `Hi NKR Car Rentals,\n\nMy Name: ${formData.name}\nPhone Number: ${formData.phone}\nCar Interested: ${formData.car}\n\nPlease share the availability and price.`;
    window.open(`https://wa.me/918660014029?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Contact NKR Self Drive - Best Car Rental in Tirupati & Renigunta | 24/7</title>
        <meta name="description" content="Contact NKR Self Drive for best self drive car rentals in Tirupati and Renigunta. Call +91 8660014029, WhatsApp, or email neelandarnkr@gmail.com. pickup & drop." />
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Tirupati, Renigunta, Andhra Pradesh" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nkrselfdrivecarrentals.in/contact" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <main className="contact-page">
        {/* ================= HERO ================= */}
        <section className="contact-hero">
          <div className="hero-ornament" aria-hidden="true" />
          <div className="hero-content">
            <p className="hero-eyebrow">
              <span className="gold-diamond">◆</span> Get in Touch <span className="gold-diamond">◆</span>
            </p>
            <h1 className="hero-title">
              Contact <span className="hero-gold">NKR Self Drive</span>
            </h1>
            <p className="hero-subtitle">
              We're here 24/7 to help you with your self-drive car needs in <strong>Tirupati and Renigunta</strong>.
              Call, WhatsApp, or fill the form below to book instantly.
            </p>
          </div>
          <div className="hero-divider" aria-hidden="true">
            <span className="divider-line" />
            <span className="divider-diamond">◆</span>
            <span className="divider-line" />
          </div>
        </section>

        {/* ================= CONTACT CARDS ================= */}
        <section className="contact-info-section">
          <div className="container">
            <div className="choose-head">
              <h2 className="choose-title">Connect With <span className="gold">Us</span></h2>
              <p className="choose-sub">Reach out anytime for bookings and support.</p>
            </div>

            <div className="info-cards">
              {/* Phone Card */}
              <div className="info-card">
                <div className="card-icon phone-icon"><FaPhone /></div>
                <h3>Call Us</h3>
                <a href={contactDetails.phoneLink} className="contact-link">{contactDetails.phone}</a>
                <p className="card-note">Available 24/7 for bookings in Tirupati & Renigunta</p>
              </div>

              {/* WhatsApp Card */}
              <div className="info-card">
                <div className="card-icon whatsapp-icon"><FaWhatsapp /></div>
                <h3>WhatsApp</h3>
                <a href={contactDetails.whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-link">{contactDetails.whatsapp}</a>
                <p className="card-note">Instant replies on WhatsApp for car bookings</p>
              </div>

              {/* Email Card */}
              <div className="info-card">
                <div className="card-icon email-icon"><FaEnvelope /></div>
                <h3>Email</h3>
                <a href={contactDetails.emailLink} className="contact-link">{contactDetails.email}</a>
                <p className="card-note">We'll get back within 1 hour for your queries</p>
              </div>

              {/* Location Card */}
              <div className="info-card" onClick={() => window.open(socialLinks.location, "_blank")} style={{ cursor: "pointer" }}>
                <div className="card-icon location-icon"><FaMapMarkerAlt /></div>
                <h3>Visit Us</h3>
                <p className="address">{contactDetails.address}</p>
                <p className="card-note">Click to open in Google Maps →</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BOOKING FORM SECTION ================= */}
        <section className="booking-form-section">
          <div className="container">
            <div className="form-wrapper">
              <div className="choose-head">
                <h2 className="choose-title">Book <span className="gold">Instantly</span></h2>
                <p className="choose-sub">Fill this quick form and we'll confirm your booking on WhatsApp.</p>
              </div>

              <form className="quick-book-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name"><FaUser className="input-icon" /> Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Enter your full name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone"><FaPhone className="input-icon" /> Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="10-digit mobile number" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="car"><FaCarSide className="input-icon" /> Select Car</label>
                  <select 
                    id="car" 
                    name="car" 
                    value={formData.car} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="" disabled>-- Choose a car --</option>
                    {cars.map((car, i) => (
                      <option key={i} value={car}>{car}</option>
                    ))}
                  </select>
                </div>

                <button type="submit" className="submit-btn">
                  <FaWhatsapp className="btn-icon" /> Book via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ================= MAP ================= */}
        <section className="map-section">
          <div className="container">
            <div className="choose-head">
              <h2 className="choose-title">Find Our <span className="gold">Location</span></h2>
            </div>
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
              <FaMapMarkerAlt className="pin-icon" /> We operate across <strong>Tirupati &amp; Renigunta</strong> – pickup and drop anywhere in the city.
            </p>
          </div>
        </section>

        {/* ================= SOCIAL BAR ================= */}
        <div className="social-bar">
          <div className="container">
            <span className="follow-text">Follow NKR Self Drive:</span>
            <div className="social-icons">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href={socialLinks.googleReview} target="_blank" rel="noopener noreferrer" aria-label="Google Review" className="google-review-link"><FaGoogle /></a>
              <a href={socialLinks.location} target="_blank" rel="noopener noreferrer" aria-label="Location"><FaMapMarkerAlt /></a>
            </div>
          </div>
        </div>

        {/* ================= REVIEW BANNER ================= */}
        <div className="review-banner">
          <div className="container">
            <div className="review-content">
              <div className="review-left">
                <div className="review-icon-wrap">
                  <FaGoogle className="review-icon" />
                </div>
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

/* =========================================================
   STYLES
   ========================================================= */
const contactStyles = `
  :root {
    --gold: #e6b23a;
    --gold-2: #f5d76e;
    --gold-deep: #b8860b;
    --line: rgba(230,178,58,0.35);
    --whatsapp: #25d366;
    --whatsapp-dark: #128c7e;
  }

  /* Page background is white */
  .contact-page {
    font-family: 'Segoe UI', 'Poppins', system-ui, -apple-system, sans-serif;
    background: #fff;
    color: #1a1a1a;
    overflow-x: hidden;
  }

  /* ---------- HERO (Dark Background only here) ---------- */
  .contact-hero {
    position: relative;
    isolation: isolate;
    padding: clamp(4rem, 10vw, 7rem) 24px clamp(3rem, 8vw, 5rem);
    text-align: center;
    color: #fff;
    background:
      radial-gradient(ellipse at 30% 30%, rgba(230,178,58,0.18), transparent 55%),
      radial-gradient(ellipse at 70% 70%, rgba(230,178,58,0.1), transparent 55%),
      linear-gradient(135deg, #0a0a0a 0%, #161616 100%);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 45vh;
  }

  .contact-hero::before {
    content: "";
    position: absolute; inset: -20%;
    background: linear-gradient(110deg, transparent 40%, rgba(230,178,58,.12) 48%, transparent 56%);
    transform: translateX(-80%) skewX(-12deg);
    animation: heroSweep 9s ease-in-out infinite;
    pointer-events: none; z-index: 0;
  }

  @keyframes heroSweep {
    0%, 15% { transform: translateX(-80%) skewX(-12deg); opacity: 0; }
    40% { opacity: 1; }
    70%, 100% { transform: translateX(80%) skewX(-12deg); opacity: 0; }
  }

  .hero-ornament {
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at 20% 50%, rgba(230,178,58,0.1), transparent 55%);
    animation: ornamentPulse 8s ease-in-out infinite;
    pointer-events: none; z-index: 0;
  }

  @keyframes ornamentPulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }

  .hero-content { position: relative; z-index: 2; max-width: 900px; margin: 0 auto; }

  .hero-eyebrow {
    display: inline-flex; align-items: center; gap: 10px;
    color: var(--gold); font-size: 0.8rem; font-weight: 700;
    letter-spacing: 0.22em; text-transform: uppercase; margin: 0 0 22px;
  }

  .gold-diamond { color: var(--gold); font-size: 0.8rem; }

  .hero-title {
    font-family: Georgia, 'Times New Roman', serif;
    font-size: clamp(2.2rem, 5.8vw, 4.5rem);
    line-height: 1.05; font-weight: 700; margin: 0 0 22px; color: #fff;
    text-shadow: 0 8px 40px rgba(0,0,0,.6);
    animation: titleReveal 1s cubic-bezier(.2,.75,.25,1) both;
  }

  @keyframes titleReveal {
    from { opacity: 0; transform: translateY(24px); filter: blur(7px); }
    to { opacity: 1; transform: translateY(0); filter: blur(0); }
  }

  .hero-gold {
    display: inline-block;
    background: linear-gradient(135deg, #f8e6a8 0%, #e6b23a 45%, #c9962a 100%);
    -webkit-background-clip: text; background-clip: text;
    -webkit-text-fill-color: transparent; color: transparent;
    filter: drop-shadow(0 4px 18px rgba(230,178,58,.35));
    animation: goldShimmer 4s ease-in-out infinite;
  }

  @keyframes goldShimmer {
    0%, 100% { filter: drop-shadow(0 4px 18px rgba(230,178,58,.35)) brightness(1); }
    50% { filter: drop-shadow(0 6px 28px rgba(245,215,110,.6)) brightness(1.12); }
  }

  .hero-subtitle {
    color: #d6d6d6; font-size: clamp(1rem, 1.8vw, 1.18rem);
    line-height: 1.7; max-width: 720px; margin: 0 auto 20px;
    animation: titleReveal 1s .15s cubic-bezier(.2,.75,.25,1) both;
  }
  .hero-subtitle strong { color: var(--gold); }

  .hero-divider {
    position: relative; z-index: 2; display: flex; align-items: center;
    justify-content: center; gap: 14px; margin-top: 40px; width: 100%;
  }
  .divider-line {
    flex: 1; max-width: 380px; height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    opacity: 0.7;
  }
  .divider-diamond {
    color: var(--gold); font-size: 0.7rem;
    animation: diamondSpin 6s linear infinite;
  }

  @keyframes diamondSpin {
    from { transform: rotate(0); }
    to { transform: rotate(360deg); }
  }

  /* ---------- SHARED HEADS ---------- */
  .container { max-width: 1300px; margin: 0 auto; padding: 0 24px; }
  .choose-head { text-align: center; margin-bottom: 40px; }
  .choose-title {
    font-family: Georgia, serif; font-size: clamp(1.9rem, 4vw, 2.9rem);
    font-weight: 700; color: #111; margin: 0 0 12px; letter-spacing: -0.01em;
  }
  .choose-title .gold { color: var(--gold-deep); position: relative; }
  .choose-title .gold::after {
    content: ""; position: absolute; left: 0; right: 0; bottom: -8px;
    height: 3px; border-radius: 3px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    animation: underlinePulse 3s ease-in-out infinite;
  }
  @keyframes underlinePulse {
    0%, 100% { transform: scaleX(0.7); opacity: 0.75; }
    50% { transform: scaleX(1.15); opacity: 1; }
  }
  .choose-sub { color: #6b6b6b; font-size: 1.02rem; margin: 18px 0 0; }

  /* ---------- CONTACT CARDS ---------- */
  .contact-info-section { padding: 70px 0; }
  .info-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }

  .info-card {
    background: #fff; border-radius: 20px; padding: 34px 24px;
    text-align: center; border: 1px solid rgba(0,0,0,0.07);
    box-shadow: 0 6px 18px rgba(0,0,0,0.04);
    transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
  }
  .info-card:hover {
    transform: translateY(-8px); border-color: rgba(230,178,58,.55);
    box-shadow: 0 22px 50px rgba(0,0,0,.12);
  }

  .card-icon {
    display: inline-flex; align-items: center; justify-content: center;
    width: 70px; height: 70px; border-radius: 50%;
    font-size: 1.8rem; color: #fff; margin-bottom: 20px;
    transition: transform .35s ease;
  }
  .info-card:hover .card-icon { transform: scale(1.1) rotate(-6deg); }

  .phone-icon { background: linear-gradient(135deg, #1e4a76, #2563eb); }
  .whatsapp-icon { background: linear-gradient(135deg, #25d366, #128c7e); }
  .email-icon { background: linear-gradient(135deg, #ea4335, #c5221f); }
  .location-icon { background: linear-gradient(135deg, #f59e0b, #d97706); }

  .info-card h3 { font-size: 1.25rem; font-weight: 800; color: #111; margin: 0 0 12px; }
  .contact-link { display: inline-block; color: #b8860b; text-decoration: none; font-weight: 700; font-size: 1.05rem; transition: color .2s; }
  .contact-link:hover { color: var(--gold); text-decoration: underline; }
  .address { font-weight: 700; color: #111; font-size: 1.05rem; margin: 0 0 8px; }
  .card-note { color: #666; font-size: 0.88rem; line-height: 1.6; margin: 0; }

  /* ---------- BOOKING FORM SECTION ---------- */
  .booking-form-section {
    background: linear-gradient(180deg, #fdf9ee 0%, #ffffff 100%);
    padding: 70px 0;
    border-top: 1px solid rgba(230,178,58,0.2);
    border-bottom: 1px solid rgba(230,178,58,0.2);
  }

  .form-wrapper {
    max-width: 700px;
    margin: 0 auto;
    background: #fff;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 12px 40px rgba(0,0,0,0.06);
    border: 1px solid rgba(230,178,58,0.3);
  }

  .quick-book-form { display: grid; gap: 20px; }
  .form-group { display: flex; flex-direction: column; }

  .form-group label {
    font-weight: 700; font-size: 0.95rem; margin-bottom: 8px; color: #111;
    display: flex; align-items: center; gap: 8px;
  }

  .input-icon { color: var(--gold-deep); font-size: 1rem; }

  .form-group input,
  .form-group select {
    padding: 14px 16px; border: 2px solid #e2e8f0; border-radius: 12px;
    font-size: 1rem; transition: border-color 0.3s, box-shadow 0.3s;
    background: #f9fafc; font-family: inherit; width: 100%;
  }

  .form-group select {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23b8860b%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat; background-position: right 16px top 50%;
    background-size: 12px auto;
  }

  .form-group input:focus,
  .form-group select:focus {
    outline: none; border-color: var(--gold); background: #fff;
    box-shadow: 0 0 0 3px rgba(230,178,58,.15);
  }

  .submit-btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 10px;
    background: linear-gradient(135deg, var(--whatsapp), var(--whatsapp-dark));
    color: white; padding: 16px; border-radius: 12px;
    font-size: 1.1rem; font-weight: 700; border: none; cursor: pointer;
    margin-top: 10px; box-shadow: 0 8px 20px rgba(37,211,102,0.4);
    transition: transform .3s ease, box-shadow .3s ease, filter .3s ease;
  }
  .submit-btn:hover {
    transform: translateY(-3px); box-shadow: 0 14px 30px rgba(37,211,102,0.6);
    filter: brightness(1.05);
  }
  .submit-btn .btn-icon { font-size: 1.3rem; }

  /* ---------- MAP ---------- */
  .map-section { padding: 70px 0; }
  .map-container {
    border-radius: 20px; overflow: hidden;
    box-shadow: 0 14px 40px rgba(0,0,0,.08);
    border: 1px solid rgba(230,178,58,.3); margin-bottom: 20px;
  }
  .map-container iframe { display: block; filter: grayscale(15%) contrast(1.02); }
  .map-note {
    text-align: center; color: #555; font-size: 0.96rem;
    display: flex; align-items: center; justify-content: center;
    gap: 8px; flex-wrap: wrap; line-height: 1.6;
  }
  .map-note .pin-icon { color: var(--gold-deep); font-size: 1.2rem; animation: iconFloat 3s ease-in-out infinite; }
  @keyframes iconFloat {
    0%, 100% { transform: translateY(0) rotate(0); }
    50% { transform: translateY(-6px) rotate(-4deg); }
  }

  /* ---------- SOCIAL BAR ---------- */
  .social-bar { background: #0a0a0a; border-top: 1px solid var(--line); padding: 24px 0; }
  .social-bar .container { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; }
  .follow-text { color: #fff; font-size: 1.1rem; font-weight: 700; }
  .social-icons { display: flex; gap: 14px; }
  .social-icons a {
    display: inline-flex; align-items: center; justify-content: center;
    width: 44px; height: 44px; border-radius: 50%;
    background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.12);
    color: #fff; font-size: 1.1rem; transition: transform .25s ease, background .25s ease, color .25s ease;
  }
  .social-icons a:hover {
    background: var(--gold); color: #000; border-color: var(--gold);
    transform: translateY(-3px) scale(1.08);
    box-shadow: 0 8px 20px rgba(230,178,58,.4);
  }
  .google-review-link:hover { background: #4285F4 !important; border-color: #4285F4 !important; color: #fff !important; }

  /* ---------- REVIEW BANNER ---------- */
  .review-banner { background: #fdf9ee; padding: 60px 0; }
  .review-content {
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 24px; background: #fff;
    padding: 30px 36px; border-radius: 18px;
    box-shadow: 0 10px 30px rgba(0,0,0,.06);
    border: 1px solid rgba(230,178,58,.3);
    border-left: 6px solid #4285F4;
  }
  .review-left { display: flex; align-items: center; gap: 20px; flex: 1; min-width: 280px; }
  .review-icon-wrap {
    display: flex; align-items: center; justify-content: center;
    width: 64px; height: 64px; border-radius: 50%;
    background: rgba(66,133,244,.1); flex-shrink: 0;
    animation: pulse 2.5s infinite;
  }
  @keyframes pulse {
    0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(66,133,244,.3); }
    50% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(66,133,244,0); }
    100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(66,133,244,0); }
  }
  .review-icon { font-size: 1.8rem; color: #4285F4; }

  .review-text h3 { font-size: 1.25rem; font-weight: 800; color: #111; margin: 0 0 6px; }
  .review-text p { color: #666; font-size: 0.95rem; margin: 0; }

  .review-button {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    background: linear-gradient(135deg, #4285F4, #3367D6); color: #fff;
    padding: 14px 26px; border-radius: 12px; font-weight: 700;
    text-decoration: none; font-size: 1rem; white-space: nowrap;
    box-shadow: 0 8px 20px rgba(66,133,244,.35);
    transition: transform .3s ease, box-shadow .3s ease;
  }
  .review-button:hover {
    transform: translateY(-3px); box-shadow: 0 12px 28px rgba(66,133,244,.5);
  }
  .review-button span { font-size: 1.2rem; transition: transform .3s ease; }
  .review-button:hover span { transform: translateX(4px); }

  /* ---------- RESPONSIVE ---------- */
  @media (max-width: 1024px) {
    .info-cards { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  }

  @media (max-width: 768px) {
    .contact-hero { padding: 70px 18px 50px; min-height: auto; }
    .hero-title { font-size: clamp(2rem, 8vw, 2.6rem); }
    .info-cards { grid-template-columns: 1fr; }
    .info-card { padding: 28px 20px; }
    .map-container iframe { height: 350px; }
    .social-bar .container { flex-direction: column; text-align: center; }
    .review-content { flex-direction: column; text-align: center; padding: 24px; }
    .review-left { flex-direction: column; text-align: center; }
    .review-button { width: 100%; max-width: 300px; }
    .form-wrapper { padding: 24px 20px; }
  }

  @media (max-width: 480px) {
    .container { padding: 0 16px; }
    .hero-title { font-size: 1.9rem; }
    .map-container iframe { height: 280px; }
    .map-note { font-size: 0.88rem; }
    .social-icons { gap: 10px; }
    .social-icons a { width: 38px; height: 38px; font-size: 1rem; }
    .review-text h3 { font-size: 1.1rem; }
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
    }
  }
`;

export default Contact;