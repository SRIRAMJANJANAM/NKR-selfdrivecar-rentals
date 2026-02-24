import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react"; // Added useState
import { Helmet } from "react-helmet";
import { 
  FaUser, FaGasPump, FaTachometerAlt, FaRupeeSign, FaStar, 
  FaMapMarkerAlt, FaRoad, FaMoneyBillWave, FaSnowflake, FaSun, FaCogs 
} from "react-icons/fa";

function Home() {
  // Add state for device detection
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  // Refs for scroll animations
  const carsRef = useRef([]);
  const featuresRef = useRef([]);

  useEffect(() => {
    // Add resize listener for device detection
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    
    window.addEventListener('resize', handleResize);

    // Inject custom styles (including all new animations)
    const style = document.createElement('style');
    style.innerHTML = homeStyles;
    document.head.appendChild(style);

    // Intersection Observer for scroll animations
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

    carsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    featuresRef.current.forEach((feature) => {
      if (feature) observer.observe(feature);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Helper function to get icon for feature text
  const getFeatureIcon = (feature) => {
    const lower = feature.toLowerCase();
    if (lower.includes('km') || lower.includes('distance')) return <FaRoad className="feature-icon-small" />;
    if (lower.includes('extra') || lower.includes('₹')) return <FaMoneyBillWave className="feature-icon-small" />;
    if (lower.includes('seater')) return <FaUser className="feature-icon-small" />;
    if (lower.includes('cng') || lower.includes('petrol') || lower.includes('diesel') || lower.includes('fuel')) return <FaGasPump className="feature-icon-small" />;
    if (lower.includes('sunroof')) return <FaSun className="feature-icon-small" />;
    if (lower.includes('ac') || lower.includes('air')) return <FaSnowflake className="feature-icon-small" />;
    if (lower.includes('automatic') || lower.includes('transmission')) return <FaCogs className="feature-icon-small" />;
    return null;
  };

  // Car data
  const cars = [
    {
      id: 1,
      name: "Maruti Suzuki Ertiga",
      image: "/images/ertiga.jpg",
      seats: 7,
      fuel: "CNG & Petrol",
      price: 3000,
      features: ["7 Seater", "CNG & Petrol", "250 km/day", "Extra ₹10/km"],
      description: "Spacious 7-seater MPV perfect for family trips.",
    },
    {
      id: 2,
      name: "Kia Carens",
      image: "/images/carens.jpg",
      seats: 7,
      fuel: "Diesel",
      price: 3500,
      features: ["7 Seater", "Diesel", "250 km/day", "Extra ₹10/km"],
      description: "Premium 7-seater with IMT diesel engine.",
    },
    {
      id: 3,
      name: "Tata Nexon",
      image: "/images/nexon.jpg",
      seats: 5,
      fuel: "Petrol & CNG",
      price: 2700,
      features: ["5 Seater", "Petrol & CNG", "Sunroof", "250 km/day", "Extra ₹10/km"],
      description: "Compact SUV with sunroof.",
    },
    {
      id: 4,
      name: "Tata Tiago",
      image: "/images/tiago.jpg",
      seats: 5,
      fuel: "Petrol",
      price: 2000,
      features: ["5 Seater", "Petrol", "250 km/day", "Extra ₹10/km"],
      description: "Hatchback perfect for city drives.",
    },
    {
      id: 5,
      name: "Swift Diesel",
      image: "/images/swift.jpg",
      seats: 5,
      fuel: "Diesel",
      price: 1800,
      features: ["5 Seater", "Diesel", "250 km/day", "Extra ₹10/km"],
      description: "Sporty diesel hatchback.",
    },
    {
      id: 6,
      name: "Swift Dzire",
      image: "/images/dzire.jpg",
      seats: 5,
      fuel: "Petrol",
      price: 2200,
      features: ["5 Seater", "Petrol", "250 km/day", "Extra ₹10/km"],
      description: "Sleek sedan with petrol engine.",
    },
  ];

  const sortedCars = [...cars].sort((a, b) => a.price - b.price);

  // Enhanced structured data with FAQ, Breadcrumb, and social profiles
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoRental",
        "@id": "https://nkrselfdrive.com/#organization",
        "name": "NKR Self Drive Cars",
        "description": "Best self-drive car rental in Tirupati with prices starting from ₹1800. Wide range of cars including Ertiga, Carens, Nexon, Swift, and more. Free pickup and drop.",
        "url": "https://nkrselfdrive.com",
        "logo": "https://nkrselfdrive.com/logo.png",
        "image": "https://nkrselfdrive.com/hero-bg.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Tirupati",
          "addressRegion": "Andhra Pradesh",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "13.6288",
          "longitude": "79.4192"
        },
        "telephone": "+91-1234567890",
        "priceRange": "₹1800 - ₹3500",
        "openingHours": "Mo-Su 00:00-23:59",
        "sameAs": [
          "https://www.facebook.com/share/1DcKcWZUBe/",
          "https://www.instagram.com/neelendar_reddy_nkr_?utm_source=qr&igsh=MWJ6YTN3OTN5bzRqYQ==",
          "https://twitter.com/nkrselfdrive"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "520",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Suresh K." },
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "Very clean cars and on-time delivery. Highly recommend!"
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya M." },
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "Best self-drive service in Tirupati. Free pickup & drop is a lifesaver."
          }
        ],
        "offers": sortedCars.map(car => ({
          "@type": "Offer",
          "name": car.name,
          "description": car.description,
          "price": car.price,
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": `https://nkrselfdrive.com/book?car=${car.id}`
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://nkrselfdrive.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://nkrselfdrive.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Cars",
            "item": "https://nkrselfdrive.com/cars"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Book Now",
            "item": "https://nkrselfdrive.com/book"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://nkrselfdrive.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the fuel policy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cars are provided with a full tank; you need to return them with a full tank."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a security deposit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, a refundable security deposit of ₹3000 is required at the time of pickup."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer delivery outside Tirupati?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Free pickup and drop is available anywhere in Tirupati and Renigunta. For other locations, please contact us."
            }
          },
          {
            "@type": "Question",
            "name": "What documents do I need?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You need a valid driving licence (both printed and digital are accepted) and a government ID proof (Aadhar, Voter ID, or Passport)."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Car Rental in Tirupati from ₹1800 | Best Self-Drive Cars NKR</title>
        <meta name="description" content="Book the best self-drive cars in Tirupati at affordable prices starting from ₹1800. Choose from Ertiga, Carens, Nexon, Swift, and more. Free pickup & drop anywhere in Tirupati & Renigunta. 24/7 service, well-maintained fleet, no hidden charges." />
        <meta name="keywords" content="car rental Tirupati, self drive cars Tirupati, Ertiga on rent Tirupati, Kia Carens rent, Tata Nexon self drive, Swift Dzire hire, best car rental in Tirupati, affordable car rental Tirupati, car hire near Renigunta, self drive cars Andhra Pradesh" />
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Tirupati" />
        <meta name="geo.position" content="13.6288;79.4192" />
        <meta name="ICBM" content="13.6288, 79.4192" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nkrselfdrive.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nkrselfdrive.com" />
        <meta property="og:title" content="NKR Self Drive Cars - Car Rental in Tirupati from ₹1800" />
        <meta property="og:description" content="Best self-drive car rental in Tirupati with prices starting from ₹1800. Free pickup & drop. Wide fleet including Ertiga, Carens, Nexon & more." />
        <meta property="og:image" content="https://nkrselfdrive.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nkrselfdrive.com" />
        <meta property="twitter:title" content="NKR Self Drive Cars - Car Rental in Tirupati from ₹1800" />
        <meta property="twitter:description" content="Best self-drive car rental in Tirupati with prices starting from ₹1800. Free pickup & drop. Wide fleet including Ertiga, Carens, Nexon & more." />
        <meta property="twitter:image" content="https://nkrselfdrive.com/og-image.jpg" />
        <meta property="twitter:site" content="@nkrselfdrive" />
        <meta property="twitter:creator" content="@nkrselfdrive" />

        <link rel="icon" href="/favicon.ico" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="home">
        {/* Hero Section */}
        <section className="hero" aria-label="Hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">Car Rentals starting from just  ₹1800 </h1>
            <p className="hero-subtitle">
              Free pickup & drop anywhere in Tirupati & Renigunta.
            </p>
            <Link to="/book" className="cta-button" aria-label="Book your ride now">Book Your Ride Now</Link>
          </div>
          <div className="hero-badge">
            <FaStar className="badge-icon" aria-hidden="true" /> 4.9 (100+ reviews)
          </div>
          {/* Only this line changed - conditional image source */}
          <img src={isDesktop ? "/images/venkat1.jpg" : "/images/venkat.jpg"} alt="Lord Venkateswara" className="hero-floating-image" loading="lazy" />
        </section>

        {/* Free Pickup/Drop Banner */}
        <div className="offer-banner" role="region" aria-label="Special offer">
          <FaMapMarkerAlt className="banner-icon" aria-hidden="true" />
          <span>🚐 Free Pickup & Drop at any location in Tirupati & Renigunta</span>
        </div>

        {/* SEO intro text above cars */}
        <div className="seo-intro">
          <p>
            At <strong>NKR Self Drive</strong>, we offer the <strong>best car rental services in Tirupati</strong> at unbeatable prices. 
            Our fleet includes fuel-efficient hatchbacks, spacious SUVs, and premium sedans – all available for self-drive. 
            With prices starting from <strong>₹1800 per day</strong>, enjoy a hassle-free journey with free pickup and drop anywhere in Tirupati and Renigunta.
          </p>
        </div>

        {/* Cars Grid */}
        <section className="cars-section" aria-labelledby="cars-heading">
          <h2 id="cars-heading" className="section-title">Our Fleet – Affordable Self-Drive Cars</h2>
          <div className="cars-grid">
            {sortedCars.map((car, index) => (
              <article
                key={car.id}
                className="car-card"
                ref={(el) => (carsRef.current[index] = el)}
                style={{ transitionDelay: `${index * 0.1}s` }}
                aria-label={`Car details for ${car.name}`}
              >
                <div className="car-image-wrapper">
                  <img src={car.image} alt={car.name} className="car-image" loading="lazy" />
                  <div className="car-price-tag">
                    <FaRupeeSign aria-hidden="true" /> {car.price}<span className="price-unit">/day</span>
                  </div>
                </div>
                <div className="car-details">
                  <h3 className="car-name">{car.name}</h3>
                  <div className="car-features">
                    <span><FaUser aria-hidden="true" /> {car.seats} Seats</span>
                    <span><FaGasPump aria-hidden="true" /> {car.fuel}</span>
                    <span><FaTachometerAlt aria-hidden="true" /> Fuel not included</span>
                  </div>
                  <ul className="feature-list">
                    {car.features.map((feature, i) => (
                      <li key={i}>
                        {getFeatureIcon(feature)}
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/book" className="book-btn" aria-label={`Book ${car.name} now`}>Book Now</Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-us" aria-labelledby="why-heading">
          <h2 id="why-heading" className="section-title">Why NKR Self Drive?</h2>
          <div className="features-grid">
            {[
              { icon: "🚗", title: "Well-Maintained Cars", desc: "All cars serviced regularly for a smooth, safe ride." },
              { icon: "⏰", title: "24/7 Availability", desc: "Book anytime, we deliver at your convenience." },
              { icon: "📍", title: "Free Pickup & Drop", desc: "Anywhere in Tirupati & Renigunta – no extra cost." },
              { icon: "💰", title: "Affordable Rates", desc: "Best prices with no hidden charges." },
            ].map((item, index) => (
              <div
                key={index}
                className="feature-item"
                ref={(el) => (featuresRef.current[index] = el)}
              >
                <div className="feature-icon" aria-hidden="true">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

// Enhanced responsive styles with new animations and SEO enhancements
const homeStyles = `
  .home {
    font-family: 'Segoe UI', 'Poppins', system-ui, sans-serif;
    background-color: #f4f7fb;
    color: #1e293b;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* Visually hidden for accessibility */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  /* Hero Section with gradient animation */
  .hero {
    background: linear-gradient(135deg, #d7ebff, #ffffff, #f0f9ff);
    background-size: 300% 300%;
    animation: gradientShift 12s ease infinite;
    padding: clamp(3rem, 8vw, 5rem) 1rem;
    text-align: center;
    position: relative;
    border-bottom: 3px solid #2563eb20;
    min-height: 60vh;
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
    font-size: clamp(2rem, 6vw, 3.5rem);
    font-weight: 700;
    margin-bottom: 1rem;
    color: #0f2a40;
    text-shadow: 0 2px 4px rgba(0,0,0,0.05);
    animation: slideUp 0.6s ease-out, glowPulse 4s infinite 1s;
  }

  .hero-subtitle {
    font-size: clamp(1rem, 3vw, 1.3rem);
    margin-bottom: 2rem;
    color: #0400ff;
    animation: slideUp 0.7s ease-out;
    font-weight: bolder;
  }

  .cta-button {
    display: inline-block;
    background-color: #1e4a76;
    color: white;
    padding: clamp(0.6rem, 2vw, 0.8rem) clamp(1.5rem, 4vw, 2rem);
    border-radius: 50px;
    font-weight: 600;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    text-decoration: none;
    transition: all 0.3s ease;
    animation: slideUp 0.8s ease-out, gentlePulse 3s infinite 1s, glow 2s infinite alternate;
    box-shadow: 0 8px 16px rgba(37,99,235,0.2);
    min-height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .cta-button::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .cta-button:hover::after {
    opacity: 1;
  }

  .cta-button:hover {
    background-color: #2563eb;
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 24px rgba(37,99,235,0.3);
    animation: none;
  }

  @keyframes glow {
    from { box-shadow: 0 0 5px #2563eb, 0 0 10px #2563eb; }
    to { box-shadow: 0 0 10px #1e4a76, 0 0 20px #1e4a76; }
  }

  .cta-button:focus-visible {
    outline: 3px solid #f59e0b;
    outline-offset: 2px;
  }

  .hero-badge {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid #e2e8f0;
    font-weight: 600;
    font-size: clamp(0.8rem, 2vw, 1rem);
    color: #1e293b;
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    animation: fadeInRight 0.8s ease-out, float 5s ease-in-out infinite 1s;
  }

  .hero-floating-image {
    position: absolute;
    bottom: 0.1px;
    width: 100%;
    height: 100%;
    opacity: 0.55;
    pointer-events: none;
    z-index: 0;
    animation: gentleScale 8s ease-in-out infinite;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .hero-floating-image:hover {
    opacity: 0.25;
    transform: scale(1.05);
  }

  @keyframes gentleScale {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.02); }
  }

  .badge-icon {
    color: #fbbf24;
  }

  /* Offer Banner with new shimmer */
  .offer-banner {
    background-color: #d4edda;
    color: #155724;
    text-align: center;
    padding: clamp(0.8rem, 2.5vw, 1rem);
    font-size: clamp(0.9rem, 2.5vw, 1.2rem);
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    border-bottom: 2px solid #c3e6cb;
    flex-wrap: wrap;
    animation: enhancedShimmer 3s infinite;
    background: linear-gradient(90deg, #d4edda, #c3e6cb, #d4edda);
    background-size: 200% 100%;
  }

  @keyframes enhancedShimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  .banner-icon {
    font-size: 1.5rem;
    color: #28a745;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  /* SEO Intro Text */
  .seo-intro {
    max-width: 1200px;
    margin: 2rem auto 0;
    padding: 0 1rem;
    text-align: center;
    font-size: 1.1rem;
    color: #2c3e50;
    background: rgba(255,255,255,0.7);
    border-radius: 12px;
    padding: 1rem 1.5rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    animation: fadeIn 1s ease-out;
  }

  .seo-intro p {
    margin: 0;
    line-height: 1.6;
  }

  .seo-intro strong {
    color: #1e4a76;
  }

  /* Section Titles with animated underline */
  .section-title {
    font-size: clamp(1.8rem, 5vw, 2.5rem);
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
    padding: 2rem 1rem;
    max-width: 1400px;
    margin: 0 auto;
  }

  .cars-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .car-card {
    background-color: #ffffff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    opacity: 0;
    transform: translateY(30px);
    border: 1px solid #e2e8f0;
    will-change: transform, opacity;
    position: relative;
  }

  .car-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s;
    z-index: 1;
    pointer-events: none;
  }

  .car-card:hover::before {
    left: 100%;
  }

  .car-card.in-view {
    animation: fadeInUp 0.5s forwards;
  }

  .car-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
    border-color: #2563eb40;
  }

  .car-image-wrapper {
    position: relative;
    overflow: hidden;
    height: 200px;
  }

  .car-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .car-card:hover .car-image {
    transform: scale(1.08);
  }

  .car-price-tag {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: #1e4a76;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 30px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    border: 1px solid #2563eb;
    transition: transform 0.2s ease, box-shadow 0.2s;
    animation: floatBadge 3s ease-in-out infinite;
  }

  @keyframes floatBadge {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }

  .car-card:hover .car-price-tag {
    transform: scale(1.05) translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }

  .price-unit {
    font-size: 0.7rem;
    font-weight: 400;
    margin-left: 2px;
    opacity: 0.9;
  }

  .car-details {
    padding: 1.5rem;
  }

  .car-name {
    font-size: clamp(1.2rem, 4vw, 1.5rem);
    margin-bottom: 0.8rem;
    color: #0f2a40;
    transition: color 0.2s;
  }

  .car-card:hover .car-name {
    color: #1e4a76;
  }

  .car-features {
    display: flex;
    gap: clamp(0.5rem, 2vw, 1rem);
    margin-bottom: 1rem;
    font-size: 0.9rem;
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
    margin-bottom: 1.5rem;
    color: #334155;
    font-size: 0.9rem;
    line-height: 1.8;
  }

  .feature-list li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.3rem;
  }

  .feature-icon-small {
    color: #1e4a76;
    font-size: 0.9rem;
    min-width: 1.2rem;
    text-align: center;
    transition: transform 0.2s;
  }

  .feature-list li:hover .feature-icon-small {
    transform: scale(1.2);
    color: #2563eb;
  }

  .book-btn {
    display: inline-block;
    background-color: transparent;
    color: #1e4a76;
    border: 2px solid #1e4a76;
    padding: clamp(0.6rem, 2vw, 0.8rem) clamp(1rem, 3vw, 2rem);
    border-radius: 40px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    width: 100%;
    text-align: center;
    font-size: clamp(0.9rem, 2.5vw, 1rem);
    min-height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
  }

  .book-btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(30, 74, 118, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.4s, height 0.4s;
  }

  .book-btn:hover::before {
    width: 300px;
    height: 300px;
  }

  .book-btn:hover {
    background-color: #1e4a76;
    color: white;
    border-color: #1e4a76;
    transform: scale(1.02);
  }

  .book-btn:focus-visible {
    outline: 3px solid #f59e0b;
    outline-offset: 2px;
  }

  /* Why Us Section */
  .why-us {
    background-color: #eef2f6;
    padding: 3rem 1rem;
    margin-top: 3rem;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    max-width: 1200px;
    margin: 2rem auto 0;
    padding: 0 1rem;
  }

  .feature-item {
    text-align: center;
    padding: 1.5rem 1rem;
    background-color: #ffffff;
    border-radius: 20px;
    transition: all 0.3s ease;
    border: 1px solid #e2e8f0;
    opacity: 0;
    transform: translateY(30px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.02);
  }

  .feature-item.in-view {
    animation: fadeInUp 0.5s forwards;
  }

  .feature-item:hover {
    transform: translateY(-5px) scale(1.02);
    border-color: #2563eb60;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  }

  .feature-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #1e4a76;
    animation: gentlePulse 2s infinite;
    transition: color 0.3s;
  }

  .feature-item:hover .feature-icon {
    color: #2563eb;
    animation: bounce 1s infinite;
  }

  @keyframes gentlePulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  .feature-item h3 {
    color: #0f2a40;
    margin-bottom: 0.5rem;
    font-size: clamp(1rem, 3vw, 1.2rem);
  }

  .feature-item p {
    color: #475569;
    font-size: 0.9rem;
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

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Responsive breakpoints */
  @media (max-width: 640px) {
    .hero {
      padding: 2rem 1rem;
    }
    .hero-badge {
      top: 10px;
      right: 10px;
      padding: 0.3rem 0.8rem;
    }
    .cars-grid {
      grid-template-columns: 1fr;
    }
    .features-grid {
      grid-template-columns: 1fr;
    }
    .offer-banner {
      flex-direction: column;
      gap: 0.3rem;
    }
    .hero-floating-image {
      width: 100%;
      bottom: 0.1px;
      left: 0px;
      opacity: 0.46;
      height: 100%;
    }
    .seo-intro {
      font-size: 1rem;
      padding: 0.8rem;
    }
  }

  @media (min-width: 641px) and (max-width: 1024px) {
    .cars-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .features-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1025px) {
    .cars-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default Home;