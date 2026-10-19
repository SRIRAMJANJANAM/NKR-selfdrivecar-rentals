import { useState, useEffect, useRef, useMemo } from "react";
import { Helmet } from "react-helmet";
import {
  FaUser, FaGasPump, FaRupeeSign, FaMapMarkerAlt, FaClock,
  FaEnvelope, FaPhone, FaCalendarAlt, FaWhatsapp, FaTimes,
  FaCheckCircle, FaExclamationCircle, FaBolt
} from "react-icons/fa";

function Booking() {
  const carCardsRef = useRef([]);
  const seoRefs = useRef([]);
  const modalRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickupLocation: '',
    pickupDate: '',
    pickupTime: '',
    days: 1,
    selectedCarId: null
  });

  const [errors, setErrors] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const cars = useMemo(() => [
    { id: 1, name: "Maruti Suzuki Ertiga", image: "/images/ertiga.webp", seats: 7, fuel: "CNG & Petrol", price: 3000, features: ["7 Seater", "CNG & Petrol", "250 km/day", "Extra ₹10/km", "Fuel not included"] },
    { id: 2, name: "Kia Carens", image: "/images/carens.webp", seats: 7, fuel: "Diesel", price: 3500, features: ["7 Seater", "Diesel", "250 km/day", "Extra ₹10/km", "Fuel not included"] },
    { id: 3, name: "Tata Nexon", image: "/images/nexon.webp", seats: 5, fuel: "Petrol & CNG", price: 2700, features: ["5 Seater", "Petrol & CNG", "250 km/day", "Extra ₹10/km", "Fuel not included"] },
    { id: 4, name: "Tata Tiago", image: "/images/tiago.webp", seats: 5, fuel: "Petrol", price: 2000, features: ["5 Seater", "Petrol", "250 km/day", "Extra ₹10/km", "Fuel not included"] },
    { id: 5, name: "Swift Diesel", image: "/images/swift.webp", seats: 5, fuel: "Diesel", price: 1800, features: ["5 Seater", "Diesel", "250 km/day", "Extra ₹10/km", "Fuel not included"] },
    { id: 6, name: "Swift Dzire", image: "/images/dzire.webp", seats: 5, fuel: "Petrol", price: 2200, features: ["5 Seater", "Petrol", "250 km/day", "Extra ₹10/km", "Fuel not included"] },
    { id: 7, name: "Tata Aries AMT", image: "/images/aeris.webp", seats: 5, fuel: "Petrol", price: 2500, features: ["5 Seater", "Petrol", "250 km/day", "Extra ₹10/km", "Fuel not included"] },
    { id: 8, name: "Hyundai Venue IMT", image: "/images/venue.webp", seats: 5, fuel: "Petrol", price: 3000, features: ["5 Seater", "Petrol", "250 km/day", "Extra ₹10/km", "Fuel not included"] },
    { id: 9, name: "Toyota Innova Crysta", image: "/images/crysta.webp", seats: 8, fuel: "Disel", price: 4000, features: ["8 Seater", "Diesel", "250 km/day", "Extra ₹10/km", "Fuel not included"] },
    { id: 10, name: " Maruti Suzuki Baleno", image: "/images/baleno.webp", seats: 5, fuel: "Petrol", price: 2300, features: ["5 Seater", "Petrol", "250 km/day", "Extra ₹10/km", "Fuel not included"] },
  ], []);

  const sortedCars = [...cars].sort((a, b) => a.price - b.price);

  useEffect(() => {
    if (formData.selectedCarId && formData.days > 0) {
      const selectedCar = cars.find(car => car.id === formData.selectedCarId);
      if (selectedCar) setTotalPrice(selectedCar.price * formData.days);
    } else {
      setTotalPrice(0);
    }
  }, [formData.selectedCarId, formData.days, cars]);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = bookingStyles;
    document.head.appendChild(style);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    carCardsRef.current.forEach((el) => el && observer.observe(el));
    seoRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  const openModal = (carId) => {
    setFormData(prev => ({ ...prev, selectedCarId: carId }));
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrors({});
    setFormData({ name: '', phone: '', email: '', pickupLocation: '', pickupDate: '', pickupTime: '', days: 1, selectedCarId: null });
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isModalOpen) closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isModalOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.trim().length < 2) newErrors.name = "Name must be at least 2 characters";

    const phoneRegex = /^(\+91|0)?[6-9]\d{9}$/;
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) newErrors.phone = "Enter a valid 10-digit Indian mobile number";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Enter a valid email address";

    if (!formData.pickupLocation.trim()) newErrors.pickupLocation = "Pickup location is required";

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!formData.pickupDate) newErrors.pickupDate = "Pickup date is required";
    else {
      const selectedDate = new Date(formData.pickupDate);
      selectedDate.setHours(0, 0, 0, 0);
      if (selectedDate < today) newErrors.pickupDate = "Pickup date must be today or later";
    }

    if (!formData.pickupTime) newErrors.pickupTime = "Pickup time is required";
    else if (formData.pickupDate) {
      const selectedDateTime = new Date(`${formData.pickupDate}T${formData.pickupTime}`);
      if (selectedDateTime < new Date()) newErrors.pickupTime = "Pickup time must be in the future";
    }

    if (!formData.days || formData.days < 1) newErrors.days = "Days must be at least 1";
    else if (!Number.isInteger(Number(formData.days))) newErrors.days = "Days must be a whole number";

    if (!formData.selectedCarId) newErrors.selectedCarId = "Please select a car";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const selectedCar = cars.find(car => car.id === formData.selectedCarId);
      const pickupDateTime = new Date(`${formData.pickupDate}T${formData.pickupTime}`);
      const formattedDate = pickupDateTime.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
      const formattedTime = pickupDateTime.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

      const message = `Booking Request:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCar: ${selectedCar.name}\nPickup Location: ${formData.pickupLocation}\nPickup Date: ${formattedDate}\nPickup Time: ${formattedTime}\nDays: ${formData.days}\n*Note: Fuel not included. Extra km charges apply.*`;

      window.open(`https://wa.me/918660014029?text=${encodeURIComponent(message)}`, "_blank");
      closeModal();
    }
  };

  const selectedCar = formData.selectedCarId ? cars.find(c => c.id === formData.selectedCarId) : null;

  // Direct WhatsApp link generator for individual cars
  const getWhatsAppLink = (carName) =>
    `https://wa.me/918660014029?text=${encodeURIComponent(
      `Hi NKR Car Rentals, I want to book the ${carName}. Please share availability and price.`
    )}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": "Self Drive Car Rental Booking - Tirupati & Renigunta",
        "description": "Book self-drive cars in Tirupati and Renigunta. Instant WhatsApp booking.  pickup & drop. Fuel not included.",
        "brand": { "@type": "Brand", "name": "NKR Self Drive" },
        "offers": {
          "@type": "AggregateOffer",
          "offerCount": sortedCars.length,
          "lowPrice": Math.min(...sortedCars.map(c => c.price)),
          "highPrice": Math.max(...sortedCars.map(c => c.price)),
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "areaServed": ["Tirupati", "Renigunta"]
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nkrselfdrivecarrentals.in" },
          { "@type": "ListItem", "position": 2, "name": "Book Self Drive Car", "item": "https://nkrselfdrivecarrentals.in/book" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Book Self Drive Cars in Tirupati & Renigunta | Instant WhatsApp Booking | NKR</title>
        <meta name="description" content="Book self drive cars in Tirupati and Renigunta instantly. Choose from Ertiga (₹3000/day), Carens (₹3500), Nexon (₹2700), Swift (₹1800).  pickup & drop. Fuel not included. Confirm via WhatsApp." />
        <meta name="keywords" content="book self drive car Tirupati, self drive cars Renigunta, car rental booking Tirupati, Ertiga on rent, Carens hire, Nexon self drive, Swift Dzire booking, instant car booking, fuel not included,  pickup drop Tirupati" />
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Tirupati, Renigunta, Andhra Pradesh" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nkrselfdrivecarrentals.in/book" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nkrselfdrivecarrentals.in/book" />
        <meta property="og:title" content="Book Self-Drive Cars in Tirupati & Renigunta - Starting ₹1800/day" />
        <meta property="og:description" content="Instant booking via WhatsApp.  pickup & drop anywhere in Tirupati & Renigunta. Fuel not included." />
        <meta property="og:image" content="https://nkrselfdrivecarrentals.in/og-booking.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Book Self-Drive Cars in Tirupati - NKR Self Drive" />
        <meta property="twitter:description" content="Instant booking via WhatsApp.  pickup & drop in Tirupati & Renigunta." />
        <meta property="twitter:image" content="https://nkrselfdrivecarrentals.in/og-booking.webp" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="booking-page">
        {/* ================= HERO ================= */}
        <section className="booking-hero">
          <div className="hero-ornament" aria-hidden="true" />
          <div className="hero-content">
            <p className="hero-eyebrow">
              <span className="gold-diamond">◆</span> Reserve Your Ride <span className="gold-diamond">◆</span>
            </p>
            <h1 className="hero-title">
              Book Your <span className="hero-gold">Self-Drive Car</span>
            </h1>
            <p className="hero-subtitle">
              Select a car, click "Book Now", fill in your details, and confirm instantly via WhatsApp.
               pickup & drop anywhere in Tirupati & Renigunta. <strong>Fuel not included</strong> – pay only for what you use.
            </p>
          </div>
          <div className="hero-divider" aria-hidden="true">
            <span className="divider-line" />
            <span className="divider-diamond">◆</span>
            <span className="divider-line" />
          </div>
        </section>

        {/* ================= CARS GRID ================= */}
        <section className="cars-section" aria-labelledby="cars-heading">
          <div className="choose-head">
            <h2 id="cars-heading" className="choose-title">Our <span className="gold">Fleet</span></h2>
            <p className="choose-sub">Choose your perfect self-drive car in Tirupati.</p>
          </div>

          <div className="cars-grid">
            {sortedCars.map((car, index) => (
              <article
                key={car.id}
                className={`car-card reveal-${index % 3 === 0 ? "left" : index % 3 === 2 ? "right" : "up"}`}
                ref={(el) => (carCardsRef.current[index] = el)}
                style={{ transitionDelay: `${(index % 3) * 0.12}s` }}
              >
                <div className="car-image-wrapper">
                  <img src={car.image} alt={`${car.name} - Self Drive Car in Tirupati`} className="car-image" loading="lazy" />
                  <div className="car-image-shine" aria-hidden="true" />
                  <div className="car-price-tag">
                    <FaRupeeSign /> {car.price}<span>/day</span>
                  </div>
                  <div className="car-badge-speed"><FaBolt /> Live</div>
                </div>
                <div className="car-details">
                  <h3 className="car-name">{car.name}</h3>
                  <div className="car-features">
                    <span><FaUser /> {car.seats} Seats</span>
                    <span><FaGasPump /> {car.fuel}</span>
                  </div>
                  <ul className="feature-list">
                    {car.features.map((feature, i) => (
                      <li key={i}><FaCheckCircle className="feat-icon" /> {feature}</li>
                    ))}
                  </ul>
                  
                  {/* Primary Book Now button (opens form modal) */}
                  <button
                    className="book-btn"
                    onClick={() => openModal(car.id)}
                    aria-label={`Book ${car.name} in Tirupati`}
                  >
                    Book Now
                  </button>

                  {/* Secondary WhatsApp button (direct redirect) */}
                  <a
                    href={getWhatsAppLink(car.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-block fleet-wa-btn"
                    aria-label={`Book ${car.name} via WhatsApp`}
                  >
                    <FaWhatsapp className="wa-btn-icon" />
                    Book via WhatsApp
                  </a>

                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= SEO CONTENT ================= */}
        <section className="seo-content">
          <div className="seo-container">
            <div className="choose-head">
              <h2 className="choose-title">Why Choose <span className="gold">NKR Self Drive?</span></h2>
            </div>
            <div className="seo-grid">
              {[
                { icon: "🚗", title: "Wide Range of Cars", desc: "From compact hatchbacks like Swift to spacious SUVs like Carens – we have a car for every need and budget in Tirupati and Renigunta." },
                { icon: "⛽", title: "Fuel Not Included", desc: "We believe in transparency. You pay only for the car rental; fuel is extra based on your usage. No hidden fuel markups." },
                { icon: "📍", title: " Pickup & Drop", desc: "We deliver the car to your doorstep in Tirupati or Renigunta and pick it up after your rental – absolutely ." },
                { icon: "📱", title: "Instant WhatsApp Booking", desc: "Fill the form and confirm your booking in seconds via WhatsApp. No calls, no waiting. Best self drive experience." },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`seo-item reveal-${i % 2 === 0 ? "left" : "right"}`}
                  ref={(el) => (seoRefs.current[i] = el)}
                >
                  <div className="seo-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="seo-content" style={{ marginTop: '0' }}>
          <div className="seo-container">
            <div className="choose-head">
              <h2 className="choose-title">Available in <span className="gold">Tirupati & Renigunta</span></h2>
            </div>
            <div className="seo-grid">
              {[
                { icon: "📍", title: "Car Rental in Tirupati", desc: "Book self drive cars in Tirupati at Railway Station, Bus Stand, Alipiri, and all major locations.  pickup and drop anywhere in Tirupati city." },
                { icon: "📍", title: "Self Drive Cars in Renigunta", desc: "We deliver self drive cars to Renigunta Railway Junction, Bus Stand, and near Tirupati Airport. Best car rental service in Renigunta." },
                { icon: "💰", title: "Best Prices in Tirupati", desc: "Self drive cars in Tirupati starting from just ₹1800 per day. Ertiga at ₹3000, Carens at ₹3500, Nexon at ₹2700. Most affordable rates." },
                { icon: "⏰", title: "24/7 Availability", desc: "Book self drive cars anytime in Tirupati and Renigunta. We operate 24/7 for your convenience. Instant confirmation via WhatsApp." },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`seo-item reveal-${i % 2 === 0 ? "left" : "right"}`}
                  ref={(el) => (seoRefs.current[i + 4] = el)}
                >
                  <div className="seo-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= INFO BANNER ================= */}
        <div className="info-banner">
          <FaMapMarkerAlt className="banner-icon" />
          <span> pickup & drop at any location in Tirupati, Renigunta & Tirupati Airport. Fuel not included. No hidden charges.</span>
        </div>
      </main>

      {/* ================= MODAL ================= */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal} aria-modal="true" role="dialog">
          <div className="modal-container" onClick={(e) => e.stopPropagation()} ref={modalRef}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              <FaTimes />
            </button>

            <h2 className="modal-title">Complete Your <span className="gold">Booking</span></h2>

            {selectedCar && (
              <div className="selected-car-info">
                <img src={selectedCar.image} alt={selectedCar.name} className="modal-car-image" />
                <div>
                  <h3>{selectedCar.name}</h3>
                  <p className="modal-car-price">₹{selectedCar.price}/day</p>
                  <p className="fuel-note">Fuel not included -  pickup in Tirupati</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="modal-name"><FaUser className="input-icon" /> Full Name <span className="required">*</span></label>
                  <input type="text" id="modal-name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" className={errors.name ? "error" : ""} />
                  {errors.name && <span className="error-text"><FaExclamationCircle /> {errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="modal-phone"><FaPhone className="input-icon" /> Phone Number <span className="required">*</span></label>
                  <input type="tel" id="modal-phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="10-digit mobile number" className={errors.phone ? "error" : ""} />
                  {errors.phone && <span className="error-text"><FaExclamationCircle /> {errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="modal-email"><FaEnvelope className="input-icon" /> Email <span className="required">*</span></label>
                  <input type="email" id="modal-email" name="email" value={formData.email} onChange={handleChange} placeholder="neelandarnkr@gmail.com" className={errors.email ? "error" : ""} />
                  {errors.email && <span className="error-text"><FaExclamationCircle /> {errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="modal-pickupLocation"><FaMapMarkerAlt className="input-icon" /> Pickup Location <span className="required">*</span></label>
                  <input type="text" id="modal-pickupLocation" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} placeholder="e.g., Tirupati Railway Station" className={errors.pickupLocation ? "error" : ""} />
                  {errors.pickupLocation && <span className="error-text"><FaExclamationCircle /> {errors.pickupLocation}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="modal-pickupDate"><FaCalendarAlt className="input-icon" /> Pickup Date <span className="required">*</span></label>
                  <input type="date" id="modal-pickupDate" name="pickupDate" value={formData.pickupDate} onChange={handleChange} min={new Date().toISOString().split("T")[0]} className={errors.pickupDate ? "error" : ""} />
                  {errors.pickupDate && <span className="error-text"><FaExclamationCircle /> {errors.pickupDate}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="modal-pickupTime"><FaClock className="input-icon" /> Pickup Time <span className="required">*</span></label>
                  <input type="time" id="modal-pickupTime" name="pickupTime" value={formData.pickupTime} onChange={handleChange} className={errors.pickupTime ? "error" : ""} />
                  {errors.pickupTime && <span className="error-text"><FaExclamationCircle /> {errors.pickupTime}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="modal-days"><FaCalendarAlt className="input-icon" /> Number of Days <span className="required">*</span></label>
                  <input type="number" id="modal-days" name="days" value={formData.days} onChange={handleChange} min="1" step="1" className={errors.days ? "error" : ""} />
                  {errors.days && <span className="error-text"><FaExclamationCircle /> {errors.days}</span>}
                </div>
              </div>

              {totalPrice > 0 && (
                <div className="price-summary">
                  <p className="total-price">
                    <span>Total for {formData.days} day{formData.days > 1 ? "s" : ""}:</span>
                    <span>₹{totalPrice}</span>
                  </p>
                  <p className="fuel-note-modal"><FaExclamationCircle /> Fuel not included.  pickup. Extra km charges may apply.</p>
                </div>
              )}

              <button type="submit" className="submit-btn" aria-label="Book via WhatsApp">
                <FaWhatsapp className="btn-icon" /> Confirm Booking via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

/* =========================================================
   STYLES
   ========================================================= */
const bookingStyles = `
  :root {
    --gold: #e6b23a;
    --gold-2: #f5d76e;
    --gold-deep: #b8860b;
    --line: rgba(230,178,58,0.35);
    --whatsapp: #25d366;
    --whatsapp-dark: #128c7e;
  }

  .booking-page {
    font-family: 'Segoe UI', 'Poppins', system-ui, -apple-system, sans-serif;
    background: #fff;
    color: #1a1a1a;
    overflow-x: hidden;
  }

  /* ---------- HERO ---------- */
  .booking-hero {
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

  .booking-hero::before {
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

  .hero-content {
    position: relative; z-index: 2; max-width: 900px; margin: 0 auto;
  }

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

  /* ---------- CARS GRID ---------- */
  .cars-section { max-width: 1300px; margin: 0 auto; padding: 70px 24px; }
  .cars-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; perspective: 1400px; }

  .car-card {
    background: #fff; border-radius: 18px; overflow: hidden;
    border: 1px solid rgba(0,0,0,0.08);
    box-shadow: 0 6px 18px rgba(0,0,0,0.05);
    transition: transform .5s cubic-bezier(.2,.8,.2,1), box-shadow .5s ease, border-color .35s ease;
  }
  .car-card:hover {
    transform: translateY(-10px) rotateX(1deg);
    box-shadow: 0 26px 60px rgba(0,0,0,.18), 0 0 0 1px rgba(230,178,58,.35);
    border-color: rgba(230,178,58,.55);
  }

  .car-image-wrapper {
    position: relative; overflow: hidden; height: 200px;
    background: #0a0a0a; isolation: isolate;
  }
  .car-image {
    width: 100%; height: 100%; object-fit: cover;
    transform-origin: 52% 55%;
    animation: carCruise 8s ease-in-out infinite;
    will-change: transform, filter; filter: saturate(1.05) contrast(1.02);
    transition: filter .4s ease;
  }
  .car-card:nth-child(2n) .car-image { animation-delay: -2.2s; }
  .car-card:nth-child(3n) .car-image { animation-delay: -4.4s; }
  .car-card:hover .car-image { animation-play-state: paused; transform: scale(1.12); filter: saturate(1.18) contrast(1.08); }

  .car-image-shine {
    position: absolute; inset: 0; z-index: 2; pointer-events: none;
    background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,.22) 48%, rgba(230,178,58,.18) 52%, transparent 72%);
    transform: translateX(-130%); animation: imageShine 6s ease-in-out infinite;
  }
  .car-card:hover .car-image-shine { animation-duration: 1.6s; }

  .car-price-tag {
    position: absolute; bottom: 12px; right: 12px; z-index: 3;
    display: inline-flex; align-items: center; gap: 4px;
    background: rgba(10,10,10,.88); color: var(--gold);
    backdrop-filter: blur(10px); padding: 8px 14px; border-radius: 999px;
    font-weight: 800; font-size: 1rem; border: 1px solid rgba(230,178,58,.5);
    box-shadow: 0 6px 20px rgba(0,0,0,.35);
    transition: transform .3s ease, box-shadow .3s ease;
  }
  .car-price-tag span { font-size: .72rem; font-weight: 500; color: #fff; margin-left: 2px; opacity: .85; }
  .car-card:hover .car-price-tag { transform: translateY(-3px) scale(1.04); box-shadow: 0 10px 26px rgba(0,0,0,.45); }

  .car-badge-speed {
    position: absolute; top: 12px; left: 12px; z-index: 3;
    display: inline-flex; align-items: center; gap: 5px;
    background: linear-gradient(135deg, #e6b23a, #f5d76e); color: #000;
    font-weight: 800; font-size: .7rem; letter-spacing: .08em;
    text-transform: uppercase; padding: 5px 10px; border-radius: 999px;
    box-shadow: 0 4px 14px rgba(230,178,58,.45);
    animation: badgePulse 2.4s ease-in-out infinite;
  }
  .car-badge-speed svg { font-size: .7rem; }

  @keyframes carCruise {
    0%, 100% { transform: scale(1.04) translate3d(-1%, 0, 0); }
    50% { transform: scale(1.12) translate3d(1.4%, -.6%, 0); }
  }
  @keyframes imageShine {
    0%, 15% { transform: translateX(-130%); opacity: 0; }
    30% { opacity: 1; }
    65%, 100% { transform: translateX(130%); opacity: 0; }
  }
  @keyframes badgePulse {
    0%, 100% { box-shadow: 0 4px 14px rgba(230,178,58,.45), 0 0 0 0 rgba(230,178,58,.5); }
    50% { box-shadow: 0 4px 18px rgba(230,178,58,.65), 0 0 0 6px rgba(230,178,58,0); }
  }

  .car-details { padding: 20px 22px 22px; }
  .car-name { font-size: 1.2rem; font-weight: 800; margin: 0 0 10px; color: #111; }
  .car-features { display: flex; flex-wrap: wrap; gap: 14px; color: #6b6b6b; font-size: .88rem; margin-bottom: 12px; }
  .car-features span { display: inline-flex; align-items: center; gap: 6px; }
  
  .feature-list { list-style: none; margin: 0 0 18px; padding: 0; color: #444; font-size: .88rem; line-height: 1.7; }
  .feature-list li { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
  .feat-icon { color: var(--gold-deep); font-size: .82rem; min-width: 12px; }

  .book-btn {
    display: inline-flex; align-items: center; justify-content: center;
    background: linear-gradient(135deg, var(--gold-2), var(--gold));
    color: #000; padding: 14px; border-radius: 12px;
    font-weight: 800; font-size: 1rem; text-decoration: none;
    border: none; cursor: pointer; width: 100%;
    transition: transform .3s ease, box-shadow .3s ease;
    box-shadow: 0 8px 20px rgba(230,178,58,.35);
    position: relative; overflow: hidden;
  }
  .book-btn::before {
    content: ""; position: absolute; top: 0; left: -80%;
    width: 50%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent);
    transform: skewX(-20deg); animation: btnShine 4.5s ease-in-out infinite;
  }
  .book-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 30px rgba(230,178,58,.5); }
  @keyframes btnShine {
    0%, 60% { left: -80%; }
    85%, 100% { left: 130%; }
  }

  /* WhatsApp Secondary Button */
  .btn-whatsapp {
    display: inline-flex; align-items: center; justify-content: center;
    gap: 8px; padding: 12px; border-radius: 12px;
    font-weight: 700; font-size: 0.95rem; text-decoration: none;
    cursor: pointer; width: 100%; border: 1px solid rgba(255,255,255,0.18);
    background: linear-gradient(135deg, var(--whatsapp), var(--whatsapp-dark));
    color: #fff; box-shadow: 0 6px 18px rgba(37,211,102,0.3);
    transition: transform .3s ease, box-shadow .3s ease, filter .3s ease;
    position: relative; overflow: hidden;
  }
  .btn-whatsapp::before {
    content: ""; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,.22), transparent 55%);
    pointer-events: none;
  }
  .btn-whatsapp:hover {
    transform: translateY(-3px); box-shadow: 0 12px 28px rgba(37,211,102,.5);
    filter: brightness(1.05);
  }
  .wa-btn-icon { font-size: 1.15rem; }
  .fleet-wa-btn { margin-top: 10px; }

  /* ---------- SEO CONTENT ---------- */
  .seo-content {
    background: linear-gradient(180deg, #fdf9ee 0%, #ffffff 100%);
    padding: 70px 24px;
    border-top: 1px solid rgba(230,178,58,0.2);
    border-bottom: 1px solid rgba(230,178,58,0.2);
  }
  .seo-container { max-width: 1300px; margin: 0 auto; }
  .seo-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }

  .seo-item {
    background: #fff; padding: 32px 28px; border-radius: 18px;
    border: 1px solid rgba(0,0,0,0.07); box-shadow: 0 6px 18px rgba(0,0,0,0.04);
    transition: transform .4s ease, box-shadow .4s ease, border-color .3s ease;
  }
  .seo-item:hover {
    transform: translateY(-6px); border-color: rgba(230,178,58,.55);
    box-shadow: 0 18px 40px rgba(0,0,0,.08);
  }
  
  .seo-icon {
    font-size: 2rem; margin-bottom: 14px;
    display: inline-block; animation: iconFloat 3s ease-in-out infinite;
  }
  .seo-item:nth-child(2) .seo-icon { animation-delay: .3s; }
  .seo-item:nth-child(3) .seo-icon { animation-delay: .6s; }
  .seo-item:nth-child(4) .seo-icon { animation-delay: .9s; }
  @keyframes iconFloat {
    0%, 100% { transform: translateY(0) rotate(0); }
    50% { transform: translateY(-6px) rotate(-4deg); }
  }

  .seo-item h3 { font-size: 1.2rem; font-weight: 800; color: #111; margin: 0 0 10px; }
  .seo-item p { color: #555; line-height: 1.7; font-size: 0.94rem; margin: 0; }

  /* ---------- INFO BANNER ---------- */
  .info-banner {
    background: #0a0a0a; color: #c8c8c8; text-align: center;
    padding: 24px 24px; font-size: 1.05rem; font-weight: 500;
    display: flex; align-items: center; justify-content: center; gap: 12px;
    border-top: 1px solid var(--line);
  }
  .info-banner .banner-icon {
    font-size: 1.5rem; color: var(--gold);
    animation: bounce 2s infinite;
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  /* ---------- MODAL ---------- */
  .modal-overlay {
    position: fixed; inset: 0; background: rgba(0,0,0,.65);
    display: flex; align-items: center; justify-content: center;
    z-index: 1000; padding: 20px; backdrop-filter: blur(8px);
    animation: fadeIn 0.3s ease-out;
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  .modal-container {
    background: #fff; border-radius: 20px; max-width: 640px; width: 100%;
    max-height: 90vh; overflow-y: auto; padding: 34px 30px;
    position: relative; box-shadow: 0 30px 80px rgba(0,0,0,.5);
    border: 1px solid rgba(230,178,58,.3);
    animation: slideUp 0.4s cubic-bezier(.2,.75,.25,1);
  }
  @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }

  .modal-close {
    position: absolute; top: 20px; right: 20px;
    background: #f1f5f9; border: none; font-size: 1.2rem;
    cursor: pointer; color: #64748b; width: 38px; height: 38px;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    transition: background .2s, color .2s, transform .2s;
  }
  .modal-close:hover { background: #e2e8f0; color: #b8860b; transform: rotate(90deg); }

  .modal-title {
    font-family: Georgia, serif; font-size: 1.8rem;
    color: #111; margin: 0 0 24px; text-align: center; font-weight: 700;
  }
  .modal-title .gold { color: var(--gold-deep); }

  .selected-car-info {
    display: flex; align-items: center; gap: 16px;
    background: linear-gradient(180deg, #fdf9ee 0%, #fff 100%);
    border-radius: 14px; padding: 16px; margin-bottom: 24px;
    border: 1px solid rgba(230,178,58,.3);
  }
  .modal-car-image { width: 100px; height: 70px; object-fit: cover; border-radius: 8px; }
  .selected-car-info h3 { color: #111; margin: 0 0 4px; font-size: 1.15rem; }
  .modal-car-price { font-weight: 800; color: var(--gold-deep); font-size: 1.1rem; margin: 0; }
  .fuel-note { font-size: 0.8rem; color: #b45309; font-weight: 600; margin-top: 4px; }

  /* Form */
  .form-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 20px; }
  .form-group { display: flex; flex-direction: column; }
  .form-group label {
    font-weight: 600; font-size: 0.9rem; margin-bottom: 6px; color: #111;
    display: flex; align-items: center; gap: 6px;
  }
  .input-icon { color: var(--gold-deep); font-size: 0.9rem; }
  .required { color: #dc2626; }

  .form-group input {
    padding: 12px 14px; border: 2px solid #e2e8f0; border-radius: 10px;
    font-size: 0.95rem; transition: border-color 0.3s, box-shadow 0.3s; background: #f9fafc;
  }
  .form-group input:focus {
    outline: none; border-color: var(--gold); background: #fff;
    box-shadow: 0 0 0 3px rgba(230,178,58,.15);
  }
  .form-group input.error { border-color: #dc2626; background: #fef2f2; }
  .error-text { color: #dc2626; font-size: 0.78rem; margin-top: 4px; display: flex; align-items: center; gap: 4px; }

  .price-summary {
    background: #fff; border: 2px dashed rgba(230,178,58,.6);
    border-radius: 14px; padding: 18px; margin-bottom: 24px;
  }
  .total-price {
    display: flex; justify-content: space-between; align-items: center;
    font-size: 1.2rem; font-weight: 800; color: #111; margin: 0;
  }
  .total-price span:last-child { color: var(--gold-deep); font-size: 1.3rem; }
  .fuel-note-modal { font-size: 0.8rem; color: #b45309; margin-top: 8px; display: flex; align-items: center; gap: 4px; }

  .submit-btn {
    background: linear-gradient(135deg, var(--whatsapp), var(--whatsapp-dark));
    color: white; border: none; padding: 16px; border-radius: 12px;
    font-size: 1.1rem; font-weight: 700; display: flex; align-items: center;
    justify-content: center; gap: 10px; width: 100%; cursor: pointer;
    transition: transform .3s ease, box-shadow .3s ease, filter .3s ease;
    min-height: 54px; box-shadow: 0 10px 24px rgba(37,211,102,.4);
  }
  .submit-btn:hover {
    transform: translateY(-3px); filter: brightness(1.05);
    box-shadow: 0 16px 36px rgba(37,211,102,.6);
  }
  .btn-icon { font-size: 1.3rem; }

  /* ---------- SCROLL REVEAL ---------- */
  .reveal-left, .reveal-right, .reveal-up {
    opacity: 0;
    transition: opacity .8s cubic-bezier(.2,.75,.25,1), transform .8s cubic-bezier(.2,.75,.25,1);
    will-change: transform, opacity;
  }
  .reveal-left { transform: translateX(-60px); }
  .reveal-right { transform: translateX(60px); }
  .reveal-up { transform: translateY(40px); }
  
  .reveal-left.in-view, .reveal-right.in-view, .reveal-up.in-view {
    opacity: 1; transform: translate(0, 0);
  }

  /* ---------- RESPONSIVE ---------- */
  @media (max-width: 1024px) {
    .cars-grid { grid-template-columns: repeat(2, 1fr); }
    .seo-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 768px) {
    .booking-hero { padding: 70px 18px 50px; min-height: auto; }
    .hero-title { font-size: clamp(2rem, 8vw, 2.6rem); }
    .cars-grid { grid-template-columns: 1fr; }
    .form-grid { grid-template-columns: 1fr; }
    .modal-container { padding: 24px 20px; }
    .selected-car-info { flex-direction: column; text-align: center; }
    .modal-car-image { width: 100%; height: 140px; }
  }

  @media (max-width: 420px) {
    .hero-title { font-size: 1.9rem; }
    .modal-title { font-size: 1.5rem; }
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
    }
    .car-image, .car-image-shine { animation: none !important; }
  }
`;

export default Booking;