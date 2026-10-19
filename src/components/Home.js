import { Link } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import {
  FaUser, FaGasPump, FaRupeeSign, FaStar,
  FaMapMarkerAlt, FaRoad, FaMoneyBillWave, FaSnowflake, FaSun, FaCogs,
  FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight, FaStarHalfAlt,
  FaCalendarCheck, FaCarSide, FaShieldAlt, FaClock, FaBroom,
  FaUserTie, FaWallet, FaCheckCircle, FaWhatsapp, FaBolt,
} from "react-icons/fa";

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const carsRef = useRef([]);
  const featuresRef = useRef([]);
  const testimonialsRef = useRef([]);

  const testimonials = [
    { id: 1, name: "Abdul Ahadh", rating: 5, text: "Exceptional service. It was around 8.40 PM in tirupati international airport..raining heavily..no buses or autos..tried to book uber cab to my relative home which is around 80 kms..online it showed 1700 but driver called and asked 4000..I told to cancel..then I thought of taking rental cars for self drive and searched nearby rentals and I got this rentals. Went to their website.. updated the details and it takes to WhatsApp chat. Once message sent immediately i got reply. Asking which car required and I provided the details. I told i required immediately and he immediately took me Swift car within 30 to 40 mins to airport. I felt thank god and he gave me clear instructions on everything and handed over the car. They charged 1800 per day for swift and airport delivery charges 400 and pickup charges 400 and toll charges 200 for up and down. Overall Good.", date: "October 2026", location: "Tirupati Airport" },
    { id: 2, name: "Gokul Nair", rating: 5, text: "Good experience, good price and Neelendra is very good person. He explains everything properly and humble person. Car is maintained to the minimum as required for safe drive.",date: "October 2026", location: "Renigunta" },
    { id: 3, name: "Venkatesh Vallamdas", rating: 5, text: "Excellent service! The cars are always in great condition. Nallandeer Reddy’s support and his ability to resolve any issues quickly are truly incredible. Highly recommended!", date: "October 2026", location: "Tirupati" },
  ];

  const cars = [
    { id: 1, name: "Maruti Suzuki Ertiga", image: "/images/ertiga.webp", seats: 7, fuel: "CNG & Petrol", price: 3000, features: ["7 Seater", "CNG & Petrol", "250 km/day", "Extra ₹10/km"], description: "Spacious 7-seater MPV perfect for family trips." },
    { id: 2, name: "Kia Carens", image: "/images/carens.webp", seats: 7, fuel: "Diesel", price: 3500, features: ["7 Seater", "Diesel", "250 km/day", "Extra ₹10/km"], description: "Premium 7-seater with IMT diesel engine." },
    { id: 3, name: "Tata Nexon", image: "/images/nexon.webp", seats: 5, fuel: "Petrol & CNG", price: 2700, features: ["5 Seater", "Petrol & CNG", "Sunroof", "250 km/day", "Extra ₹10/km"], description: "Compact SUV with sunroof." },
    { id: 4, name: "Tata Tiago", image: "/images/tiago.webp", seats: 5, fuel: "Petrol", price: 2000, features: ["5 Seater", "Petrol", "250 km/day", "Extra ₹10/km"], description: "Hatchback perfect for city drives." },
    { id: 5, name: "Swift Diesel", image: "/images/swift.webp", seats: 5, fuel: "Diesel", price: 1800, features: ["5 Seater", "Diesel", "250 km/day", "Extra ₹10/km"], description: "Sporty diesel hatchback." },
    { id: 6, name: "Swift Dzire", image: "/images/dzire.webp", seats: 5, fuel: "Petrol", price: 2200, features: ["5 Seater", "Petrol", "250 km/day", "Extra ₹10/km"], description: "Sleek sedan with petrol engine." },
    { id: 7, name: "Tata Aries AMT", image: "/images/aeris.webp", seats: 5, fuel: "Petrol", price: 2500, features: ["5 Seater", "Petrol", "250 km/day", "Extra ₹10/km", "Fuel not included"] },
    { id: 8, name: "Hyundai Venue IMT", image: "/images/venue.webp", seats: 5, fuel: "Petrol", price: 3000, features: ["5 Seater", "Petrol", "250 km/day", "Extra ₹10/km", "Fuel not included"] },
    { id: 9, name: "Toyota Innova Crysta", image: "/images/crysta.webp", seats: 8, fuel: "Diesel", price: 4000, features: ["8 Seater", "Diesel", "250 km/day", "Extra ₹10/km", "Fuel not included"] },
    { id: 10, name: "Maruti Suzuki Baleno", image: "/images/baleno.webp", seats: 5, fuel: "Petrol", price: 2300, features: ["5 Seater", "Petrol", "250 km/day", "Extra ₹10/km", "Fuel not included"] },
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    const style = document.createElement("style");
    style.innerHTML = homeStyles;
    document.head.appendChild(style);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    carsRef.current.forEach((el) => el && observer.observe(el));
    featuresRef.current.forEach((el) => el && observer.observe(el));
    testimonialsRef.current.forEach((el) => el && observer.observe(el));

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 10000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const getFeatureIcon = (feature) => {
    const lower = feature.toLowerCase();
    if (lower.includes("km") || lower.includes("distance")) return <FaRoad />;
    if (lower.includes("extra") || lower.includes("₹")) return <FaMoneyBillWave />;
    if (lower.includes("seater")) return <FaUser />;
    if (lower.includes("cng") || lower.includes("petrol") || lower.includes("diesel") || lower.includes("fuel")) return <FaGasPump />;
    if (lower.includes("sunroof")) return <FaSun />;
    if (lower.includes("ac") || lower.includes("air")) return <FaSnowflake />;
    if (lower.includes("automatic") || lower.includes("transmission")) return <FaCogs />;
    return <FaCheckCircle />;
  };

  const sortedCars = [...cars].sort((a, b) => a.price - b.price);

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => {
      const n = i + 1;
      if (n <= rating) return <FaStar key={n} className="star filled" />;
      if (n - 0.5 === rating) return <FaStarHalfAlt key={n} className="star half" />;
      return <FaStar key={n} className="star empty" />;
    });

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoRental",
        "@id": "https://nkrselfdrivecarrentals.in/#organization",
        name: "NKR Self Drive Cars",
        description: "Best self-drive car rental in Tirupati from ₹1800.  pickup and drop.",
        url: "https://nkrselfdrivecarrentals.in",
        logo: "https://nkrselfdrivecarrentals.in/logo.png",
        image: "https://nkrselfdrivecarrentals.in/hero-bg.webp",
        address: { "@type": "PostalAddress", addressLocality: "Tirupati", addressRegion: "Andhra Pradesh", addressCountry: "IN" },
        geo: { "@type": "GeoCoordinates", latitude: "13.6288", longitude: "79.4192" },
        telephone: "+91-8660014029",
        priceRange: "₹1800 - ₹3500",
        openingHours: "Mo-Su 00:00-23:59",
        sameAs: [
          "https://www.facebook.com/share/1DcKcWZUBe/",
          "https://www.instagram.com/neelendar_reddy_nkr_",
          "https://twitter.com/nkrselfdrive",
        ],
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "520", bestRating: "5", worstRating: "1" },
        review: testimonials.map((t) => ({
          "@type": "Review",
          author: { "@type": "Person", name: t.name },
          reviewRating: { "@type": "Rating", ratingValue: t.rating.toString() },
          reviewBody: t.text,
          datePublished: t.date,
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Self Drive Cars",
          itemListElement: sortedCars.map((c) => ({
            "@type": "Offer",
            name: c.name,
            description: c.description,
            price: c.price,
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: `https://nkrselfdrivecarrentals.in/book?car=${c.id}`,
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "What is the fuel policy?", acceptedAnswer: { "@type": "Answer", text: "Cars are provided with a full tank; you need to return them with a full tank." } },
          { "@type": "Question", name: "Is there a security deposit?", acceptedAnswer: { "@type": "Answer", text: "Yes, a refundable security deposit of ₹3000 is required at the time of pickup." } },
          { "@type": "Question", name: "Do you offer delivery outside Tirupati?", acceptedAnswer: { "@type": "Answer", text: " pickup and drop is available anywhere in Tirupati and Renigunta." } },
          { "@type": "Question", name: "What documents do I need?", acceptedAnswer: { "@type": "Answer", text: "You need a valid driving licence and a government ID proof." } },
        ],
      },
    ],
  };

  const getWhatsAppLink = (carName) =>
    `https://wa.me/918660014029?text=${encodeURIComponent(
      `Hi NKR Car Rentals, I want to book the ${carName}. Please share availability and price.`
    )}`;

  // Mobile shows venkat.webp, desktop shows venkat1.webp
  const heroImage = isMobile ? "/images/venkat.webp" : "/images/venkat1.webp";

  return (
    <>
      <Helmet>
        <title>Car Rental in Tirupati from ₹1800 | NKR Self Drive Cars</title>
        <meta name="description" content="Book the best self-drive cars in Tirupati at affordable prices starting from ₹1800. Ertiga, Carens, Nexon, Swift & more.  pickup & drop in Tirupati & Renigunta." />
        <meta name="keywords" content="car rental Tirupati, self drive cars Tirupati, Ertiga on rent Tirupati, Kia Carens rent, Tata Nexon self drive, Swift Dzire hire, best car rental in Tirupati, car hire near Renigunta" />
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Tirupati" />
        <meta name="geo.position" content="13.6288;79.4192" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nkrselfdrivecarrentals.in" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nkrselfdrivecarrentals.in" />
        <meta property="og:title" content="NKR Self Drive Cars - Car Rental in Tirupati from ₹1800" />
        <meta property="og:description" content="Best self-drive car rental in Tirupati from ₹1800.  pickup & drop." />
        <meta property="og:image" content="https://nkrselfdrivecarrentals.in/og-image.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="NKR Self Drive Cars - Car Rental in Tirupati from ₹1800" />
        <meta property="twitter:description" content="Best self-drive car rental in Tirupati from ₹1800.  pickup & drop." />
        <meta property="twitter:image" content="https://nkrselfdrivecarrentals.in/og-image.webp" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="nkr-home">

        {/* ================= HERO ================= */}
        <section className="nkr-hero" aria-label="Hero">
          <div className="hero-bg" style={{ backgroundImage: `url('${heroImage}')` }} />
          <div className="hero-shade" />
          <div className="hero-ornament" aria-hidden="true" />

          <div className="hero-inner">
            <div className="hero-text">
            </div>
          </div>

          {/* Kept outside animated hero text so mobile positioning anchors to the full hero. */}
          <div className="hero-actions">
            <Link to="/book" className="btn btn-gold">
              <FaCalendarCheck className="btn-icon" /> Book Your Ride <FaChevronRight className="btn-chev" />
            </Link>
            <Link to="/book" className="btn btn-outline">
              <FaCarSide className="btn-icon" /> Explore Our Cars <FaChevronRight className="btn-chev" />
            </Link>
          </div>

          <div className="hero-divider" aria-hidden="true">
            <span className="divider-line" />
            <span className="divider-diamond">◆</span>
            <span className="divider-line" />
          </div>
        </section>

        {/* ================= FEATURE STRIP ================= */}
        <section className="feature-strip" aria-label="Why choose NKR">
          <div className="feature-strip-inner">
            {[
              { icon: <FaBroom />, label: "Clean & Comfortable" },
              { icon: <FaUserTie />, label: "Experienced Drivers" },
              { icon: <FaClock />, label: "On-Time Pickup" },
              { icon: <FaWallet />, label: "Affordable Pricing" },
            ].map((f, i) => (
              <div className="strip-item" key={i}>
                <span className="strip-icon" aria-hidden="true">{f.icon}</span>
                <span className="strip-label">{f.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FULL FLEET ================= */}
        <section className="fleet-section" aria-labelledby="fleet-heading">
          <div className="choose-head">
            <h2 id="fleet-heading" className="choose-title">
              Our Full <span className="gold">Fleet</span>
            </h2>
            <p className="choose-sub">Prices start from ₹1800 per day —  pickup &amp; drop in Tirupati.</p>
          </div>

          <div className="fleet-grid">
            {sortedCars.map((car, i) => (
              <article
                key={car.id}
                className="fleet-card"
                ref={(el) => (carsRef.current[i] = el)}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="fleet-img-wrap">
                  <img src={car.image} alt={car.name} className="fleet-img" loading="lazy" />
                  <div className="fleet-img-shine" aria-hidden="true" />
                  <div className="fleet-img-speedlines" aria-hidden="true" />
                  <div className="fleet-price">
                    <FaRupeeSign /> {car.price}<span>/day</span>
                  </div>
                  <div className="fleet-badge-speed" aria-hidden="true">
                    <FaBolt /> Live
                  </div>
                </div>
                <div className="fleet-body">
                  <h3 className="fleet-name">{car.name}</h3>
                  <div className="fleet-meta">
                    <span><FaUser /> {car.seats} Seats</span>
                    <span><FaGasPump /> {car.fuel}</span>
                  </div>
                  <ul className="fleet-features">
                    {car.features.map((f, k) => (
                      <li key={k}>{getFeatureIcon(f)} <span>{f}</span></li>
                    ))}
                  </ul>

                  <Link to="/book" className="btn btn-gold btn-block">Book Now</Link>

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

        {/* ================= TESTIMONIALS ================= */}
        <section className="testimonials-section" aria-labelledby="testimonials-heading">
          <div className="choose-head">
            <h2 id="testimonials-heading" className="choose-title">
              What Our <span className="gold">Customers</span> Say
            </h2>
            <p className="choose-sub">Rated 4.9 / 5 by 520+ happy travellers.</p>
          </div>

          <div className="testimonials-container">
            <button className="testimonial-nav-btn" onClick={prevTestimonial} aria-label="Previous testimonial">
              <FaChevronLeft />
            </button>

            <div className="testimonials-wrapper">
              {testimonials.map((t, i) => (
                <div
                  key={t.id}
                  className={`testimonial-card ${i === currentTestimonial ? "active" : ""}`}
                  ref={(el) => (testimonialsRef.current[i] = el)}
                >
                  <div className="testimonial-content">
                    <FaQuoteLeft className="quote-icon quote-left" />
                    <p className="testimonial-text">"{t.text}"</p>
                    <FaQuoteRight className="quote-icon quote-right" />
                  </div>
                  <div className="testimonial-footer">
                    <div className="testimonial-rating-container">
                      <div className="testimonial-rating">{renderStars(t.rating)}</div>
                      <span className="rating-text">{t.rating}.0</span>
                    </div>
                    <div className="testimonial-author">
                      <strong>{t.name}</strong>
                      <div className="author-details">
                        <span className="testimonial-location"><FaMapMarkerAlt /> {t.location}</span>
                        <span className="testimonial-date">{t.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="testimonial-nav-btn" onClick={nextTestimonial} aria-label="Next testimonial">
              <FaChevronRight />
            </button>
          </div>

          <div className="testimonial-indicators">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`indicator ${i === currentTestimonial ? "active" : ""}`}
                onClick={() => setCurrentTestimonial(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* ================= WHY US ================= */}
        <section className="why-us" aria-labelledby="why-heading">
          <div className="choose-head">
            <h2 id="why-heading" className="choose-title">
              Why <span className="gold">NKR Self Drive?</span>
            </h2>
          </div>
          <div className="features-grid">
            {[
              { icon: <FaShieldAlt />, title: "Well-Maintained Cars", desc: "All cars serviced regularly for a smooth, safe ride." },
              { icon: <FaClock />, title: "24/7 Availability", desc: "Book anytime, we deliver at your convenience." },
              { icon: <FaMapMarkerAlt />, title: " Pickup & Drop", desc: "Anywhere in Tirupati & Renigunta." },
              { icon: <FaWallet />, title: "Affordable Rates", desc: "Best prices with no hidden charges." },
            ].map((item, i) => (
              <div key={i} className="feature-item" ref={(el) => (featuresRef.current[i + 3] = el)}>
                <div className="feature-icon-wrap" aria-hidden="true">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CTA BANNER ================= */}
        <section className="cta-banner">
          <div className="cta-banner-inner">
            <h2>Ready to hit the road?</h2>
            <p>Book your self-drive car in Tirupati from just ₹1800/day.</p>
            <Link to="/book" className="btn btn-gold">
              <FaCalendarCheck /> Book Your Ride <FaChevronRight className="btn-chev" />
            </Link>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="faq-section" aria-labelledby="faq-heading">
          <div className="choose-head">
            <h2 id="faq-heading" className="choose-title">
              Frequently Asked <span className="gold">Questions</span>
            </h2>
            <p className="choose-sub">Quick answers to help you plan your next drive around Tirupati.</p>
          </div>
          <div className="faq-list">
            <details className="faq-item"><summary>What is the starting price for a self-drive car?</summary><p>Self-drive rentals start from ₹1800 per day. The final price depends on the car you choose and the rental details.</p></details>
            <details className="faq-item"><summary>Do you provide pickup and drop in Tirupati?</summary><p>Yes.  pickup and drop are available in Tirupati and Renigunta.</p></details>
            <details className="faq-item"><summary>What types of cars can I rent?</summary><p>Our fleet includes hatchbacks, SUVs, and sedans. Availability may vary by date.</p></details>
            <details className="faq-item"><summary>Can I book a car for temple visits or outstation travel?</summary><p>Our cars are suitable for local travel, temple visits, airport transfers, and outstation journeys.</p></details>
            <details className="faq-item"><summary>How do I reserve a car?</summary><p>Use the Book Your Ride link on this website to start your booking.</p></details>
            <details className="faq-item"><summary>What should I confirm before starting my trip?</summary><p>Please confirm documents, deposit, fuel policy, kilometre limits, and pickup/drop arrangements before rental.</p></details>
          </div>
        </section>

        {/* Floating WhatsApp button removed as requested */}
      </main>
    </>
  );
}

/* =========================================================
   STYLES
   ========================================================= */
const homeStyles = `
  :root {
    --gold: #e6b23a;
    --gold-2: #f5d76e;
    --gold-deep: #b8860b;
    --ink: #0a0a0a;
    --line: rgba(230,178,58,0.35);
    --whatsapp: #25d366;
    --whatsapp-dark: #128c7e;
  }

  .nkr-home { font-family: 'Segoe UI','Poppins',system-ui,-apple-system,sans-serif; background:#fff; color:#1a1a1a; overflow-x:hidden; }

  /* HERO */
  .nkr-hero { position:relative; isolation:isolate; min-height:640px; display:flex; flex-direction:column; justify-content:flex-end; overflow:hidden; padding:90px 24px 0; }
  .hero-bg { position:absolute; inset:0; z-index:-2; background-size:cover; background-position:center 30%; transform:scale(1.06); animation:heroBgDrift 18s ease-in-out infinite alternate; will-change:transform; }
  .hero-shade { position:absolute; inset:0; z-index:-1;
    background:
      linear-gradient(90deg, rgba(0,0,0,.92) 0%, rgba(0,0,0,.82) 32%, rgba(0,0,0,.45) 62%, rgba(0,0,0,.15) 100%),
      linear-gradient(180deg, rgba(0,0,0,.35) 0%, transparent 30%, transparent 60%, rgba(0,0,0,.55) 100%);
  }
  .hero-ornament { position:absolute; inset:0; z-index:0; pointer-events:none; background:radial-gradient(ellipse at 20% 50%, rgba(230,178,58,.12), transparent 55%); animation:ornamentPulse 8s ease-in-out infinite; }
  .hero-inner { position:relative; z-index:2; max-width:1300px; margin:0 auto; width:100%; display:grid; grid-template-columns:1fr; gap:30px; align-items:center; flex:1; }
  .hero-text { max-width:640px; animation:heroTextRise 1s cubic-bezier(.2,.75,.25,1) both; }
  .hero-eyebrow { display:inline-flex; align-items:center; gap:10px; color:var(--gold); font-size:.8rem; font-weight:700; letter-spacing:.22em; text-transform:uppercase; margin:0 0 20px; }
  .gold-diamond { color:var(--gold); font-size:.8rem; }
  .hero-heading { font-family:Georgia,'Times New Roman',serif; font-size:clamp(2.4rem,6.2vw,5rem); line-height:1.03; color:#fff; margin:0 0 22px; font-weight:700; text-wrap:balance; text-shadow:0 8px 40px rgba(0,0,0,.6); }
  .hero-gold { display:inline-block; background:linear-gradient(135deg,#f8e6a8 0%,#e6b23a 45%,#c9962a 100%); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; color:transparent; filter:drop-shadow(0 4px 18px rgba(230,178,58,.35)); animation:goldShimmer 4s ease-in-out infinite; }
  .hero-desc { color:#e2e2e2; font-size:clamp(1rem,1.8vw,1.18rem); line-height:1.65; max-width:520px; margin:0 0 34px; }
  .hero-actions { display:flex; flex-wrap:wrap; gap:16px; }

  .btn { display:inline-flex; align-items:center; justify-content:center; gap:10px; padding:14px 28px; border-radius:12px; font-weight:700; font-size:1rem; text-decoration:none; transition:transform .25s ease, box-shadow .25s ease, filter .25s ease, background .25s ease, color .25s ease; border:2px solid transparent; cursor:pointer; position:relative; overflow:hidden; min-height:48px; white-space:nowrap; }
  .btn-icon { font-size:.95rem; }
  .btn-chev { font-size:.75rem; transition:transform .25s ease; }
  .btn:hover .btn-chev { transform:translateX(3px); }
  .btn-gold { background:linear-gradient(135deg,var(--gold-2),var(--gold)); color:#000; box-shadow:0 10px 28px rgba(230,178,58,.35); }
  .btn-gold::before { content:""; position:absolute; top:0; left:-80%; width:50%; height:100%; background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent); transform:skewX(-20deg); animation:btnShine 4.5s ease-in-out infinite; }
  .btn-gold:hover { transform:translateY(-3px); box-shadow:0 16px 40px rgba(230,178,58,.5); filter:brightness(1.06); }
  .btn-outline { background:transparent; color:#fff; border-color:rgba(255,255,255,.35); }
  .btn-outline:hover { border-color:var(--gold); color:var(--gold); transform:translateY(-3px); box-shadow:0 10px 26px rgba(0,0,0,.35); }
  .btn-block { width:100%; }
  .btn:focus-visible { outline:3px solid #fff; outline-offset:3px; }

  /* WHATSAPP SECONDARY BUTTON */
  .btn-whatsapp {
    background: linear-gradient(135deg, var(--whatsapp) 0%, var(--whatsapp-dark) 100%);
    color: #fff;
    box-shadow: 0 8px 22px rgba(37,211,102,.32);
    border: 1px solid rgba(255,255,255,.18);
    position: relative;
    overflow: hidden;
  }
  .btn-whatsapp::before {
    content: "";
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,.22), transparent 55%);
    pointer-events: none;
  }
  .btn-whatsapp:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 34px rgba(37,211,102,.5);
    filter: brightness(1.05);
  }
  .wa-btn-icon { font-size: 1.15rem; }
  .fleet-wa-btn { margin-top: 10px; }

  /* HERO DIVIDER */
  .hero-divider { position:relative; z-index:2; display:flex; align-items:center; justify-content:center; gap:14px; padding:22px 0 26px; max-width:1300px; margin:0 auto; width:100%; }
  .divider-line { flex:1; max-width:480px; height:1px; background:linear-gradient(90deg,transparent,var(--gold),transparent); opacity:.7; }
  .divider-diamond { color:var(--gold); font-size:.7rem; animation:diamondSpin 6s linear infinite; }

  /* FEATURE STRIP */
  .feature-strip { background:linear-gradient(180deg,#fdf9ee 0%,#ffffff 100%); border-top:1px solid rgba(230,178,58,.2); border-bottom:1px solid rgba(230,178,58,.2); padding:22px 24px; }
  .feature-strip-inner { max-width:1300px; margin:0 auto; display:grid; grid-template-columns:repeat(4,1fr); gap:20px; align-items:center; }
  .strip-item { display:flex; align-items:center; justify-content:center; gap:12px; padding:6px 10px; position:relative; }
  .strip-item:not(:last-child)::after { content:""; position:absolute; right:-10px; top:20%; height:60%; width:1px; background:rgba(0,0,0,.12); }
  .strip-icon { display:inline-flex; align-items:center; justify-content:center; font-size:1.35rem; color:#b8860b; width:44px; height:44px; border-radius:50%; background:rgba(230,178,58,.12); border:1px solid rgba(230,178,58,.35); transition:transform .3s ease, background .3s ease; }
  .strip-item:hover .strip-icon { transform:rotate(-6deg) scale(1.08); background:rgba(230,178,58,.22); }
  .strip-label { font-weight:600; color:#232323; font-size:.98rem; }

  /* SECTION HEADS */
  .fleet-section, .why-us, .faq-section { max-width:1300px; margin:0 auto; padding:70px 24px; }
  .choose-head { text-align:center; margin-bottom:40px; }
  .choose-title { font-family:Georgia,serif; font-size:clamp(1.9rem,4vw,2.9rem); font-weight:700; color:#111; margin:0 0 12px; letter-spacing:-.01em; }
  .choose-title .gold { color:var(--gold-deep); position:relative; }
  .choose-title .gold::after { content:""; position:absolute; left:0; right:0; bottom:-8px; height:3px; border-radius:3px; background:linear-gradient(90deg,transparent,var(--gold),transparent); animation:underlinePulse 3s ease-in-out infinite; }
  .choose-sub { color:#6b6b6b; font-size:1.02rem; margin:18px 0 0; }

  /* FLEET — ANIMATED CAR IMAGES */
  .fleet-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; perspective:1400px; }
  .fleet-card { background:#fff; border-radius:16px; overflow:hidden; border:1px solid rgba(0,0,0,.08); box-shadow:0 6px 18px rgba(0,0,0,.05); transition:transform .5s cubic-bezier(.2,.8,.2,1), box-shadow .5s ease, border-color .35s ease; opacity:0; transform:translateY(24px); }
  .fleet-card.in-view { animation:cardArrival .8s cubic-bezier(.2,.75,.25,1) forwards; }
  .fleet-card:hover { transform:translateY(-10px) rotateX(1deg); box-shadow:0 26px 60px rgba(0,0,0,.18),0 0 0 1px rgba(230,178,58,.35); border-color:rgba(230,178,58,.55); }

  .fleet-img-wrap { position:relative; overflow:hidden; height:200px; background:#0a0a0a; isolation:isolate; }
  .fleet-img { width:100%; height:100%; object-fit:cover; transform-origin:52% 55%; animation:carCruise 8s ease-in-out infinite; will-change:transform, filter; filter:saturate(1.05) contrast(1.02); transition:filter .4s ease; }
  .fleet-card:nth-child(2n) .fleet-img { animation-delay:-2.2s; }
  .fleet-card:nth-child(3n) .fleet-img { animation-delay:-4.4s; }
  .fleet-card:nth-child(4n) .fleet-img { animation-delay:-1.1s; }

  .fleet-img-shine { position:absolute; inset:0; z-index:2; pointer-events:none; background:linear-gradient(105deg, transparent 30%, rgba(255,255,255,.22) 48%, rgba(230,178,58,.18) 52%, transparent 72%); transform:translateX(-130%); animation:imageShine 6s ease-in-out infinite; }
  .fleet-img-speedlines { position:absolute; left:-30%; right:-30%; bottom:12%; height:26%; z-index:2; pointer-events:none; opacity:.35; background:repeating-linear-gradient(174deg, transparent 0 14px, rgba(255,255,255,.35) 15px 16px, transparent 17px 30px); filter:blur(.4px); transform:translateX(-30%) skewX(-22deg); animation:speedLines 4s linear infinite; }
  .fleet-card:hover .fleet-img { animation-play-state:paused; transform:scale(1.12); filter:saturate(1.18) contrast(1.08); }
  .fleet-card:hover .fleet-img-shine { animation-duration:1.6s; }
  .fleet-card:hover .fleet-img-speedlines { opacity:.7; animation-duration:1s; }

  .fleet-price { position:absolute; bottom:12px; right:12px; z-index:3; display:inline-flex; align-items:center; gap:4px; background:rgba(10,10,10,.88); color:var(--gold); backdrop-filter:blur(10px); padding:8px 14px; border-radius:999px; font-weight:800; font-size:1rem; border:1px solid rgba(230,178,58,.5); box-shadow:0 6px 20px rgba(0,0,0,.35); transition:transform .3s ease, box-shadow .3s ease; }
  .fleet-price span { font-size:.72rem; font-weight:500; color:#fff; margin-left:2px; opacity:.85; }
  .fleet-card:hover .fleet-price { transform:translateY(-3px) scale(1.04); box-shadow:0 10px 26px rgba(0,0,0,.45), 0 0 16px rgba(230,178,58,.25); }

  .fleet-badge-speed { position:absolute; top:12px; left:12px; z-index:3; display:inline-flex; align-items:center; gap:5px; background:linear-gradient(135deg, #e6b23a, #f5d76e); color:#000; font-weight:800; font-size:.7rem; letter-spacing:.08em; text-transform:uppercase; padding:5px 10px; border-radius:999px; box-shadow:0 4px 14px rgba(230,178,58,.45); animation:badgePulse 2.4s ease-in-out infinite; }
  .fleet-badge-speed svg { font-size:.7rem; }

  .fleet-body { padding:20px 22px 22px; }
  .fleet-name { font-size:1.2rem; font-weight:800; margin:0 0 10px; color:#111; }
  .fleet-meta { display:flex; flex-wrap:wrap; gap:14px; color:#6b6b6b; font-size:.88rem; margin-bottom:12px; }
  .fleet-meta span { display:inline-flex; align-items:center; gap:6px; }
  .fleet-features { list-style:none; margin:0 0 18px; padding:0; color:#444; font-size:.88rem; line-height:1.7; }
  .fleet-features li { display:flex; align-items:center; gap:8px; margin-bottom:4px; }
  .fleet-features svg { color:#b8860b; font-size:.82rem; min-width:12px; }

  /* TESTIMONIALS */
  .testimonials-section { background:linear-gradient(180deg,#faf7ef 0%,#ffffff 100%); padding:70px 24px 80px; border-top:1px solid rgba(230,178,58,.2); border-bottom:1px solid rgba(230,178,58,.2); }
  .testimonials-container { max-width:900px; margin:0 auto; display:flex; align-items:center; gap:14px; }
  .testimonials-wrapper { flex:1; position:relative; min-height:320px; }
  .testimonial-card { background:#fff; border-radius:18px; padding:32px; box-shadow:0 14px 40px rgba(0,0,0,.08); border:1px solid rgba(230,178,58,.25); opacity:0; transform:translateX(60px) scale(.96); transition:all .5s cubic-bezier(.2,.8,.2,1); position:absolute; inset:0; visibility:hidden; }
  .testimonial-card.active { opacity:1; transform:translateX(0) scale(1); position:relative; visibility:visible; }
  .testimonial-content { position:relative; margin-bottom:22px; }
  .quote-icon { color:rgba(230,178,58,.5); font-size:1.9rem; position:absolute; }
  .quote-left { top:-8px; left:-6px; }
  .quote-right { bottom:-8px; right:-6px; }
  .testimonial-text { font-size:1.05rem; line-height:1.7; color:#333; font-style:italic; text-align:center; margin:0; padding:0 24px; }
  .testimonial-footer { display:flex; flex-direction:column; align-items:center; gap:14px; border-top:1px solid #eee; padding-top:20px; }
  .testimonial-rating-container { display:flex; align-items:center; gap:10px; background:#fdf9ee; padding:8px 16px; border-radius:999px; border:1px solid rgba(230,178,58,.3); }
  .testimonial-rating { display:flex; gap:3px; }
  .star { font-size:1.15rem; color:#cbd5e1; }
  .star.filled { color:var(--gold); filter:drop-shadow(0 2px 4px rgba(230,178,58,.4)); }
  .star.half { color:var(--gold); }
  .rating-text { font-weight:800; color:#b8860b; font-size:1rem; }
  .testimonial-author { text-align:center; }
  .testimonial-author strong { display:block; color:#111; font-size:1.08rem; margin-bottom:4px; }
  .author-details { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; font-size:.86rem; color:#777; }
  .testimonial-location { display:inline-flex; align-items:center; gap:4px; color:#b8860b; }
  .testimonial-nav-btn { width:48px; height:48px; border-radius:50%; background:#fff; border:2px solid var(--gold); color:var(--gold); cursor:pointer; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:1rem; transition:all .25s ease; box-shadow:0 6px 16px rgba(0,0,0,.08); }
  .testimonial-nav-btn:hover { background:var(--gold); color:#000; transform:scale(1.08); box-shadow:0 10px 24px rgba(230,178,58,.4); }
  .testimonial-nav-btn:focus-visible { outline:3px solid var(--gold-deep); outline-offset:3px; }
  .testimonial-indicators { display:flex; justify-content:center; gap:8px; margin-top:26px; }
  .indicator { width:10px; height:10px; border-radius:50%; background:#d1d1d1; border:none; cursor:pointer; transition:all .3s ease; padding:0; }
  .indicator:hover { background:#b8860b; }
  .indicator.active { background:var(--gold); width:28px; border-radius:999px; box-shadow:0 0 10px rgba(230,178,58,.6); }
  .indicator:focus-visible { outline:2px solid var(--gold-deep); outline-offset:3px; }

  /* WHY US */
  .features-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:22px; }
  .feature-item { text-align:center; padding:30px 20px; background:#fff; border-radius:16px; border:1px solid rgba(0,0,0,.07); box-shadow:0 4px 14px rgba(0,0,0,.04); transition:transform .4s ease, box-shadow .4s ease, border-color .3s ease; opacity:0; transform:translateY(22px); }
  .feature-item.in-view { animation:cardArrival .8s cubic-bezier(.2,.75,.25,1) forwards; }
  .feature-item:hover { transform:translateY(-8px); border-color:rgba(230,178,58,.5); box-shadow:0 16px 40px rgba(0,0,0,.1); }
  .feature-icon-wrap { display:inline-flex; align-items:center; justify-content:center; width:64px; height:64px; border-radius:50%; background:linear-gradient(135deg,rgba(230,178,58,.16),rgba(230,178,58,.05)); border:1px solid rgba(230,178,58,.35); color:#b8860b; font-size:1.5rem; margin-bottom:16px; transition:transform .3s ease, background .3s ease; }
  .feature-item:hover .feature-icon-wrap { transform:scale(1.1) rotate(-6deg); background:linear-gradient(135deg,rgba(230,178,58,.3),rgba(230,178,58,.1)); }
  .feature-item h3 { font-size:1.08rem; margin:0 0 8px; color:#111; font-weight:800; }
  .feature-item p { color:#666; font-size:.9rem; line-height:1.6; margin:0; }

  /* CTA */
  .cta-banner { background:#0a0a0a; color:#fff; padding:60px 24px; position:relative; overflow:hidden; }
  .cta-banner::before { content:""; position:absolute; inset:0; background:radial-gradient(circle at 30% 50%, rgba(230,178,58,.18), transparent 55%); animation:ctaPulse 6s ease-in-out infinite; pointer-events:none; }
  .cta-banner-inner { position:relative; z-index:2; max-width:900px; margin:0 auto; text-align:center; }
  .cta-banner h2 { font-family:Georgia,serif; font-size:clamp(1.8rem,4vw,2.6rem); margin:0 0 10px; background:linear-gradient(135deg,#fff 0%,#f5d76e 70%,#e6b23a 100%); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; color:transparent; }
  .cta-banner p { color:#c8c8c8; font-size:1.05rem; margin:0 0 26px; }

  /* FAQ */
  .faq-list { max-width:880px; margin:0 auto; display:grid; gap:12px; }
  .faq-item { background:#fff; border:1px solid rgba(0,0,0,.09); border-radius:12px; padding:0 22px; overflow:hidden; transition:border-color .3s ease, box-shadow .3s ease; }
  .faq-item:hover, .faq-item[open] { border-color:rgba(230,178,58,.5); box-shadow:0 8px 24px rgba(0,0,0,.06); }
  .faq-item summary { list-style:none; cursor:pointer; position:relative; padding:20px 40px 20px 0; font-weight:700; color:#111; font-size:1rem; }
  .faq-item summary::-webkit-details-marker { display:none; }
  .faq-item summary::after { content:"+"; position:absolute; right:4px; top:50%; transform:translateY(-50%); color:#b8860b; font-size:1.5rem; transition:transform .3s ease; }
  .faq-item[open] summary::after { content:"−"; transform:translateY(-50%) rotate(180deg); }
  .faq-item p { margin:0; padding:0 0 20px; color:#555; line-height:1.75; font-size:.95rem; }

  /* RESPONSIVE */
  @media (max-width:1024px) {
    .fleet-grid { grid-template-columns:repeat(2,1fr); }
    .features-grid { grid-template-columns:repeat(2,1fr); }
    .feature-strip-inner { grid-template-columns:repeat(2,1fr); gap:14px; }
    .strip-item:nth-child(2)::after { display:none; }
  }

  /* ---------- MOBILE HERO (matches mobile reference image) ---------- */
  @media (max-width:768px) {
    .nkr-hero {
      padding: 40px 18px 0;
      min-height: 88vh;
      justify-content: flex-end;
    }
    .hero-bg {
      background-position: center 35%;
      background-size: cover;
      transform: scale(1.02);
    }
    /* Mobile-specific shade so the temple image stays visible behind text */
    .hero-shade {
      background:
        linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,.35) 45%, rgba(0,0,0,.85) 100%),
        linear-gradient(90deg, rgba(0,0,0,.35) 0%, transparent 60%);
    }
    .hero-inner {
      position: relative;
      flex: 1 1 auto;
      min-height: 0;
      width: 100%;
    }
    .hero-text { max-width:100%; padding-bottom: 0; }
    .hero-heading { font-size: clamp(2rem, 9vw, 2.8rem); line-height: 1.06; margin-bottom: 18px; }
    .hero-desc { font-size: .98rem; max-width: 100%; margin-bottom: 26px; }
    /* Buttons are outside the animated text, so pin them to the hero's bottom edge. */
    .nkr-hero > .hero-actions {
      position: absolute !important;
      top: auto !important;
      left: 15px !important;
      right: 15px !important;
      bottom: 28px !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: stretch;
      gap: 12px;
      width: auto;
      margin: 0 !important;
      padding: 0;
      transform: none !important;
      z-index: 10;
    }
    .nkr-hero > .hero-actions .btn { width:100%; box-sizing:border-box; }
    .hero-eyebrow { font-size: .7rem; letter-spacing: .18em; margin-bottom: 14px; }
    .hero-divider { padding: 14px 0 20px; }

    .fleet-grid { grid-template-columns:1fr; }
    .features-grid { grid-template-columns:1fr; }
    .feature-strip-inner { grid-template-columns:1fr; }
    .strip-item { justify-content:flex-start; }
    .strip-item::after { display:none !important; }

    .fleet-section, .why-us, .faq-section { padding:50px 16px; }
    .testimonials-container { gap:8px; padding:0; }
    .testimonial-nav-btn { width:38px; height:38px; font-size:.85rem; }
    .testimonials-wrapper { min-height:360px; }
    .testimonial-card { padding:22px 18px; }
    .testimonial-text { font-size:.96rem; padding:0 12px; }
    .cta-banner { padding:46px 18px; }
  }

  @media (max-width:420px) {
    .nkr-hero { min-height: 92vh; padding: 30px 14px 0; }
    .hero-heading { font-size: 2rem; }
    .hero-desc { font-size: .92rem; }
  }

  /* KEYFRAMES */
  @keyframes heroBgDrift { 0%{transform:scale(1.06) translate3d(0,0,0);} 100%{transform:scale(1.12) translate3d(-1.2%,-1%,0);} }
  @keyframes heroTextRise { from{opacity:0; transform:translateY(28px); filter:blur(6px);} to{opacity:1; transform:translateY(0); filter:blur(0);} }
  @keyframes goldShimmer { 0%,100%{filter:drop-shadow(0 4px 18px rgba(230,178,58,.35)) brightness(1);} 50%{filter:drop-shadow(0 6px 28px rgba(245,215,110,.6)) brightness(1.12);} }
  @keyframes btnShine { 0%,60%{left:-80%;} 85%,100%{left:130%;} }
  @keyframes diamondSpin { from{transform:rotate(0);} to{transform:rotate(360deg);} }
  @keyframes ornamentPulse { 0%,100%{opacity:.6;} 50%{opacity:1;} }
  @keyframes underlinePulse { 0%,100%{transform:scaleX(.7); opacity:.75;} 50%{transform:scaleX(1.15); opacity:1;} }
  @keyframes cardArrival { from{opacity:0; transform:translateY(26px) scale(.975); filter:blur(5px);} to{opacity:1; transform:translateY(0) scale(1); filter:blur(0);} }
  @keyframes ctaPulse { 0%,100%{opacity:.6; transform:scale(1);} 50%{opacity:1; transform:scale(1.06);} }
  @keyframes carCruise { 0%, 100% { transform: scale(1.04) translate3d(-1%, 0, 0); } 50% { transform: scale(1.12) translate3d(1.4%, -.6%, 0); } }
  @keyframes imageShine { 0%, 15% { transform: translateX(-130%); opacity: 0; } 30% { opacity: 1; } 65%, 100% { transform: translateX(130%); opacity: 0; } }
  @keyframes speedLines { from { transform: translateX(-25%) skewX(-22deg); } to { transform: translateX(25%) skewX(-22deg); } }
  @keyframes badgePulse { 0%, 100% { box-shadow: 0 4px 14px rgba(230,178,58,.45), 0 0 0 0 rgba(230,178,58,.5); } 50% { box-shadow: 0 4px 18px rgba(230,178,58,.65), 0 0 0 6px rgba(230,178,58,0); } }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; }
    .fleet-img, .fleet-img-shine, .fleet-img-speedlines { animation: none !important; }
  }
`;

export default Home;