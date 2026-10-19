import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import {
  FaHeart, FaClock, FaShieldAlt, FaUsers,
  FaRoad, FaMapMarkerAlt, FaRupeeSign, FaStar, FaBullseye,
  FaEye, FaLeaf, FaPhoneAlt, FaWhatsapp,
  FaQuestionCircle, FaUserFriends, FaPlus, FaMinus,
  FaCalendarCheck, FaChevronRight,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { GiPriceTag } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";

function About() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const storyRef = useRef(null);
  const valuesRef = useRef([]);
  const teamRef = useRef([]);
  const whyRef = useRef([]);
  const faqRef = useRef([]);
  const revealLeftRefs = useRef([]);
  const revealRightRefs = useRef([]);
  const revealUpRefs = useRef([]);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = aboutStyles;
    document.head.appendChild(style);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    if (storyRef.current) observer.observe(storyRef.current);
    valuesRef.current.forEach((el) => el && observer.observe(el));
    teamRef.current.forEach((el) => el && observer.observe(el));
    whyRef.current.forEach((el) => el && observer.observe(el));
    faqRef.current.forEach((el) => el && observer.observe(el));
    revealLeftRefs.current.forEach((el) => el && observer.observe(el));
    revealRightRefs.current.forEach((el) => el && observer.observe(el));
    revealUpRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  const values = [
    { icon: <FaHeart />, title: "Customer First", desc: "Your satisfaction is our top priority. We go the extra mile to ensure a hassle-free experience." },
    { icon: <FaShieldAlt />, title: "Trust & Transparency", desc: "No hidden charges. What you see is what you pay. We build trust with every ride." },
    { icon: <FaClock />, title: "24/7 Availability", desc: "Round-the-clock service. Book anytime, we deliver at your convenience." },
    { icon: <GiPriceTag />, title: "Affordable Rates", desc: "Best prices in Tirupati & Renigunta. Quality service at low cost." },
    { icon: <FaLeaf />, title: "Well-Maintained Fleet", desc: "All vehicles regularly serviced for a smooth, safe, and eco-friendly ride." },
    { icon: <FaUsers />, title: "Community Focused", desc: "Proudly serving Tirupati and Renigunta with local expertise and care." },
  ];

  const whyChoose = [
    { icon: <FaMapMarkerAlt />, title: "Pickup & Drop", desc: "Anywhere in Tirupati & Renigunta." },
    { icon: <FaRupeeSign />, title: "Lowest Price Guarantee", desc: "We offer the most competitive rates for self-drive rentals." },
    { icon: <FaUserFriends />, title: "Flexible Booking", desc: "Hourly, daily, weekly – we tailor to your needs." },
    { icon: <RiCustomerService2Fill />, title: "Dedicated Support", desc: "Our team is just a call away for any assistance." },
  ];

  const team = [
    { name: "Neelendar Reddy", role: "Founder", desc: "Passionate about providing top-notch self-drive experiences." },
    { name: "Himachal", role: "Driver", desc: "Ensures every car is in perfect condition for your journey." },
  ];

  const faqs = [
    { question: "What makes NKR the best car rental in Tirupati?", answer: "NKR Self Drive offers the lowest prices, pickup/drop anywhere in Tirupati & Renigunta, 24/7 support, and a well-maintained fleet. Our transparent pricing and customer-first approach have made us the top choice for self-drive rentals." },
    { question: "Do you serve Renigunta as well?", answer: "Yes! We provide  pickup and drop at any location in Renigunta. Just book online or call us, and we'll deliver the car to your doorstep." },
    { question: "What is the starting price for rentals?", answer: "Our self-drive cars start from as low as ₹1800 per day. We have options to suit every budget, with no hidden charges." },
    { question: "Is there a security deposit?", answer: "Yes, a refundable security deposit of ₹3000 is required at the time of pickup. It will be refunded immediately when the car is returned in good condition." },
    { question: "What documents do I need?", answer: "You need a valid driving licence (both printed and digital are accepted) and a government ID proof (Aadhar, Voter ID, or Passport)." },
    { question: "What is your fuel policy?", answer: "Cars come with some fuel at pickup. You must return the car with the same fuel. If less, we will charge for the difference." },
    { question: "Can I book for just a few hours?", answer: "Absolutely! We offer hourly rentals as well. Minimum rental period is 6 hours. Contact us for customized packages." },
    { question: "How do I contact customer support?", answer: "You can reach us 24/7 at +91-8660014029 or via WhatsApp at the same number. Email: neelandarnkr@gmail.com" },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoRental",
        "@id": "https://nkrselfdrivecarrentals.in/#organization",
        name: "NKR Self Drive Cars",
        description: "Best self-drive car rental in Tirupati and Renigunta from ₹1800.  pickup & drop, 24/7 service, well-maintained fleet.",
        url: "https://nkrselfdrivecarrentals.in",
        logo: "https://nkrselfdrivecarrentals.in/logo.png",
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
        areaServed: [
          { "@type": "City", name: "Tirupati" },
          { "@type": "City", name: "Renigunta" },
        ],
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "520", bestRating: "5", worstRating: "1" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://nkrselfdrivecarrentals.in/about#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://nkrselfdrivecarrentals.in" },
          { "@type": "ListItem", position: 2, name: "About Us", item: "https://nkrselfdrivecarrentals.in/about" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://nkrselfdrivecarrentals.in/about#faq",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>About NKR Self Drive | Best Car Rental in Tirupati & Renigunta</title>
        <meta name="description" content="Learn about NKR Self Drive – the most trusted and affordable self-drive car rental service in Tirupati and Renigunta. Low prices, pickup & drop, 24/7 support, and a customer-first approach." />
        <meta name="keywords" content="about NKR self drive, best car rental Tirupati, low price car rental Tirupati, car hire Renigunta, self drive cars Tirupati, affordable car rental Andhra Pradesh, top rated car rental Tirupati" />
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Tirupati" />
        <meta name="geo.position" content="13.6288;79.4192" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nkrselfdrivecarrentals.in/about" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nkrselfdrivecarrentals.in/about" />
        <meta property="og:title" content="About NKR Self Drive – Best Car Rental in Tirupati & Renigunta" />
        <meta property="og:description" content="Discover why NKR is the top choice for self-drive cars in Tirupati. Lowest prices, pickup/drop, 24/7 support." />
        <meta property="og:image" content="https://nkrselfdrivecarrentals.in/about-og.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="About NKR Self Drive – Best Car Rental in Tirupati & Renigunta" />
        <meta property="twitter:description" content="Discover why NKR is the top choice for self-drive cars in Tirupati. Lowest prices, pickup/drop, 24/7 support." />
        <meta property="twitter:image" content="https://nkrselfdrivecarrentals.in/about-og.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="about-page">

        {/* ================= HERO ================= */}
        <section className="about-hero" aria-label="About Us Hero">
          <div className="hero-ornament" aria-hidden="true" />
          <div className="hero-content">
            <p className="hero-eyebrow">
              <span className="gold-diamond" aria-hidden="true">◆</span>
              About NKR Self Drive
              <span className="gold-diamond" aria-hidden="true">◆</span>
            </p>
            <h1 className="hero-title">
              Driving Your Journeys <br />
              <span className="hero-gold">Since 2023</span>
            </h1>
            <p className="hero-subtitle">
              NKR Self Drive is Tirupati's most trusted self-drive car rental,
              offering affordable, safe, and convenient mobility solutions.
              We're not just about cars; we're about creating memorable experiences.
            </p>

            <div className="hero-stats">
              {[
                { icon: <FaUsers />, num: "1000+", label: "Happy Customers" },
                { icon: <FaRoad />, num: "3L+", label: "Kilometers Driven" },
                { icon: <FaStar />, num: "4.9", label: "Customer Rating" },
              ].map((s, i) => (
                <div className="stat-item" key={i}>
                  <div className="stat-icon-wrap">{s.icon}</div>
                  <span className="stat-number">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-divider" aria-hidden="true">
            <span className="divider-line" />
            <span className="divider-diamond">◆</span>
            <span className="divider-line" />
          </div>
        </section>

        {/* ================= STORY ================= */}
        <section className="story-section reveal-up" ref={storyRef}>
          <div className="story-content">
            <div className="choose-head">
              <h2 className="choose-title">Our <span className="gold">Story</span></h2>
            </div>
            <p>
              Founded in 2023 by <strong>Neelendar Reddy</strong>, NKR Self Drive was born from a simple idea:
              provide <strong>affordable, hassle-free self-drive cars</strong> to the people of Tirupati and surrounding areas.
              What started with a single car has now grown into a fleet of well-maintained vehicles, serving thousands of satisfied customers.
            </p>
            <p>
              We understood that travelers and locals alike needed reliable transportation without the burden of ownership.
              With a focus on <strong>transparency, low prices, and exceptional service</strong>, we've become the go-to choice for
              self-drive rentals in the region. Our commitment to <strong> pickup and drop anywhere in Tirupati and Renigunta</strong>{" "}
              sets us apart from the competition.
            </p>

            <div className="story-mission">
              <div className="mission-box reveal-left" ref={(el) => (revealLeftRefs.current[0] = el)}>
                <div className="mission-icon-wrap"><FaBullseye /></div>
                <h3>Our Mission</h3>
                <p>Empower every traveler with freedom and flexibility through affordable, safe, and well-maintained self-drive cars.</p>
              </div>
              <div className="mission-box reveal-right" ref={(el) => (revealRightRefs.current[0] = el)}>
                <div className="mission-icon-wrap"><FaEye /></div>
                <h3>Our Vision</h3>
                <p>To be the most loved and trusted self-drive brand in Andhra Pradesh, known for integrity and customer delight.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CORE VALUES ================= */}
        <section className="values-section">
          <div className="choose-head">
            <h2 className="choose-title">Our Core <span className="gold">Values</span></h2>
            <p className="choose-sub">The principles that drive every ride we deliver.</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div
                key={index}
                className={`value-card reveal-${index % 3 === 0 ? "left" : index % 3 === 2 ? "right" : "up"}`}
                ref={(el) => {
                  valuesRef.current[index] = el;
                  if (index % 3 === 0) revealLeftRefs.current.push(el);
                  else if (index % 3 === 2) revealRightRefs.current.push(el);
                  else revealUpRefs.current.push(el);
                }}
                style={{ transitionDelay: `${(index % 3) * 0.12}s` }}
              >
                <div className="value-icon-wrap">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="why-choose-section">
          <div className="choose-head">
            <h2 className="choose-title">
              Why We're the <span className="gold">Best</span> in Tirupati &amp; Renigunta
            </h2>
          </div>
          <div className="why-grid">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className={`why-card reveal-${index % 2 === 0 ? "left" : "right"}`}
                ref={(el) => {
                  whyRef.current[index] = el;
                  if (index % 2 === 0) revealLeftRefs.current.push(el);
                  else revealRightRefs.current.push(el);
                }}
              >
                <div className="why-icon-wrap">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="service-areas reveal-up" ref={(el) => (revealUpRefs.current[0] = el)}>
            <h3><FaMapMarkerAlt className="pin-icon" /> Proudly Serving</h3>
            <div className="area-chips">
              {["Tirupati City", "Renigunta", "Tiruchanur", "Alipiri", "Kapilatheertham", "Airport"].map((area, i) => (
                <span className="area-chip" key={i}>
                  <MdLocationOn /> {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TEAM ================= */}
        <section className="team-section">
          <div className="choose-head">
            <h2 className="choose-title">Meet the <span className="gold">Team</span> Behind NKR</h2>
            <p className="choose-sub">People who make your ride effortless.</p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div
                key={index}
                className={`team-card reveal-${index % 3 === 0 ? "left" : index % 3 === 2 ? "right" : "up"}`}
                ref={(el) => {
                  teamRef.current[index] = el;
                  if (index % 3 === 0) revealLeftRefs.current.push(el);
                  else if (index % 3 === 2) revealRightRefs.current.push(el);
                  else revealUpRefs.current.push(el);
                }}
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

        {/* ================= FAQ ================= */}
        <section className="faq-section">
          <div className="choose-head">
            <h2 className="choose-title">Frequently Asked <span className="gold">Questions</span></h2>
            <p className="choose-sub">Quick answers to help you plan your next drive.</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              /* The wrapper div handles the reveal animation */
              <div
                key={index}
                className="reveal-up"
                ref={(el) => {
                  faqRef.current[index] = el;
                  revealUpRefs.current.push(el);
                }}
              >
                {/* The actual card handles the open/close state without interference */}
                <div className={`faq-card ${openFaq === index ? "open" : ""}`}>
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
              </div>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to <span className="cta-gold">hit the road?</span></h2>
            <p>Experience the freedom of self-drive with NKR. Lowest prices, pickup &amp; drop in Tirupati &amp; Renigunta.</p>
            <div className="cta-buttons">
              <Link to="/book" className="cta-primary">
                <FaCalendarCheck /> Book Your Ride Now <FaChevronRight className="btn-chev" />
              </Link>
              <a href="tel:+918660014029" className="cta-secondary">
                <FaPhoneAlt /> Call Us
              </a>
              <a href="https://wa.me/918660014029" className="cta-whatsapp">
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

/* =========================================================
   STYLES — matches the home page (gold/black premium)
   ========================================================= */
const aboutStyles = `
  :root {
    --gold: #e6b23a;
    --gold-2: #f5d76e;
    --gold-deep: #b8860b;
    --line: rgba(230,178,58,0.35);
    --whatsapp: #25d366;
    --whatsapp-dark: #128c7e;
  }

  .about-page {
    font-family: 'Segoe UI', 'Poppins', system-ui, -apple-system, sans-serif;
    background: #fff;
    color: #1a1a1a;
    overflow-x: hidden;
  }

  /* ---------- HERO ---------- */
  .about-hero {
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
    min-height: 60vh;
  }

  .about-hero::before {
    content: "";
    position: absolute;
    inset: -20%;
    background: linear-gradient(110deg, transparent 40%, rgba(230,178,58,.12) 48%, transparent 56%);
    transform: translateX(-80%) skewX(-12deg);
    animation: heroSweep 9s ease-in-out infinite;
    pointer-events: none;
    z-index: 0;
  }

  @keyframes heroSweep {
    0%, 15% { transform: translateX(-80%) skewX(-12deg); opacity: 0; }
    40% { opacity: 1; }
    70%, 100% { transform: translateX(80%) skewX(-12deg); opacity: 0; }
  }

  .hero-ornament {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 20% 50%, rgba(230,178,58,0.1), transparent 55%);
    animation: ornamentPulse 8s ease-in-out infinite;
    pointer-events: none;
    z-index: 0;
  }

  @keyframes ornamentPulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 900px;
    margin: 0 auto;
  }

  .hero-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--gold);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    margin: 0 0 22px;
  }

  .gold-diamond { color: var(--gold); font-size: 0.8rem; }

  .hero-title {
    font-family: Georgia, 'Times New Roman', serif;
    font-size: clamp(2.2rem, 5.8vw, 4.5rem);
    line-height: 1.05;
    font-weight: 700;
    margin: 0 0 22px;
    color: #fff;
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
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    filter: drop-shadow(0 4px 18px rgba(230,178,58,.35));
    animation: goldShimmer 4s ease-in-out infinite;
  }

  @keyframes goldShimmer {
    0%, 100% { filter: drop-shadow(0 4px 18px rgba(230,178,58,.35)) brightness(1); }
    50% { filter: drop-shadow(0 6px 28px rgba(245,215,110,.6)) brightness(1.12); }
  }

  .hero-subtitle {
    color: #d6d6d6;
    font-size: clamp(1rem, 1.8vw, 1.18rem);
    line-height: 1.7;
    max-width: 720px;
    margin: 0 auto 40px;
    animation: titleReveal 1s .15s cubic-bezier(.2,.75,.25,1) both;
  }

  .hero-stats {
    display: flex;
    justify-content: center;
    gap: 26px;
    flex-wrap: wrap;
    animation: titleReveal 1s .3s cubic-bezier(.2,.75,.25,1) both;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(230,178,58,0.3);
    border-radius: 18px;
    padding: 20px 30px;
    min-width: 180px;
    transition: transform .35s ease, border-color .3s ease, box-shadow .35s ease;
    animation: statFloat 4s ease-in-out infinite;
  }

  .stat-item:nth-child(2) { animation-delay: 0.4s; }
  .stat-item:nth-child(3) { animation-delay: 0.8s; }

  @keyframes statFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }

  .stat-item:hover {
    transform: translateY(-8px);
    border-color: var(--gold);
    box-shadow: 0 18px 40px rgba(230,178,58,.2);
  }

  .stat-icon-wrap {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(230,178,58,0.22), rgba(230,178,58,0.06));
    border: 1px solid rgba(230,178,58,0.4);
    color: var(--gold);
    font-size: 1.4rem;
    margin-bottom: 12px;
    animation: iconFloat 3s ease-in-out infinite;
  }

  .stat-item:nth-child(2) .stat-icon-wrap { animation-delay: .4s; }
  .stat-item:nth-child(3) .stat-icon-wrap { animation-delay: .8s; }

  .stat-number {
    font-family: Georgia, serif;
    font-size: 1.9rem;
    font-weight: 800;
    color: var(--gold);
    line-height: 1;
  }

  .stat-label {
    color: #c8c8c8;
    font-size: 0.86rem;
    margin-top: 6px;
    letter-spacing: 0.02em;
  }

  .hero-divider {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin-top: 50px;
    width: 100%;
  }

  .divider-line {
    flex: 1;
    max-width: 380px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    opacity: 0.7;
  }

  .divider-diamond {
    color: var(--gold);
    font-size: 0.7rem;
    animation: diamondSpin 6s linear infinite;
  }

  @keyframes diamondSpin {
    from { transform: rotate(0); }
    to { transform: rotate(360deg); }
  }

  /* ---------- SHARED SECTION HEADS ---------- */
  .choose-head { text-align: center; margin-bottom: 40px; }

  .choose-title {
    font-family: Georgia, serif;
    font-size: clamp(1.9rem, 4vw, 2.9rem);
    font-weight: 700;
    color: #111;
    margin: 0 0 12px;
    letter-spacing: -0.01em;
  }

  .choose-title .gold {
    color: var(--gold-deep);
    position: relative;
  }

  .choose-title .gold::after {
    content: "";
    position: absolute;
    left: 0; right: 0; bottom: -8px;
    height: 3px;
    border-radius: 3px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    animation: underlinePulse 3s ease-in-out infinite;
  }

  @keyframes underlinePulse {
    0%, 100% { transform: scaleX(0.7); opacity: 0.75; }
    50% { transform: scaleX(1.15); opacity: 1; }
  }

  .choose-sub {
    color: #6b6b6b;
    font-size: 1.02rem;
    margin: 18px 0 0;
  }

  /* ---------- STORY ---------- */
  .story-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 70px 24px;
  }

  .story-content p {
    font-size: 1.05rem;
    line-height: 1.85;
    color: #334155;
    margin-bottom: 20px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  .story-content strong { color: #b8860b; font-weight: 700; }

  .story-mission {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 26px;
    margin-top: 40px;
  }

  .mission-box {
    background: #fff;
    padding: 34px 28px;
    border-radius: 18px;
    border: 1px solid rgba(230,178,58,0.3);
    box-shadow: 0 8px 24px rgba(0,0,0,0.04);
    text-align: center;
    transition: transform .4s ease, box-shadow .4s ease, border-color .3s ease;
  }

  .mission-box:hover {
    transform: translateY(-6px);
    border-color: rgba(230,178,58,0.6);
    box-shadow: 0 18px 40px rgba(0,0,0,.08);
  }

  .mission-icon-wrap {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(230,178,58,0.18), rgba(230,178,58,0.05));
    border: 1px solid rgba(230,178,58,0.4);
    color: var(--gold-deep);
    font-size: 1.6rem;
    margin-bottom: 16px;
    animation: iconFloat 3s ease-in-out infinite;
  }

  @keyframes iconFloat {
    0%, 100% { transform: translateY(0) rotate(0); }
    50% { transform: translateY(-6px) rotate(-4deg); }
  }

  .mission-box h3 {
    font-family: Georgia, serif;
    font-size: 1.3rem;
    margin: 0 0 10px;
    color: #0a0a0a;
  }

  .mission-box p {
    font-size: 0.96rem;
    line-height: 1.7;
    color: #555;
    margin: 0;
  }

  /* ---------- CORE VALUES ---------- */
  .values-section {
    max-width: 1300px;
    margin: 0 auto;
    padding: 70px 24px;
    background: linear-gradient(180deg, #fdf9ee 0%, #ffffff 100%);
    border-top: 1px solid rgba(230,178,58,0.2);
    border-bottom: 1px solid rgba(230,178,58,0.2);
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 20px;
  }

  .value-card {
    background: #fff;
    padding: 32px 24px;
    border-radius: 18px;
    border: 1px solid rgba(0,0,0,0.07);
    box-shadow: 0 6px 18px rgba(0,0,0,0.04);
    text-align: center;
    transition: transform .45s cubic-bezier(.2,.8,.2,1), box-shadow .45s ease, border-color .35s ease;
  }

  .value-card:hover {
    transform: translateY(-10px);
    border-color: rgba(230,178,58,0.55);
    box-shadow: 0 22px 50px rgba(0,0,0,0.12);
  }

  .value-icon-wrap {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(230,178,58,0.16), rgba(230,178,58,0.04));
    border: 1px solid rgba(230,178,58,0.35);
    color: var(--gold-deep);
    font-size: 1.7rem;
    margin-bottom: 18px;
    transition: transform .35s ease, background .35s ease;
    animation: iconFloat 3.5s ease-in-out infinite;
  }

  .value-card:nth-child(2) .value-icon-wrap { animation-delay: .3s; }
  .value-card:nth-child(3) .value-icon-wrap { animation-delay: .6s; }
  .value-card:nth-child(4) .value-icon-wrap { animation-delay: .9s; }
  .value-card:nth-child(5) .value-icon-wrap { animation-delay: 1.2s; }
  .value-card:nth-child(6) .value-icon-wrap { animation-delay: 1.5s; }

  .value-card:hover .value-icon-wrap {
    transform: scale(1.1) rotate(-6deg);
    background: linear-gradient(135deg, rgba(230,178,58,0.3), rgba(230,178,58,0.1));
  }

  .value-card h3 {
    font-size: 1.15rem;
    font-weight: 800;
    margin: 0 0 8px;
    color: #111;
  }

  .value-card p {
    color: #555;
    font-size: 0.92rem;
    line-height: 1.65;
    margin: 0;
  }

  /* ---------- WHY CHOOSE ---------- */
  .why-choose-section {
    max-width: 1300px;
    margin: 0 auto;
    padding: 70px 24px;
  }

  .why-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 22px;
  }

  .why-card {
    background: #fff;
    padding: 32px 22px;
    border-radius: 16px;
    border: 1px solid rgba(0,0,0,0.07);
    box-shadow: 0 4px 14px rgba(0,0,0,0.04);
    text-align: center;
    transition: transform .4s ease, box-shadow .4s ease, border-color .3s ease;
  }

  .why-card:hover {
    transform: translateY(-8px);
    border-color: rgba(230,178,58,0.5);
    box-shadow: 0 16px 40px rgba(0,0,0,.1);
  }

  .why-icon-wrap {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(230,178,58,0.16), rgba(230,178,58,0.05));
    border: 1px solid rgba(230,178,58,0.35);
    color: var(--gold-deep);
    font-size: 1.5rem;
    margin-bottom: 16px;
    animation: iconFloat 3s ease-in-out infinite;
  }

  .why-card:nth-child(2) .why-icon-wrap { animation-delay: .3s; }
  .why-card:nth-child(3) .why-icon-wrap { animation-delay: .6s; }
  .why-card:nth-child(4) .why-icon-wrap { animation-delay: .9s; }

  .why-card:hover .why-icon-wrap {
    transform: scale(1.1) rotate(-6deg);
    background: linear-gradient(135deg, rgba(230,178,58,0.3), rgba(230,178,58,0.1));
  }

  .why-card h3 {
    font-size: 1.08rem;
    font-weight: 800;
    margin: 0 0 8px;
    color: #111;
  }

  .why-card p {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0;
  }

  /* service areas */
  .service-areas {
    text-align: center;
    margin-top: 50px;
    padding: 30px 20px;
    background: #fff;
    border-radius: 18px;
    border: 1px solid rgba(230,178,58,0.3);
    box-shadow: 0 8px 24px rgba(0,0,0,0.04);
  }

  .service-areas h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #0a0a0a;
    font-size: 1.2rem;
    font-weight: 800;
    margin: 0 0 20px;
  }

  .pin-icon { color: var(--gold-deep); animation: iconFloat 2.5s ease-in-out infinite; }

  .area-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }

  .area-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(230,178,58,0.08);
    border: 1px solid rgba(230,178,58,0.35);
    padding: 8px 16px;
    border-radius: 999px;
    font-size: 0.9rem;
    color: #0a0a0a;
    font-weight: 600;
    transition: background .25s ease, border-color .25s ease, transform .25s ease;
  }

  .area-chip svg { color: var(--gold-deep); }

  .area-chip:hover {
    background: linear-gradient(135deg, var(--gold-2), var(--gold));
    border-color: var(--gold);
    transform: translateY(-2px);
  }

  /* ---------- TEAM ---------- */
  .team-section {
    max-width: 1300px;
    margin: 0 auto;
    padding: 70px 24px;
    background: linear-gradient(180deg, #fdf9ee 0%, #ffffff 100%);
    border-top: 1px solid rgba(230,178,58,0.2);
    border-bottom: 1px solid rgba(230,178,58,0.2);
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .team-card {
    background: #fff;
    padding: 34px 24px;
    border-radius: 18px;
    border: 1px solid rgba(0,0,0,0.07);
    box-shadow: 0 6px 18px rgba(0,0,0,0.04);
    text-align: center;
    transition: transform .4s ease, box-shadow .4s ease, border-color .3s ease;
  }

  .team-card:hover {
    transform: translateY(-8px);
    border-color: rgba(230,178,58,0.5);
    box-shadow: 0 20px 44px rgba(0,0,0,.1);
  }

  .team-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(230,178,58,0.2), rgba(230,178,58,0.05));
    border: 2px solid rgba(230,178,58,0.4);
    color: var(--gold-deep);
    font-size: 2.6rem;
    margin-bottom: 18px;
    transition: transform .35s ease;
  }

  .team-card:hover .team-avatar {
    transform: scale(1.06) rotate(-4deg);
  }

  .team-card h3 {
    font-size: 1.2rem;
    font-weight: 800;
    margin: 0 0 6px;
    color: #111;
  }

  .team-role {
    color: var(--gold-deep);
    font-weight: 700;
    font-size: 0.88rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin: 0 0 12px;
  }

  .team-desc {
    color: #666;
    font-size: 0.92rem;
    line-height: 1.65;
    margin: 0;
  }

  /* ---------- FAQ ---------- */
  .faq-section {
    max-width: 1300px;
    margin: 0 auto;
    padding: 70px 24px;
  }

  .faq-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
    margin-top: 20px;
  }

  .faq-card {
    background: #fff;
    border: 1px solid rgba(0,0,0,0.09);
    border-radius: 16px;
    padding: 20px 22px;
    transition: border-color .3s ease, box-shadow .3s ease;
  }

  .faq-card:hover, .faq-card.open {
    border-color: rgba(230,178,58,0.55);
    box-shadow: 0 10px 28px rgba(0,0,0,0.06);
  }

  .faq-question {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    cursor: pointer;
    user-select: none;
  }

  .faq-icon {
    color: var(--gold-deep);
    font-size: 1.25rem;
    flex-shrink: 0;
    margin-top: 2px;
    animation: iconFloat 3s ease-in-out infinite;
  }

  .faq-question h3 {
    flex: 1;
    margin: 0;
    font-size: 1rem;
    font-weight: 700;
    color: #111;
    line-height: 1.5;
    word-break: break-word;
  }

  .faq-number {
    color: var(--gold-deep);
    font-weight: 800;
    margin-right: 4px;
  }

  .faq-toggle {
    background: linear-gradient(135deg, var(--gold-2), var(--gold));
    border: none;
    color: #000;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(230,178,58,.35);
    transition: transform .25s ease, box-shadow .25s ease;
  }

  .faq-toggle:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(230,178,58,.5);
  }

  .faq-answer {
    margin-top: 14px;
    padding-top: 14px;
    border-top: 1px dashed rgba(230,178,58,0.4);
    animation: answerFadeIn .35s ease;
  }

  @keyframes answerFadeIn {
    from { opacity: 0; transform: translateY(-6px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .faq-answer p {
    margin: 0;
    color: #444;
    line-height: 1.7;
    font-size: 0.94rem;
  }

  /* ---------- CTA ---------- */
  .cta-section {
    background: #0a0a0a;
    color: #fff;
    padding: 70px 24px;
    position: relative;
    overflow: hidden;
  }

  .cta-section::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 30% 50%, rgba(230,178,58,0.18), transparent 55%);
    animation: ctaPulse 6s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes ctaPulse {
    0%, 100% { opacity: 0.6; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.06); }
  }

  .cta-content {
    position: relative;
    z-index: 2;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  .cta-content h2 {
    font-family: Georgia, serif;
    font-size: clamp(1.8rem, 4vw, 2.6rem);
    margin: 0 0 12px;
    color: #fff;
  }

  .cta-gold {
    background: linear-gradient(135deg, #fff 0%, #f5d76e 70%, #e6b23a 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  .cta-content p {
    color: #c8c8c8;
    font-size: 1.05rem;
    margin: 0 0 30px;
    line-height: 1.7;
  }

  .cta-buttons {
    display: flex;
    gap: 14px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cta-primary, .cta-secondary, .cta-whatsapp {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 14px 26px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 0.98rem;
    text-decoration: none;
    transition: transform .3s ease, box-shadow .3s ease, filter .3s ease;
    min-height: 48px;
    position: relative;
    overflow: hidden;
  }

  .btn-chev { font-size: .75rem; transition: transform .25s ease; }
  .cta-primary:hover .btn-chev { transform: translateX(3px); }

  .cta-primary {
    background: linear-gradient(135deg, var(--gold-2), var(--gold));
    color: #000;
    box-shadow: 0 10px 28px rgba(230,178,58,.4);
  }
  .cta-primary::before {
    content: "";
    position: absolute; top: 0; left: -80%;
    width: 50%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent);
    transform: skewX(-20deg);
    animation: btnShine 4.5s ease-in-out infinite;
  }
  @keyframes btnShine {
    0%, 60% { left: -80%; }
    85%, 100% { left: 130%; }
  }
  .cta-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 40px rgba(230,178,58,.55);
    filter: brightness(1.06);
  }

  .cta-secondary {
    background: transparent;
    color: #fff;
    border: 2px solid rgba(255,255,255,0.4);
  }
  .cta-secondary:hover {
    border-color: var(--gold);
    color: var(--gold);
    transform: translateY(-3px);
  }

  .cta-whatsapp {
    background: linear-gradient(135deg, var(--whatsapp), var(--whatsapp-dark));
    color: #fff;
    box-shadow: 0 10px 28px rgba(37,211,102,.4);
  }
  .cta-whatsapp:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 40px rgba(37,211,102,.6);
    filter: brightness(1.06);
  }

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
    opacity: 1;
    transform: translate(0, 0);
  }

  /* ---------- RESPONSIVE ---------- */
  @media (max-width: 1024px) {
    .values-grid { grid-template-columns: repeat(2, 1fr); }
    .why-grid { grid-template-columns: repeat(2, 1fr); }
    .team-grid { grid-template-columns: repeat(2, 1fr); }
    .faq-grid { grid-template-columns: 1fr; }
    .story-mission { grid-template-columns: 1fr; }
  }

  @media (max-width: 768px) {
    .about-hero { padding: 70px 18px 50px; min-height: auto; }
    .hero-title { font-size: clamp(2rem, 8vw, 2.6rem); }
    .hero-subtitle { font-size: 0.98rem; }
    .hero-stats { gap: 14px; }
    .stat-item { min-width: 150px; padding: 16px 22px; }
    .stat-number { font-size: 1.5rem; }
    .stat-label { font-size: 0.8rem; }

    .story-section, .values-section, .why-choose-section, .team-section, .faq-section {
      padding: 50px 16px;
    }

    .values-grid,
    .why-grid,
    .team-grid,
    .faq-grid {
      grid-template-columns: 1fr;
    }

    .cta-section { padding: 50px 16px; }
    .cta-buttons { flex-direction: column; }
    .cta-primary, .cta-secondary, .cta-whatsapp { width: 100%; }

    .area-chip { font-size: 0.82rem; padding: 6px 12px; }
  }

  @media (max-width: 420px) {
    .hero-title { font-size: 1.9rem; }
    .hero-stats { flex-direction: column; align-items: center; }
    .stat-item { width: 100%; max-width: 260px; }
    .stat-icon-wrap { width: 46px; height: 46px; font-size: 1.2rem; }
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
    }
  }
`;

export default About;