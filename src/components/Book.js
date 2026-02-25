import { useState, useEffect, useRef, useMemo} from "react";
import { Helmet } from "react-helmet";
import { 
  FaUser, FaGasPump, FaRupeeSign, FaMapMarkerAlt, FaClock, 
  FaEnvelope, FaPhone, FaCalendarAlt, FaWhatsapp, FaTimes,
  FaCheckCircle, FaExclamationCircle
} from "react-icons/fa";

function Booking() {
  // Refs for scroll animations
  const carCardsRef = useRef([]);
  const modalRef = useRef(null);

  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for form fields
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

  // State for validation errors
  const [errors, setErrors] = useState({});

  // State for calculated total price
  const [totalPrice, setTotalPrice] = useState(0);

  // Cars data (with added "Fuel not included" feature)
  const cars = useMemo(() => [
    {
      id: 1,
      name: "Maruti Suzuki Ertiga",
      image: "/images/ertiga.jpg",
      seats: 7,
      fuel: "CNG & Petrol",
      price: 3000,
      features: ["7 Seater", "CNG & Petrol", "250 km/day", "Extra ₹10/km", "Fuel not included"],
    },
    {
      id: 2,
      name: "Kia Carens",
      image: "/images/carens.jpg",
      seats: 7,
      fuel: "Diesel",
      price: 3500,
      features: ["7 Seater", "Diesel", "250 km/day", "Extra ₹10/km", "Fuel not included"],
    },
    {
      id: 3,
      name: "Tata Nexon",
      image: "/images/nexon.jpg",
      seats: 5,
      fuel: "Petrol & CNG",
      price: 2700,
      features: ["5 Seater", "Petrol & CNG", "250 km/day", "Extra ₹10/km", "Fuel not included"],
    },
    {
      id: 4,
      name: "Tata Tiago",
      image: "/images/tiago.jpg",
      seats: 5,
      fuel: "Petrol",
      price: 2000,
      features: ["5 Seater", "Petrol", "250 km/day", "Extra ₹10/km", "Fuel not included"],
    },
    {
      id: 5,
      name: "Swift Diesel",
      image: "/images/swift.jpg",
      seats: 5,
      fuel: "Diesel",
      price: 1800,
      features: ["5 Seater", "Diesel", "250 km/day", "Extra ₹10/km", "Fuel not included"],
    },
    {
      id: 6,
      name: "Swift Dzire",
      image: "/images/dzire.jpg",
      seats: 5,
      fuel: "Petrol",
      price: 2200,
      features: ["5 Seater", "Petrol", "250 km/day", "Extra ₹10/km", "Fuel not included"],
    },
  ], []);

  // Sort cars by price
  const sortedCars = [...cars].sort((a, b) => a.price - b.price);

  // Update total price when selected car or days change
  useEffect(() => {
    if (formData.selectedCarId && formData.days > 0) {
      const selectedCar = cars.find(car => car.id === formData.selectedCarId);
      if (selectedCar) {
        setTotalPrice(selectedCar.price * formData.days);
      }
    } else {
      setTotalPrice(0);
    }
  }, [formData.selectedCarId, formData.days, cars]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = bookingStyles;
    document.head.appendChild(style);

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

    carCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Handle modal open
  const openModal = (carId) => {
    setFormData(prev => ({ ...prev, selectedCarId: carId }));
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Handle modal close
  const closeModal = () => {
    setIsModalOpen(false);
    setErrors({});
    setFormData({
      name: '',
      phone: '',
      email: '',
      pickupLocation: '',
      pickupDate: '',
      pickupTime: '',
      days: 1,
      selectedCarId: null
    });
    document.body.style.overflow = 'auto';
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isModalOpen]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const phoneRegex = /^(\+91|0)?[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit Indian mobile number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = 'Pickup location is required';
    }

    // Date and time validation
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!formData.pickupDate) {
      newErrors.pickupDate = 'Pickup date is required';
    } else {
      const selectedDate = new Date(formData.pickupDate);
      selectedDate.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.pickupDate = 'Pickup date must be today or later';
      }
    }

    if (!formData.pickupTime) {
      newErrors.pickupTime = 'Pickup time is required';
    } else {
      // If date is valid, also check that the combined datetime is in the future
      if (formData.pickupDate) {
        const selectedDateTime = new Date(`${formData.pickupDate}T${formData.pickupTime}`);
        const now = new Date();
        if (selectedDateTime < now) {
          newErrors.pickupTime = 'Pickup time must be in the future';
        }
      }
    }

    if (!formData.days || formData.days < 1) {
      newErrors.days = 'Number of days must be at least 1';
    } else if (!Number.isInteger(Number(formData.days))) {
      newErrors.days = 'Days must be a whole number';
    }

    if (!formData.selectedCarId) {
      newErrors.selectedCarId = 'Please select a car';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const selectedCar = cars.find(car => car.id === formData.selectedCarId);
      // Format date and time for WhatsApp
      const pickupDateTime = new Date(`${formData.pickupDate}T${formData.pickupTime}`);
      const formattedDate = pickupDateTime.toLocaleDateString('en-IN', {
        day: 'numeric', month: 'short', year: 'numeric'
      });
      const formattedTime = pickupDateTime.toLocaleTimeString('en-IN', {
        hour: '2-digit', minute: '2-digit'
      });

      const message = `Booking Request:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Car: ${selectedCar.name}
Pickup Location: ${formData.pickupLocation}
Pickup Date: ${formattedDate}
Pickup Time: ${formattedTime}
Days: ${formData.days}
*Note: Fuel not included in the price. Extra km charges apply as per car policy.*`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/918660014029?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      closeModal();
    }
  };

  // Get selected car details
  const selectedCar = formData.selectedCarId ? cars.find(c => c.id === formData.selectedCarId) : null;

  // ENHANCED SEO structured data - Added location and more details
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": "Self Drive Car Rental Booking - Tirupati & Renigunta",
        "description": "Book self-drive cars in Tirupati and Renigunta. Instant WhatsApp booking. Free pickup & drop. Fuel not included.",
        "brand": {
          "@type": "Brand",
          "name": "NKR Self Drive"
        },
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
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://nkrselfdrivecarrentals.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Book Self Drive Car",
            "item": "https://nkrselfdrivecarrentals.in/book"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        {/* Primary Title with Location Keywords */}
        <title>Book Self Drive Cars in Tirupati & Renigunta | Instant WhatsApp Booking | NKR Self Drive</title>
        
        {/* Meta Description - Rich with keywords and prices */}
        <meta name="description" content="Book self drive cars in Tirupati and Renigunta instantly. Choose from Ertiga (₹3000/day), Carens (₹3500), Nexon (₹2700), Swift (₹1800). Free pickup & drop. Fuel not included. Confirm via WhatsApp." />
        
        {/* Meta Keywords */}
        <meta name="keywords" content="book self drive car Tirupati, self drive cars Renigunta, car rental booking Tirupati, Ertiga on rent, Carens hire, Nexon self drive, Swift Dzire booking, instant car booking, fuel not included, free pickup drop Tirupati" />
        
        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Tirupati, Renigunta, Andhra Pradesh" />
        <meta name="geo.position" content="13.6288;79.4192" />
        <meta name="ICBM" content="13.6288, 79.4192" />
        
        {/* Robots - Allow indexing */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://nkrselfdrivecarrentals.in/book" />
        
        {/* Alternate for Mobile */}
        <link rel="alternate" media="only screen and (max-width: 640px)" href="https://nkrselfdrivecarrentals.in/book" />

        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nkrselfdrivecarrentals.in/book" />
        <meta property="og:title" content="Book Self-Drive Cars in Tirupati & Renigunta - Starting ₹1800/day" />
        <meta property="og:description" content="Instant booking via WhatsApp. Free pickup & drop anywhere in Tirupati & Renigunta. Fuel not included - pay only for what you use. Wide fleet available." />
        <meta property="og:image" content="https://nkrselfdrivecarrentals.in/og-booking.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="NKR Self Drive" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nkrselfdrive" />
        <meta name="twitter:creator" content="@nkrselfdrive" />
        <meta name="twitter:title" content="Book Self-Drive Cars in Tirupati - NKR Self Drive" />
        <meta name="twitter:description" content="Instant booking via WhatsApp. Free pickup & drop in Tirupati & Renigunta. Fuel not included." />
        <meta name="twitter:image" content="https://nkrselfdrivecarrentals.in/og-booking.jpg" />

        {/* Additional SEO Meta Tags */}
        <meta name="author" content="NKR Self Drive" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="target" content="all" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="booking-page">
        {/* Hero Section */}
        <section className="booking-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">Book Your Self-Drive Car in Tirupati & Renigunta</h1>
            <p className="hero-subtitle">
              Select a car, click "Book Now", fill in your details, and confirm instantly via WhatsApp.
              Free pickup & drop anywhere in Tirupati & Renigunta. <strong>Fuel not included</strong> – pay only for what you use.
            </p>
          </div>
        </section>

        {/* Cars Grid */}
        <section className="cars-section" aria-labelledby="cars-heading">
          <h2 id="cars-heading" className="section-title">Our Fleet – Choose Your Self-Drive Car in Tirupati</h2>
          <div className="cars-grid">
            {sortedCars.map((car, index) => (
              <article
                key={car.id}
                className="car-card"
                ref={(el) => (carCardsRef.current[index] = el)}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="car-image-wrapper">
                  <img src={car.image} alt={`${car.name} - Self Drive Car in Tirupati`} className="car-image" loading="lazy" />
                  <div className="car-price-tag">
                    <FaRupeeSign aria-hidden="true" /> {car.price}<span className="price-unit">/day</span>
                  </div>
                </div>
                <div className="car-details">
                  <h3 className="car-name">{car.name}</h3>
                  <div className="car-features">
                    <span><FaUser aria-hidden="true" /> {car.seats} Seats</span>
                    <span><FaGasPump aria-hidden="true" /> {car.fuel}</span>
                  </div>
                  <ul className="feature-list">
                    {car.features.map((feature, i) => (
                      <li key={i}><FaCheckCircle className="feature-icon-small" /> {feature}</li>
                    ))}
                  </ul>
                  <button 
                    className="book-btn" 
                    onClick={() => openModal(car.id)}
                    aria-label={`Book ${car.name} in Tirupati`}
                  >
                    Book Now
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SEO Friendly Content Section */}
        <section className="seo-content">
          <div className="seo-container">
            <h2>Why Choose NKR Self Drive for Your Tirupati Trip?</h2>
            <div className="seo-grid">
              <div className="seo-item">
                <h3>🚗 Wide Range of Cars in Tirupati</h3>
                <p>From compact hatchbacks like Swift to spacious SUVs like Carens – we have a car for every need and budget in Tirupati and Renigunta.</p>
              </div>
              <div className="seo-item">
                <h3>⛽ Fuel Not Included - Transparent Pricing</h3>
                <p>We believe in transparency. You pay only for the car rental; fuel is extra based on your usage. No hidden fuel markups in Tirupati.</p>
              </div>
              <div className="seo-item">
                <h3>📍 Free Pickup & Drop in Tirupati & Renigunta</h3>
                <p>We deliver the car to your doorstep in Tirupati or Renigunta and pick it up after your rental – absolutely free.</p>
              </div>
              <div className="seo-item">
                <h3>📱 Instant WhatsApp Booking - No Calls</h3>
                <p>Fill the form and confirm your booking in seconds via WhatsApp. No calls, no waiting. Best self drive car booking experience in Tirupati.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location-Specific SEO Content - NEW but doesn't change existing structure */}
        <section className="seo-content" style={{marginTop: '0'}}>
          <div className="seo-container">
            <h2>Self Drive Cars Available in Tirupati and Renigunta</h2>
            <div className="seo-grid">
              <div className="seo-item">
                <h3>📍 Car Rental in Tirupati</h3>
                <p>Book self drive cars in Tirupati at Railway Station, Bus Stand, Alipiri, and all major locations. Free pickup and drop anywhere in Tirupati city.</p>
              </div>
              <div className="seo-item">
                <h3>📍 Self Drive Cars in Renigunta</h3>
                <p>We deliver self drive cars to Renigunta Railway Junction, Bus Stand, and near Tirupati Airport. Best car rental service in Renigunta.</p>
              </div>
              <div className="seo-item">
                <h3>💰 Best Prices in Tirupati</h3>
                <p>Self drive cars in Tirupati starting from just ₹1800 per day. Ertiga at ₹3000, Carens at ₹3500, Nexon at ₹2700. Most affordable rates.</p>
              </div>
              <div className="seo-item">
                <h3>⏰ 24/7 Availability</h3>
                <p>Book self drive cars anytime in Tirupati and Renigunta. We operate 24/7 for your convenience. Instant confirmation via WhatsApp.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Info Banner */}
        <div className="info-banner">
          <FaMapMarkerAlt className="banner-icon" />
          <span>Free pickup & drop at any location in Tirupati, Renigunta & Tirupati Airport. Fuel not included. No hidden charges. Best self drive cars in Tirupati!</span>
        </div>
      </main>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal} aria-modal="true" role="dialog">
          <div className="modal-container" onClick={(e) => e.stopPropagation()} ref={modalRef}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              <FaTimes />
            </button>

            <h2 className="modal-title">Complete Your Booking in Tirupati</h2>
            {selectedCar && (
              <div className="selected-car-info">
                <img src={selectedCar.image} alt={selectedCar.name} className="modal-car-image" />
                <div>
                  <h3>{selectedCar.name} - Self Drive in Tirupati</h3>
                  <p className="modal-car-price">₹{selectedCar.price}/day</p>
                  <p className="fuel-note">Fuel not included - Free pickup in Tirupati & Renigunta</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="modal-name">
                    <FaUser className="input-icon" /> Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-text"><FaExclamationCircle /> {errors.name}</span>}
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="modal-phone">
                    <FaPhone className="input-icon" /> Phone Number <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="modal-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <span className="error-text"><FaExclamationCircle /> {errors.phone}</span>}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="modal-email">
                    <FaEnvelope className="input-icon" /> Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="neelandarnkr@gmail.com"
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-text"><FaExclamationCircle /> {errors.email}</span>}
                </div>

                {/* Pickup Location */}
                <div className="form-group">
                  <label htmlFor="modal-pickupLocation">
                    <FaMapMarkerAlt className="input-icon" /> Pickup Location <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="modal-pickupLocation"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    placeholder="e.g., Tirupati Railway Station, Renigunta Junction"
                    className={errors.pickupLocation ? 'error' : ''}
                  />
                  {errors.pickupLocation && <span className="error-text"><FaExclamationCircle /> {errors.pickupLocation}</span>}
                </div>

                {/* Pickup Date */}
                <div className="form-group">
                  <label htmlFor="modal-pickupDate">
                    <FaCalendarAlt className="input-icon" /> Pickup Date <span className="required">*</span>
                  </label>
                  <input
                    type="date"
                    id="modal-pickupDate"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={errors.pickupDate ? 'error' : ''}
                  />
                  {errors.pickupDate && <span className="error-text"><FaExclamationCircle /> {errors.pickupDate}</span>}
                </div>

                {/* Pickup Time */}
                <div className="form-group">
                  <label htmlFor="modal-pickupTime">
                    <FaClock className="input-icon" /> Pickup Time <span className="required">*</span>
                  </label>
                  <input
                    type="time"
                    id="modal-pickupTime"
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleChange}
                    className={errors.pickupTime ? 'error' : ''}
                  />
                  {errors.pickupTime && <span className="error-text"><FaExclamationCircle /> {errors.pickupTime}</span>}
                </div>

                {/* Number of Days */}
                <div className="form-group">
                  <label htmlFor="modal-days">
                    <FaCalendarAlt className="input-icon" /> Number of Days <span className="required">*</span>
                  </label>
                  <input
                    type="number"
                    id="modal-days"
                    name="days"
                    value={formData.days}
                    onChange={handleChange}
                    min="1"
                    step="1"
                    className={errors.days ? 'error' : ''}
                  />
                  {errors.days && <span className="error-text"><FaExclamationCircle /> {errors.days}</span>}
                </div>
              </div>

              {/* Price Summary */}
              {totalPrice > 0 && (
                <div className="price-summary">
                  <p className="total-price">
                    <span>Total for {formData.days} day{formData.days > 1 ? 's' : ''} in Tirupati:</span>
                    <span>₹{totalPrice}</span>
                  </p>
                  <p className="fuel-note-modal"><FaExclamationCircle /> Fuel not included. Free pickup in Tirupati & Renigunta. Extra km charges may apply.</p>
                </div>
              )}

              {/* Submit Button */}
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

// Styles (including modal styles) – updated for new elements
const bookingStyles = `
  .booking-page {
    font-family: 'Segoe UI', 'Poppins', system-ui, sans-serif;
    background-color: #f4f7fb;
    color: #1e293b;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* Hero Section */
  .booking-hero {
    background: linear-gradient(135deg, #d7ebff, #ffffff, #f0f9ff);
    background-size: 300% 300%;
    animation: gradientShift 12s ease infinite;
    padding: clamp(2rem, 6vw, 3rem) 1rem;
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
    font-size: clamp(1.8rem, 5vw, 2.8rem);
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #0f2a40;
    text-shadow: 0 2px 4px rgba(0,0,0,0.05);
    animation: slideUp 0.6s ease-out;
  }

  .hero-subtitle {
    font-size: clamp(0.9rem, 2.5vw, 1.2rem);
    margin-bottom: 1rem;
    color: #334155;
    animation: slideUp 0.7s ease-out;
  }

  /* Section Titles */
  .section-title {
    font-size: clamp(1.5rem, 4vw, 2rem);
    text-align: center;
    margin: 2rem 1rem 1.5rem;
    color: #0f2a40;
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
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

  /* Cars Grid */
  .cars-section {
    padding: 1rem 1rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
  }

  .cars-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  .car-card {
    background-color: #ffffff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
    opacity: 0;
    transform: translateY(30px);
    border: 2px solid transparent;
    will-change: transform, opacity;
    position: relative;
  }

  .car-card.in-view {
    animation: fadeInUp 0.5s forwards;
  }

  .car-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  }

  .car-image-wrapper {
    position: relative;
    overflow: hidden;
    height: 180px;
  }

  .car-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .car-card:hover .car-image {
    transform: scale(1.05);
  }

  .car-price-tag {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: #1e4a76;
    color: white;
    padding: 0.4rem 0.8rem;
    border-radius: 30px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    font-size: 0.9rem;
  }

  .price-unit {
    font-size: 0.6rem;
    font-weight: 400;
    margin-left: 2px;
    opacity: 0.9;
  }

  .car-details {
    padding: 1rem;
  }

  .car-name {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #0f2a40;
  }

  .car-features {
    display: flex;
    gap: 0.8rem;
    margin-bottom: 0.8rem;
    font-size: 0.8rem;
    color: #475569;
    flex-wrap: wrap;
  }

  .car-features span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .feature-list {
    list-style: none;
    margin-bottom: 1rem;
    color: #334155;
    font-size: 0.8rem;
    line-height: 1.6;
  }

  .feature-list li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .feature-icon-small {
    color: #1e4a76;
    font-size: 0.8rem;
  }

  .book-btn {
    display: inline-block;
    background-color: transparent;
    color: #1e4a76;
    border: 2px solid #1e4a76;
    padding: 0.6rem 1rem;
    border-radius: 40px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    width: 100%;
    text-align: center;
    font-size: 1rem;
    cursor: pointer;
    min-height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .book-btn:hover {
    background-color: #1e4a76;
    color: white;
    transform: scale(1.02);
  }

  .book-btn:focus-visible {
    outline: 3px solid #f59e0b;
    outline-offset: 2px;
  }

  /* SEO Content Section */
  .seo-content {
    background: linear-gradient(135deg, #ffffff, #f0f9ff);
    padding: 2rem 1rem;
    margin: 2rem 0;
  }

  .seo-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .seo-container h2 {
    font-size: 2rem;
    color: #0f2a40;
    text-align: center;
    margin-bottom: 2rem;
  }

  .seo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
  }

  .seo-item {
    background: white;
    padding: 1.5rem;
    border-radius: 16px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  }

  .seo-item h3 {
    color: #1e4a76;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }

  .seo-item p {
    color: #334155;
    line-height: 1.6;
  }

  /* Info Banner */
  .info-banner {
    background-color: #d4edda;
    color: #155724;
    text-align: center;
    padding: 1rem;
    font-size: 1.1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    border-top: 2px solid #c3e6cb;
    margin-top: 2rem;
    flex-wrap: wrap;
  }

  .info-banner .banner-icon {
    font-size: 1.5rem;
    color: #28a745;
  }

  /* Modal Styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
    backdrop-filter: blur(5px);
    animation: fadeIn 0.3s ease-out;
  }

  .modal-container {
    background-color: white;
    border-radius: 24px;
    max-width: 600px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    padding: 2rem;
    position: relative;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
    animation: slideUp 0.4s ease-out;
  }

  .modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #64748b;
    transition: color 0.2s, transform 0.2s;
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-close:hover {
    color: #1e293b;
    transform: rotate(90deg);
    background-color: #f1f5f9;
  }

  .modal-title {
    font-size: 1.8rem;
    color: #0f2a40;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .selected-car-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: #f0f9ff;
    border-radius: 12px;
    padding: 1rem;
    margin-bottom: 1.5rem;
    border: 1px solid #b9d9f0;
  }

  .modal-car-image {
    width: 80px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
  }

  .selected-car-info h3 {
    color: #0f2a40;
    margin-bottom: 0.2rem;
  }

  .modal-car-price {
    font-weight: 700;
    color: #1e4a76;
  }

  .fuel-note {
    font-size: 0.8rem;
    color: #b45309;
    font-weight: 600;
    margin-top: 0.2rem;
  }

  /* Form inside modal */
  .form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.2rem;
    margin-bottom: 1.5rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .form-group label {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #1e293b;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .input-icon {
    color: #1e4a76;
    font-size: 1rem;
  }

  .required {
    color: #dc2626;
    margin-left: 0.2rem;
  }

  .form-group input {
    padding: 0.8rem 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    font-size: 1rem;
    transition: border-color 0.3s, box-shadow 0.3s;
    background-color: #f9fafc;
  }

  .form-group input:focus {
    outline: none;
    border-color: #1e4a76;
    box-shadow: 0 0 0 3px rgba(30, 74, 118, 0.1);
  }

  .form-group input.error {
    border-color: #dc2626;
    background-color: #fef2f2;
  }

  .error-text {
    color: #dc2626;
    font-size: 0.8rem;
    margin-top: 0.3rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .price-summary {
    background-color: #f0f9ff;
    border-radius: 12px;
    padding: 1rem;
    margin-bottom: 1.5rem;
    border: 1px solid #b9d9f0;
  }

  .total-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 600;
    color: #1e4a76;
  }

  .fuel-note-modal {
    font-size: 0.85rem;
    color: #b45309;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .submit-btn {
    background-color: #25D366;
    color: white;
    border: none;
    padding: 1rem 1.5rem;
    border-radius: 50px;
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    min-height: 60px;
  }

  .submit-btn:hover {
    background-color: #128C7E;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(37, 211, 102, 0.3);
  }

  .btn-icon {
    font-size: 1.5rem;
  }

  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

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

  /* Responsive */
  @media (max-width: 640px) {
    .modal-container {
      padding: 1.5rem;
    }
    .form-grid {
      grid-template-columns: 1fr;
    }
    .submit-btn {
      font-size: 1rem;
      padding: 0.8rem;
    }
    .selected-car-info {
      flex-direction: column;
      text-align: center;
    }
    .modal-car-image {
      width: 100%;
      height: auto;
    }
  }
`;

export default Booking;