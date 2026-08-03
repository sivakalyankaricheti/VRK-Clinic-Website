import { useState } from 'react';
import doctorPhoto from '../assets/doctor-rekha.jpg';

const clinicAddress = 'MIG-132/1, Kukatpally Housing Board Colony, K P H B Phase 1, Kukatpally, Hyderabad, Telangana 500072, India';
const clinicMapsUrl = 'https://maps.app.goo.gl/s1iutaKkv17y7JdBA';
const services = [
  ['Burn Care', 'Acute and chronic burn care, post-burn wound management, and resurfacing.'],
  ['Trauma & Reconstruction', 'Thoughtful reconstructive care for trauma and complex surgical needs.'],
  ['Scar Management', 'PRP and fat grafting approaches for scar-management needs.'],
  ['Plastic & General Surgery', 'Consultant surgical care informed by teaching, research, and experience.']
];
const qualifications = [
  ['2023', 'Assistant Professor & Consultant Plastic Surgeon', 'Osmania Medical College, Hyderabad - clinical services, teaching, and research.'],
  ['2022-23', 'Senior Resident - Plastic Surgery', 'ESI Medical College, Sanathnagar, Hyderabad.'],
  ['2022', 'MCh - Plastic Surgery', 'Osmania Medical College, Hyderabad'],
  ['2019', 'MS - General Surgery', 'Dr B.R. Ambedkar Medical College, Bangalore'],
  ['2014', 'MBBS', 'NRI Medical College, Chinnakakani']
];
const research = [
  'Post-burn contractures of hand - clinical study (2024)',
  'Vascular anomalies and their management in a tertiary care centre in Telangana (2024)',
  'Early tangential excision in mixed flame burns - prospective clinical study (2025)',
  'Collagen granule dressing versus conventional dressing in diabetic foot ulcers (2020)'
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
    event.preventDefault(); setSending(true); setStatus('');
    try {
      const response = await fetch('https://formsubmit.co/ajax/sysairekha@gmail.com', { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(event.currentTarget) });
      if (!response.ok) throw new Error();
      event.currentTarget.reset(); setStatus('Thank you - your request was sent to Dr. Sree Sai Rekha.');
    } catch { setStatus('We could not send your request. Please call +91 97012 18130.'); }
    finally { setSending(false); }
  }
  return <>
    <div className="ticker" aria-label="Clinic information"><div className="ticker-track"><span>Mon-Sun: 9:00 AM - 7:00 PM</span><a href="tel:+919701218130">+91 97012 18130</a><span>KPHB, Road Number 1, Hyderabad</span><span aria-hidden="true">Mon-Sun: 9:00 AM - 7:00 PM</span><a aria-hidden="true" tabIndex="-1" href="tel:+919701218130">+91 97012 18130</a><span aria-hidden="true">KPHB, Road Number 1, Hyderabad</span></div></div>
    <header className="site-header sticky-top"><div className="container d-flex align-items-center justify-content-between py-3"><Brand /><button className="navbar-toggler d-lg-none" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>☰</button><nav className={`site-nav d-lg-flex ${menuOpen ? 'open' : ''}`}>{['About', 'Services', 'Qualifications', 'Research'].map(item => <a key={item} onClick={() => setMenuOpen(false)} href={`#${item.toLowerCase()}`}>{item}</a>)}<a className="book-button" onClick={() => setMenuOpen(false)} href="#appointment">Book appointment</a></nav></div></header>
    <main id="home">
      <section className="hero"><div className="container"><div className="row align-items-center g-5"><div className="col-lg-6 hero-copy"><p className="eyebrow">PLASTIC SURGERY · GENERAL SURGERY · COMPASSIONATE CARE</p><h1>Skilled surgical care, <em>centred on you.</em></h1><p className="lead">Consultant Plastic Surgeon and General Surgeon, providing thoughtful care across burns, trauma, reconstruction, and scar management.</p><div className="d-flex flex-wrap gap-3"><a className="btn btn-clinic" href="#appointment">Request an appointment <b>→</b></a><a className="quiet-link" href="#about">Meet Dr. Rekha ↓</a></div><div className="stats row row-cols-3 g-2"><div><strong>11+</strong><span>Years in medicine</span></div><div><strong>4</strong><span>Clinical studies</span></div><div><strong>4</strong><span>Academic awards</span></div></div></div><div className="col-lg-6"><div className="doctor-frame"><img src={doctorPhoto} alt="Dr. Sree Sai Rekha S"/><div className="care-chip">✦ <span><b>Specialist care</b><small>Every step of the way</small></span></div></div></div></div></div></section>
      <section id="about" className="section"><div className="container"><div className="row g-4 align-items-start"><div className="col-md-3"><p className="section-number">01 / ABOUT THE DOCTOR</p></div><div className="col-md-5"><h2>Expertise that restores.<br/><em>Care that listens.</em></h2></div><div className="col-md-4 about-copy"><p><b>Dr. Sree Sai Rekha</b> is a Consultant Plastic Surgeon and General Surgeon with super-specialty training and a strong academic background.</p><p>Her work includes acute and chronic burn care, trauma and reconstruction, pediatric burns, post-burn resurfacing, and scar management with PRP and fat grafting.</p></div></div></div></section>
      <section id="services" className="section soft-section"><div className="container"><div className="d-md-flex justify-content-between align-items-end mb-5"><div><p className="eyebrow">CLINICAL EXPERTISE</p><h2>Specialist care,<br/><em>human connection.</em></h2></div><p className="section-intro">Evidence-led surgical expertise with a patient-first approach.</p></div><div className="row g-3">{services.map(([title, description], index) => <div className="col-sm-6 col-lg-3" key={title}><article className="service-card h-100"><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p><a href="#appointment">Discuss your care →</a></article></div>)}</div></div></section>
      <section id="qualifications" className="section journey"><div className="container"><div className="row g-0 align-items-stretch"><div className="col-lg-5 journey-photo"><img src={doctorPhoto} alt="Dr. Sree Sai Rekha"/></div><div className="col-lg-7 journey-copy"><p className="eyebrow">EDUCATION & EXPERIENCE</p><h2>A career built on<br/><em>precision and learning.</em></h2><div className="timeline">{qualifications.map(([year, title, institution]) => <div key={year}><span>{year}</span><p><b>{title}</b><small>{institution}</small></p></div>)}</div></div></div></div></section>
      <section id="research" className="section"><div className="container"><div className="row g-5"><div className="col-lg-5"><p className="eyebrow">RESEARCH & RECOGNITION</p><h2>Learning that<br/><em>improves care.</em></h2><p className="section-intro mt-4">Active involvement in clinical presentations, seminars, journal clubs, research activities, and multidisciplinary meetings.</p></div><div className="col-lg-7"><div className="research-card"><h3>Clinical studies</h3><ul>{research.map(item => <li key={item}>{item}</li>)}</ul><h3 className="mt-4">Awards</h3><div className="award-row"><span>Gold Medal - Plastic Surgery</span><span>Best Poster</span><span>Best Paper Award</span><span>Silver Medal in Ophthalmology</span></div></div></div></div></div></section>
      <section id="appointment" className="section appointment"><div className="container"><div className="row g-5"><div className="col-lg-5"><p className="eyebrow">TAKE THE FIRST STEP</p><h2>Let’s talk about<br/><em>your health.</em></h2><p className="section-intro mt-4">Send a request and our team will contact you to confirm a convenient appointment time.</p><div className="contact-list"><a href="tel:+919701218130">☎ <b>+91 97012 18130</b></a><a href="mailto:sysairekha@gmail.com">✉ sysairekha@gmail.com</a><p>📍 DJ’s Heights, {clinicAddress}</p><a className="map-card" href={clinicMapsUrl} target="_blank" rel="noreferrer"><iframe title="Rekha Clinic map" src={`https://www.google.com/maps?q=${encodeURIComponent('Rekha Clinic, ' + clinicAddress)}&output=embed`} tabIndex="-1"/><span>View exact Rekha Clinic location ↗</span></a></div></div><div className="col-lg-7"><form className="appointment-form" onSubmit={submitAppointment}><input type="hidden" name="_subject" value="New VRK Clinic appointment request"/><input type="hidden" name="_template" value="table"/><input type="hidden" name="_captcha" value="false"/><div className="row g-3"><div className="col-md-6"><label>Full name<input required name="name" placeholder="Your name"/></label></div><div className="col-md-6"><label>Phone number<input required name="phone" type="tel" placeholder="Your phone number"/></label></div><div className="col-md-6"><label>Email address<input required name="email" type="email" placeholder="you@example.com"/></label></div><div className="col-md-6"><label>Preferred date<input required name="date" type="date" min={new Date().toISOString().slice(0,10)}/></label></div><div className="col-12"><label>How can we help?<textarea name="message" rows="4" placeholder="Tell us briefly about your concern"/></label></div></div><p className="privacy">Your details are sent securely to Dr. Rekha’s email for appointment confirmation.</p><button className="btn btn-clinic" disabled={sending}>{sending ? 'Sending request…' : 'Send appointment request →'}</button><p className="form-status" role="status">{status}</p></form></div></div></div></section>
    </main>
    <footer><div className="container d-md-flex justify-content-between align-items-center gap-4"><Brand footer/><p>© 2026 VRK Clinic. All rights reserved.</p><div className="footer-links"><a href="#about">About</a><a href="#appointment">Contact</a><a href="#appointment">Appointments</a></div></div></footer>
  </>;
}
export default App;
