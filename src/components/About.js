import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import {
  FaHeart, FaHandshake, FaClock, FaShieldAlt, FaUsers,
  FaRoad, FaMapMarkerAlt, FaRupeeSign, FaStar, FaBullseye,
  FaEye, FaTrophy, FaLeaf, FaPhoneAlt, FaWhatsapp,
  FaQuestionCircle, FaRegCreditCard, FaIdCard, FaGasPump,
  FaTachometerAlt, FaUserFriends, FaPlus, FaMinus
} from "react-icons/fa";
import { MdSupportAgent, MdLocationOn } from "react-icons/md";
import { GiPriceTag } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";

function About() {
  // State for accordion - only one open at a time
  const [openFaq, setOpenFaq] = useState(null);

  // Toggle FAQ function (accordion style)
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Refs for scroll animations
  const storyRef = useRef(null);
  const valuesRef = useRef([]);
  const teamRef = useRef([]);
  const whyRef = useRef([]);
  const faqRef = useRef([]);

  useEffect(() => {
    // Inject custom styles
    const style = document.createElement('style');
    style.innerHTML = aboutStyles;
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

    if (storyRef.current) observer.observe(storyRef.current);
    valuesRef.current.forEach((el) => { if (el) observer.observe(el); });
    teamRef.current.forEach((el) => { if (el) observer.observe(el); });
    whyRef.current.forEach((el) => { if (el) observer.observe(el); });
    faqRef.current.forEach((el) => { if (el) observer.observe(el); });

    return () => observer.disconnect();
  }, []);

  // Values data
  const values = [
    { icon: <FaHeart />, title: "Customer First", desc: "Your satisfaction is our top priority. We go the extra mile to ensure a hassle-free experience." },
    { icon: <FaShieldAlt />, title: "Trust & Transparency", desc: "No hidden charges. What you see is what you pay. We build trust with every ride." },
    { icon: <FaClock />, title: "24/7 Availability", desc: "Round-the-clock service. Book anytime, we deliver at your convenience." },
    { icon: <GiPriceTag />, title: "Affordable Rates", desc: "Best prices in Tirupati & Renigunta. Quality service at low cost." },
    { icon: <FaLeaf />, title: "Well-Maintained Fleet", desc: "All vehicles regularly serviced for a smooth, safe, and eco-friendly ride." },
    { icon: <FaUsers />, title: "Community Focused", desc: "Proudly serving Tirupati and Renigunta with local expertise and care." },
  ];

  // Why Choose Us points
  const whyChoose = [
    { icon: <FaMapMarkerAlt />, title: "Free Pickup & Drop", desc: "Anywhere in Tirupati & Renigunta – no extra cost." },
    { icon: <FaRupeeSign />, title: "Lowest Price Guarantee", desc: "We offer the most competitive rates for self-drive rentals." },
    { icon: <FaUserFriends />, title: "Flexible Booking", desc: "Hourly, daily, weekly – we tailor to your needs." },
    { icon: <RiCustomerService2Fill />, title: "Dedicated Support", desc: "Our team is just a call away for any assistance." },
  ];

  // Team members (optional)
  const team = [
    { name: "Neelendar Reddy", role: "Founder & CEO", desc: "Passionate about providing top-notch self-drive experiences." },
    { name: "Suresh Kumar", role: "Operations Head", desc: "Ensures every car is in perfect condition for your journey." },
    { name: "Priya Sharma", role: "Customer Relations", desc: "Dedicated to making your booking smooth and enjoyable." },
  ];

  // FAQ data
  const faqs = [
    {
      question: "What makes NKR the best car rental in Tirupati?",
      answer: "NKR Self Drive offers the lowest prices, free pickup/drop anywhere in Tirupati & Renigunta, 24/7 support, and a well-maintained fleet. Our transparent pricing and customer-first approach have made us the top choice for self-drive rentals."
    },
    {
      question: "Do you serve Renigunta as well?",
      answer: "Yes! We provide free pickup and drop at any location in Renigunta. Just book online or call us, and we'll deliver the car to your doorstep."
    },
    {
      question: "What is the starting price for rentals?",
      answer: "Our self-drive cars start from as low as ₹1800 per day. We have options to suit every budget, with no hidden charges."
    },
    {
      question: "Is there a security deposit?",
      answer: "Yes, a refundable security deposit of ₹3000 is required at the time of pickup. It will be returned within 7 days after the car is returned in good condition."
    },
    {
      question: "What documents do I need?",
      answer: "You need a valid driving licence (both printed and digital are accepted) and a government ID proof (Aadhar, Voter ID, or Passport)."
    },
    {
      question: "What is your fuel policy?",
      answer: "Cars are provided with a full tank; you need to return them with a full tank. If you return with less fuel, we'll charge for the difference."
    },
    {
      question: "Can I book for just a few hours?",
      answer: "Absolutely! We offer hourly rentals as well. Minimum rental period is 4 hours. Contact us for customized packages."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach us 24/7 at +91-1234567890 or via WhatsApp at the same number. Email: neelandarnkr@gmail.com"
    }
  ];

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoRental",
        "@id": "https://nkrselfdrive.com/#organization",
        "name": "NKR Self Drive Cars",
        "description": "Best self-drive car rental in Tirupati and Renigunta with affordable prices starting from ₹1800. Free pickup & drop, 24/7 service, well-maintained fleet.",
        "url": "https://nkrselfdrive.com",
        "logo": "https://nkrselfdrive.com/logo.png",
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
          "https://facebook.com/nkrselfdrive",
          "https://www.instagram.com/neelendar_reddy_nkr_?utm_source=qr&igsh=MWJ6YTN3OTN5bzRqYQ==",
          "https://twitter.com/nkrselfdrive"
        ],
        "areaServed": [
          {
            "@type": "City",
            "name": "Tirupati"
          },
          {
            "@type": "City",
            "name": "Renigunta"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "520",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://nkrselfdrive.com/about#breadcrumb",
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
            "name": "About Us",
            "item": "https://nkrselfdrive.com/about"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://nkrselfdrive.com/about#faq",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>About NKR Self Drive | Best Car Rental in Tirupati & Renigunta</title>
        <meta name="description" content="Learn about NKR Self Drive – the most trusted and affordable self-drive car rental service in Tirupati and Renigunta. Low prices, free pickup & drop, 24/7 support, and a customer-first approach. Book your ride today!" />
        <meta name="keywords" content="about NKR self drive, best car rental Tirupati, low price car rental Tirupati, car hire Renigunta, self drive cars Tirupati, affordable car rental Andhra Pradesh, car rental near me, top rated car rental Tirupati" />
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Tirupati" />
        <meta name="geo.position" content="13.6288;79.4192" />
        <meta name="ICBM" content="13.6288, 79.4192" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nkrselfdrive.com/about" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nkrselfdrive.com/about" />
        <meta property="og:title" content="About NKR Self Drive – Best Car Rental in Tirupati & Renigunta" />
        <meta property="og:description" content="Discover why NKR is the top choice for self-drive cars in Tirupati. Lowest prices, free pickup/drop, 24/7 support. Serving Tirupati and Renigunta." />
        <meta property="og:image" content="https://nkrselfdrive.com/about-og.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nkrselfdrive.com/about" />
        <meta property="twitter:title" content="About NKR Self Drive – Best Car Rental in Tirupati & Renigunta" />
        <meta property="twitter:description" content="Discover why NKR is the top choice for self-drive cars in Tirupati. Lowest prices, free pickup/drop, 24/7 support." />
        <meta property="twitter:image" content="https://nkrselfdrive.com/about-og.jpg" />

        <link rel="icon" href="/favicon.ico" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="about-page">
        {/* Hero Section - No Image */}
        <section className="about-hero" aria-label="About Us Hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">Driving Your Journeys Since 2020</h1>
            <p className="hero-subtitle">
              NKR Self Drive is Tirupati's most trusted self-drive car rental, 
              offering affordable, safe, and convenient mobility solutions. 
              We're not just about cars; we're about creating memorable experiences.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <FaUsers className="stat-icon" />
                <span className="stat-number">5000+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat-item">
                <FaRoad className="stat-icon" />
                <span className="stat-number">1M+</span>
                <span className="stat-label">Kilometers Driven</span>
              </div>
              <div className="stat-item">
                <FaStar className="stat-icon" />
                <span className="stat-number">4.9</span>
                <span className="stat-label">Customer Rating</span>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="story-section" ref={storyRef}>
          <div className="story-content">
            <h2 className="section-title">Our Story</h2>
            <p>
              Founded in 2020 by <strong>Neelendar Reddy</strong>, NKR Self Drive was born from a simple idea: 
              provide <strong>affordable, hassle-free self-drive cars</strong> to the people of Tirupati and surrounding areas. 
              What started with a single car has now grown into a fleet of well-maintained vehicles, serving thousands of satisfied customers.
            </p>
            <p>
              We understood that travelers and locals alike needed reliable transportation without the burden of ownership. 
              With a focus on <strong>transparency, low prices, and exceptional service</strong>, we've become the go-to choice for 
              self-drive rentals in the region. Our commitment to <strong>free pickup and drop anywhere in Tirupati and Renigunta</strong> 
              sets us apart from the competition.
            </p>
            <div className="story-mission">
              <div className="mission-box">
                <FaBullseye className="mission-icon" />
                <h3>Our Mission</h3>
                <p>Empower every traveler with freedom and flexibility through affordable, safe, and well-maintained self-drive cars.</p>
              </div>
              <div className="mission-box">
                <FaEye className="mission-icon" />
                <h3>Our Vision</h3>
                <p>To be the most loved and trusted self-drive brand in Andhra Pradesh, known for integrity and customer delight.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Core Values */}
        <section className="values-section">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card"
                ref={(el) => (valuesRef.current[index] = el)}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us (with focus on Tirupati & Renigunta) */}
        <section className="why-choose-section">
          <h2 className="section-title">Why We're the Best in Tirupati & Renigunta</h2>
          <div className="why-grid">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="why-card"
                ref={(el) => (whyRef.current[index] = el)}
              >
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="service-areas">
            <h3><FaMapMarkerAlt /> Proudly Serving</h3>
            <div className="area-chips">
              <span className="area-chip"><MdLocationOn /> Tirupati City</span>
              <span className="area-chip"><MdLocationOn /> Renigunta</span>
              <span className="area-chip"><MdLocationOn /> Tiruchanur</span>
              <span className="area-chip"><MdLocationOn /> Alipiri</span>
              <span className="area-chip"><MdLocationOn /> Kapilatheertham</span>
            </div>
          </div>
        </section>

        {/* Meet Our Team (optional) */}
        <section className="team-section">
          <h2 className="section-title">Meet the Team Behind NKR</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div
                key={index}
                className="team-card"
                ref={(el) => (teamRef.current[index] = el)}
              >
                <div className="team-avatar">
                  <FaUsers />
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-desc">{member.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section with Accordion (numbered questions, plus/minus icons) */}
        <section className="faq-section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-card"
                ref={(el) => (faqRef.current[index] = el)}
              >
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <FaQuestionCircle className="faq-icon" />
                  <h3>
                    <span className="faq-number">{index + 1}.</span> {faq.question}
                  </h3>
                  <button className="faq-toggle" aria-label="Toggle answer">
                    {openFaq === index ? <FaMinus /> : <FaPlus />}
                  </button>
                </div>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to hit the road?</h2>
            <p>Experience the freedom of self-drive with NKR. Lowest prices, free pickup & drop in Tirupati & Renigunta.</p>
            <div className="cta-buttons">
              <Link to="/book" className="cta-primary">Book Your Ride Now</Link>
              <a href="tel:+911234567890" className="cta-secondary">
                <FaPhoneAlt /> Call Us
              </a>
              <a href="https://wa.me/911234567890" className="cta-whatsapp">
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// Enhanced responsive styles with improved mobile support
const aboutStyles = `
  .about-page {
    font-family: 'Segoe UI', 'Poppins', system-ui, sans-serif;
    background-color: #f4f7fb;
    color: #1e293b;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* Hero Section */
  .about-hero {
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
    color: #334155;
    animation: slideUp 0.7s ease-out;
  }

  .hero-stats {
    display: flex;
    justify-content: center;
    gap: clamp(1.5rem, 5vw, 3rem);
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255,255,255,0.8);
    padding: 1rem 1.5rem;
    border-radius: 20px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.05);
    backdrop-filter: blur(5px);
    animation: fadeInUp 0.8s ease-out;
  }

  .stat-icon {
    font-size: 2rem;
    color: #1e4a76;
    margin-bottom: 0.5rem;
  }

  .stat-number {
    font-size: 1.8rem;
    font-weight: 700;
    color: #0f2a40;
  }

  .stat-label {
    font-size: 0.9rem;
    color: #475569;
  }

  /* Section Titles */
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

  /* Story Section */
  .story-section {
    max-width: 1200px;
    margin: 3rem auto;
    padding: 0 1.5rem;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .story-section.in-view {
    animation: fadeInUp 0.5s forwards;
  }

  .story-content p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #2c3e50;
    margin-bottom: 1.5rem;
  }

  .story-mission {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .mission-box {
    flex: 1 1 250px;
    background: white;
    padding: 2rem;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    border: 1px solid #e2e8f0;
    transition: transform 0.3s;
  }

  .mission-box:hover {
    transform: translateY(-5px);
    border-color: #2563eb60;
  }

  .mission-icon {
    font-size: 2.5rem;
    color: #1e4a76;
    margin-bottom: 1rem;
  }

  /* Values Grid */
  .values-section {
    padding: 2rem 1rem;
    max-width: 1400px;
    margin: 0 auto;
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .value-card {
    background-color: #ffffff;
    border-radius: 20px;
    padding: 2rem 1.5rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    opacity: 0;
    transform: translateY(30px);
    border: 1px solid #e2e8f0;
    text-align: center;
  }

  .value-card.in-view {
    animation: fadeInUp 0.5s forwards;
  }

  .value-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
    border-color: #2563eb40;
  }

  .value-icon {
    font-size: 2.5rem;
    color: #1e4a76;
    margin-bottom: 1rem;
    transition: transform 0.2s;
  }

  .value-card:hover .value-icon {
    transform: scale(1.1);
    color: #2563eb;
  }

  .value-card h3 {
    margin-bottom: 0.8rem;
    color: #0f2a40;
  }

  /* Why Choose */
  .why-choose-section {
    background-color: #eef2f6;
    padding: 3rem 1rem;
    margin-top: 3rem;
  }

  .why-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
  }

  .why-card {
    text-align: center;
    padding: 1.5rem 1rem;
    background-color: #ffffff;
    border-radius: 20px;
    transition: all 0.3s ease;
    border: 1px solid #e2e8f0;
    opacity: 0;
    transform: translateY(30px);
  }

  .why-card.in-view {
    animation: fadeInUp 0.5s forwards;
  }

  .why-card:hover {
    transform: translateY(-5px) scale(1.02);
    border-color: #2563eb60;
  }

  .why-icon {
    font-size: 2rem;
    color: #1e4a76;
    margin-bottom: 1rem;
  }

  .service-areas {
    text-align: center;
    margin: 2rem auto 0;
  }

  .service-areas h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: #0f2a40;
  }

  .area-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    justify-content: center;
    margin-top: 1rem;
  }

  .area-chip {
    background: #ffffff;
    padding: 0.5rem 1.2rem;
    border-radius: 50px;
    border: 1px solid #2563eb40;
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.95rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    transition: all 0.2s;
  }

  .area-chip:hover {
    background: #1e4a76;
    color: white;
    border-color: #1e4a76;
  }

  /* Team Section */
  .team-section {
    padding: 3rem 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .team-card {
    background: white;
    border-radius: 20px;
    padding: 2rem 1.5rem;
    text-align: center;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    opacity: 0;
    transform: translateY(30px);
    border: 1px solid #e2e8f0;
  }

  .team-card.in-view {
    animation: fadeInUp 0.5s forwards;
  }

  .team-card:hover {
    transform: translateY(-5px);
    border-color: #2563eb60;
  }

  .team-avatar {
    width: 100px;
    height: 100px;
    background: #e2e8f0;
    border-radius: 50%;
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: #1e4a76;
  }

  .team-role {
    color: #2563eb;
    font-weight: 600;
    margin: 0.5rem 0;
  }

  .team-desc {
    color: #475569;
    font-size: 0.9rem;
  }

  /* FAQ Section */
  .faq-section {
    background: white;
    padding: 3rem 1rem;
  }

  .faq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1.5rem;
    max-width: 1400px;
    margin: 2rem auto;
  }

  .faq-card {
    background: #f8fafc;
    border-radius: 20px;
    padding: 1.5rem;
    border: 1px solid #e2e8f0;
    transition: all 0.3s;
    opacity: 0;
    transform: translateY(30px);
  }

  .faq-card.in-view {
    animation: fadeInUp 0.5s forwards;
  }

  .faq-card:hover {
    border-color: #2563eb;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  }

  .faq-question {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;
    user-select: none;
  }

  .faq-icon {
    color: #1e4a76;
    font-size: 1.3rem;
    flex-shrink: 0;
  }

  .faq-question h3 {
    font-size: 1.1rem;
    color: #0f2a40;
    margin: 0;
    flex: 1;
    word-break: break-word; /* Prevents long words from overflowing */
  }

  .faq-number {
    font-weight: 600;
    margin-right: 0.3rem;
    color: #1e4a76;
  }

  .faq-toggle {
    background: none;
    border: none;
    color: #1e4a76;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
  }

  .faq-toggle:hover {
    transform: scale(1.1);
    color: #2563eb;
  }

  .faq-answer {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #e2e8f0;
    animation: fadeIn 0.3s ease;
  }

  .faq-answer p {
    color: #475569;
    line-height: 1.6;
    font-size: 0.95rem;
    margin: 0;
    word-break: break-word;
  }

  /* CTA Section */
  .cta-section {
    background: linear-gradient(135deg, #1e4a76, #2563eb);
    padding: 4rem 1rem;
    text-align: center;
    color: white;
  }

  .cta-content h2 {
    font-size: clamp(1.8rem, 5vw, 2.5rem);
    margin-bottom: 1rem;
  }

  .cta-content p {
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto 2rem;
    opacity: 0.9;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cta-primary, .cta-secondary, .cta-whatsapp {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.8rem;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s;
    min-height: 48px;
  }

  .cta-primary {
    background: white;
    color: #1e4a76;
  }

  .cta-primary:hover {
    background: #f0f9ff;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }

  .cta-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
  }

  .cta-secondary:hover {
    background: white;
    color: #1e4a76;
  }

  .cta-whatsapp {
    background: #25D366;
    color: white;
  }

  .cta-whatsapp:hover {
    background: #128C7E;
    transform: translateY(-2px);
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

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
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

  @keyframes glowPulse {
    0%, 100% { text-shadow: 0 2px 4px rgba(0,0,0,0.05); }
    50% { text-shadow: 0 4px 12px rgba(37,99,235,0.3); }
  }

  /* Responsive Styles - Enhanced for mobile */
  @media (max-width: 640px) {
    .hero-stats {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .story-mission {
      flex-direction: column;
    }

    .faq-grid {
      grid-template-columns: 1fr; /* Ensure single column on small screens */
      gap: 1rem;
    }

    .faq-card {
      padding: 1.2rem; /* Slightly reduce padding */
    }

    .faq-question h3 {
      font-size: 1rem; /* Slightly smaller text */
    }


    .cta-primary, .cta-secondary, .cta-whatsapp {
      width: 100%;
      justify-content: center;
      padding: 0.8rem 1rem; /* Adjust padding */
      font-size: 1rem;
    }

    .section-title {
      margin: 1.5rem 0.5rem 1rem;
    }
  }

  /* Extra small devices (phones < 480px) */
  @media (max-width: 480px) {
    .about-hero {
      padding: 2rem 0.5rem;
      min-height: auto;
    }

    .hero-title {
      font-size: 2rem;
    }

    .hero-subtitle {
      font-size: 1rem;
    }

    .stat-item {
      padding: 0.8rem 1rem;
      width: 100%;
      max-width: 280px;
    }

    .stat-number {
      font-size: 1.5rem;
    }

    .value-card, .why-card, .team-card {
      padding: 1.5rem 1rem;
    }

    .faq-card {
      padding: 1rem;
    }

    .faq-question {
      gap: 0.5rem;
    }

    .faq-icon {
      font-size: 1.1rem;
    }

    .faq-question h3 {
      font-size: 0.95rem;
    }

    .faq-toggle {
      font-size: 1rem;
    }



    .cta-content h2 {
      font-size: 1.8rem;
    }

    .cta-content p {
      font-size: 1rem;
    }
  }
`;

export default About;