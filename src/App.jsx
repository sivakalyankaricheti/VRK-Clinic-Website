import { useState } from 'react';
import doctorPhoto from '../assets/doctor-rekha.jpg';

const clinicAddress = "MIG-132/1, Kukatpally Housing Board Colony, K P H B Phase 1, Kukatpally, Hyderabad, Telangana 500072, India";
const clinicMapsUrl = 'https://maps.app.goo.gl/s1iutaKkv17y7JdBA';
const services = [
  ['Preventive Care', 'Health screenings, wellness planning, and proactive guidance.'],
  ['Family Medicine', 'Continuity of care for individuals and families.'],
  ['Chronic Care', 'Practical, compassionate support for ongoing conditions.'],
  ["Women's Health", 'Respectful, informed care tailored to every woman.']
];

function Brand({ footer = false }) {
  return <a className={`brand d-inline-flex align-items-center text-decoration-none ${footer ? 'brand-footer' : ''}`} href="#home" aria-label="VRK Clinic home">
    <span className="brand-mark"><i>V</i><b>R</b><i>K</i></span>
    <span className="brand-name">VRK <em>CLINIC</em><small>CARE WITH CONFIDENCE</small></span>
  </a>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  async function submitAppointment(event) {
    event.preventDefault();
    setSending(true); setStatus('');
    try {
      const response = await fetch('https://formsubmit.co/ajax/venkivemula439@gmail.com', {
        method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(event.currentTarget)
      });
      if (!response.ok) throw new Error();
      event.currentTarget.reset();
      setStatus('Thank you — your request was sent to Dr. Rekha.');
    } catch {
      setStatus('We could not send your request. Please call +91 97012 18130.');
    } finally { setSending(false); }
  }

  return <>
    <div className="ticker" aria-label="Clinic information"><div className="ticker-track"><span>Mon–Sat: 9:00 AM – 7:00 PM</span><a href="tel:+919701218130">+91 97012 18130</a><span>KPHB, Road Number 1, Hyderabad</span><span aria-hidden="true">Mon–Sat: 9:00 AM – 7:00 PM</span><a aria-hidden="true" tabIndex="-1" href="tel:+919701218130">+91 97012 18130</a><span aria-hidden="true">KPHB, Road Number 1, Hyderabad</span></div></div>
    <header className="site-header sticky-top"><div className="container d-flex align-items-center justify-content-between py-3"><Brand /><button className="navbar-toggler d-lg-none" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}><span>☰</span></button><nav className={`site-nav d-lg-flex ${menuOpen ? 'open' : ''}`}>{['About','Services','Journey','Gallery'].map(item => <a key={item} onClick={() => setMenuOpen(false)} href={`#${item.toLowerCase()}`}>{item}</a>)}<a className="book-button" onClick={() => setMenuOpen(false)} href="#appointment">Book appointment</a></nav></div></header>
    <main id="home">
      <section className="hero"><div className="container"><div className="row align-items-center g-5"><div className="col-lg-6 hero-copy"><p className="eyebrow">COMPASSIONATE · EXPERIENCED · TRUSTED</p><h1>Care that sees <em>the whole you.</em></h1><p className="lead">Thoughtful, evidence-led healthcare from a doctor who listens first and treats every patient with dignity.</p><div className="d-flex flex-wrap gap-3"><a className="btn btn-clinic" href="#appointment">Request an appointment <b>→</b></a><a className="quiet-link" href="#about">Meet Dr. Rekha ↓</a></div><div className="stats row row-cols-3 g-2"><div><strong>15+</strong><span>Years of care</span></div><div><strong>10k+</strong><span>Patients supported</span></div><div><strong>98%</strong><span>Patient satisfaction</span></div></div></div><div className="col-lg-6"><div className="doctor-frame"><img src={doctorPhoto} alt="Dr. Rekha"/><div className="care-chip">✦ <span><b>Personal care</b><small>Every step of the way</small></span></div></div></div></div></div></section>
      <section id="about" className="section"><div className="container"><div className="row g-4 align-items-start"><div className="col-md-3"><p className="section-number">01 / ABOUT THE DOCTOR</p></div><div className="col-md-5"><h2>Medicine with expertise.<br/><em>Healing with heart.</em></h2></div><div className="col-md-4 about-copy"><p>Dr. Rekha combines clinical excellence with a deeply personal approach to care. Every patient deserves to be heard.</p><p>At VRK Clinic, she helps individuals and families make informed, confident decisions about their health.</p><a className="quiet-link" href="#journey">Explore her journey →</a></div></div></div></section>
      <section id="services" className="section soft-section"><div className="container"><div className="d-md-flex justify-content-between align-items-end mb-5"><div><p className="eyebrow">HOW I CAN HELP</p><h2>Specialised care,<br/><em>human connection.</em></h2></div><p className="section-intro">Care is tailored to your goals, concerns, and everyday life.</p></div><div className="row g-3">{services.map(([title, description], index) => <div className="col-sm-6 col-lg-3" key={title}><article className="service-card h-100"><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p><a href="#appointment">Learn more →</a></article></div>)}</div></div></section>
      <section id="journey" className="section journey"><div className="container"><div className="row g-0 align-items-stretch"><div className="col-lg-5 journey-photo"><img src={doctorPhoto} alt="Dr. Rekha"/></div><div className="col-lg-7 journey-copy"><p className="eyebrow">A CAREER OF IMPACT</p><h2>Milestones that<br/><em>matter.</em></h2><div className="timeline">{[['2023','Excellence in Patient Care Award'],['2018','Founded VRK Clinic'],['2014','Advanced Clinical Fellowship'],['2009','Medical Degree & Residency']].map(([year, title]) => <div key={year}><span>{year}</span><p><b>{title}</b><small>Dedicated to accessible, compassionate healthcare.</small></p></div>)}</div></div></div></div></section>
      <section id="gallery" className="section"><div className="container"><p className="eyebrow">MOMENTS & MILESTONES</p><h2 className="mb-4">A life in service,<br/><em>in pictures.</em></h2><div className="row g-3 gallery">{['1576091160399-112ba8d25d1d','1579154204601-01588f351e67','1538108149393-fbbd81895907'].map((id, index) => <div className="col-md-4" key={id}><img src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`} alt={`VRK Clinic moment ${index + 1}`}/></div>)}</div></div></section>
      <section id="appointment" className="section appointment"><div className="container"><div className="row g-5"><div className="col-lg-5"><p className="eyebrow">TAKE THE FIRST STEP</p><h2>Let’s talk about<br/><em>your health.</em></h2><p className="section-intro mt-4">Send a request and our team will contact you to confirm a convenient appointment time.</p><div className="contact-list"><a href="tel:+919701218130">☎ <b>+91 97012 18130</b></a><a href="mailto:venkivemula439@gmail.com">✉ venkivemula439@gmail.com</a><p>📍 DJ’s Heights, {clinicAddress}</p><a className="map-card" href={clinicMapsUrl} target="_blank" rel="noreferrer"><iframe title="Rekha Clinic map" src={`https://www.google.com/maps?q=${encodeURIComponent('Rekha Clinic, ' + clinicAddress)}&output=embed`} tabIndex="-1"/><span>View exact Rekha Clinic location ↗</span></a></div></div><div className="col-lg-7"><form className="appointment-form" onSubmit={submitAppointment}><input type="hidden" name="_subject" value="New VRK Clinic appointment request"/><input type="hidden" name="_template" value="table"/><input type="hidden" name="_captcha" value="false"/><div className="row g-3"><div className="col-md-6"><label>Full name<input required name="name" placeholder="Your name"/></label></div><div className="col-md-6"><label>Phone number<input required name="phone" type="tel" placeholder="Your phone number"/></label></div><div className="col-md-6"><label>Email address<input required name="email" type="email" placeholder="you@example.com"/></label></div><div className="col-md-6"><label>Preferred date<input required name="date" type="date" min={new Date().toISOString().slice(0,10)}/></label></div><div className="col-12"><label>How can we help?<textarea name="message" rows="4" placeholder="Tell us briefly about your concern"/></label></div></div><p className="privacy">Your details are sent securely to Dr. Rekha’s email for appointment confirmation.</p><button className="btn btn-clinic" disabled={sending}>{sending ? 'Sending request…' : 'Send appointment request →'}</button><p className="form-status" role="status">{status}</p></form></div></div></div></section>
    </main>
    <footer><div className="container d-md-flex justify-content-between align-items-center gap-4"><Brand footer/><p>© 2026 VRK Clinic. All rights reserved.</p><div className="footer-links"><a href="#about">About</a><a href="#appointment">Contact</a><a href="#appointment">Appointments</a></div></div></footer>
  </>;
}

export default App;
