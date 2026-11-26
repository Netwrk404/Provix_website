import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Menu, MessageCircle, X } from 'lucide-react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { siteConfig } from './config'
import './App.css'

const images = {
  badminton: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1800&q=85',
  cricket: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1800&q=85',
  sport: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1800&q=85',
  team: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1800&q=85',
  court: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1800&q=85',
}

function PageEffects() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

function Header() {
  const [open, setOpen] = useState(false)
  const nav = [
    ['/', 'Home'],
    ['/about', 'About'],
    ['/academy', 'Academy'],
    ['/retail', 'ONE+ SPORTS'],
    ['/contact', 'Contact'],
  ] as const

  return (
    <header className="header">
      <Link className="brand" to="/" aria-label="PROVIX home">
        <img src="/assets/provix-logo.jpg" alt="PROVIX" />
      </Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
        {nav.map(([path, label]) => (
          <NavLink key={path} to={path} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>
        ))}
        <Link className="nav-cta" to="/academy" onClick={() => setOpen(false)}>Join Our Academy</Link>
      </nav>
    </header>
  )
}

function Footer() {
  const year = 2026
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <img className="footer-logo" src="/assets/provix-logo.jpg" alt="PROVIX" />
          <p>Professional sports coaching and sports retail solutions across the UAE and GCC.</p>
        </div>
        <div><h4>Explore</h4><Link to="/about">About PROVIX</Link><Link to="/academy">Badminton Academy</Link><Link to="/retail">ONE+ SPORTS</Link></div>
        <div><h4>Connect</h4><Link to="/contact">Contact Us</Link>{siteConfig.email && <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>}<a href={siteConfig.socialUrl || '#'}>Instagram</a></div>
      </div>
      <div className="footer-bottom"><span>© {year} PROVIX. All rights reserved.</span><span>UAE · GCC</span></div>
    </footer>
  )
}

function WhatsAppButton({ message, label = 'WhatsApp Us', className = '' }: { message: string; label?: string; className?: string }) {
  const href = siteConfig.whatsapp
    ? `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
    : `https://wa.me/?text=${encodeURIComponent(message)}`
  return <a className={`button button-whatsapp ${className}`} href={href} target="_blank" rel="noreferrer"><MessageCircle size={18} />{label}</a>
}

function Home() {
  return (
    <>
      <section className="hero home-hero">
        <div className="hero-content">
          <p className="eyebrow">PROVIX · UNITED ARAB EMIRATES</p>
          <h1>Driven by Sport.<br /><em>Built for Excellence.</em></h1>
          <p className="hero-copy">Professional sports coaching, athlete development and sports retail solutions creating opportunities across the UAE and GCC.</p>
          <div className="button-row"><Link className="button button-primary" to="/academy">Explore Our Academy <ArrowRight size={18} /></Link><Link className="button button-light" to="/retail">Discover ONE+ SPORTS</Link></div>
        </div>
      </section>
      <section className="section intro">
        <div className="section-heading"><p className="eyebrow">THE PROVIX GROUP</p><h2>Sport, developed and delivered with purpose.</h2></div>
        <div className="feature-grid">
          <Link className="feature-card" to="/academy"><img src={images.badminton} alt="Badminton coaching session" /><div><p>PROVIX ACADEMY</p><h3>Develop your game.</h3><span>Explore coaching <ArrowRight size={16} /></span></div></Link>
          <Link className="feature-card retail-card" to="/retail"><img src={images.cricket} alt="Cricket equipment and play" /><div><p>ONE+ SPORTS</p><h3>Find your advantage.</h3><span>Explore retail <ArrowRight size={16} /></span></div></Link>
        </div>
      </section>
      <section className="section expertise">
        <p className="eyebrow">OUR EXPERTISE</p>
        <div className="expertise-grid">
          {['Professional Badminton Coaching', 'Kids Sports Development', 'Adult Coaching', 'Individual Training', 'Sports Equipment', 'UAE & GCC Retail'].map((item, i) => <article key={item}><span>0{i + 1}</span><h3>{item}</h3></article>)}
        </div>
      </section>
      <section className="section partner">
        <div className="partner-logo"><img src="/assets/one-sports-logo.jpg" alt="ONE+ SPORTS" /></div>
        <div><p className="eyebrow">PROVIX RETAIL PARTNER</p><h2>Everything sport.<br />All in one place.</h2><p>Explore a wide range of sports equipment and accessories through ONE+ SPORTS.</p><Link className="text-link" to="/retail">Explore ONE+ SPORTS <ArrowRight size={18} /></Link></div>
      </section>
      <section className="final-cta"><p className="eyebrow">START YOUR JOURNEY</p><h2>Ready to elevate your game?</h2><div className="button-row"><Link className="button button-primary" to="/academy">Join Our Academy</Link><Link className="button button-outline" to="/contact">Contact Our Team</Link></div></section>
    </>
  )
}

function About() {
  return (
    <>
      <PageBanner eyebrow="WHO WE ARE" title="Building sport with purpose." copy="PROVIX is a UAE-based sports company bringing together coaching and sports retail." image={images.team} />
      <section className="section two-col"><div><p className="eyebrow">COMPANY OVERVIEW</p><h2>A connected sports organisation.</h2></div><div><p>PROVIX operates at the intersection of athlete development and sports retail. Through its badminton academy and partnership with ONE+ SPORTS, the company serves athletes, families and sports enthusiasts across the UAE and GCC.</p></div></section>
      <section className="values"><article><span>01</span><h3>Our Vision</h3><p>To create meaningful opportunities for people to participate, improve and excel through sport.</p></article><article><span>02</span><h3>Our Mission</h3><p>To deliver professional coaching and accessible sports solutions with commitment and integrity.</p></article><article><span>03</span><h3>Our Values</h3><p>Excellence, development, service and a lasting respect for sport.</p></article></section>
      <section className="section partnership"><img src="/assets/one-sports-logo.jpg" alt="ONE+ SPORTS" /><div><p className="eyebrow">PROVIX × ONE+ SPORTS</p><h2>Coaching and equipment, working together.</h2><p>Our partnership connects performance development with quality sporting equipment.</p><Link className="text-link" to="/retail">Discover the partnership <ArrowRight size={18} /></Link></div></section>
    </>
  )
}

function PageBanner({ eyebrow, title, copy, image }: { eyebrow: string; title: string; copy: string; image: string }) {
  return <section className="page-banner" style={{ backgroundImage: `linear-gradient(90deg, rgba(5,21,49,.94), rgba(5,21,49,.35)), url(${image})` }}><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{copy}</p></div></section>
}

function Academy() {
  const [faq, setFaq] = useState<number | null>(0)
  const faqs = [
    ['What age groups can join?', 'Programme suitability varies by level and individual needs. Contact us to discuss the appropriate option.'],
    ['Do you offer beginner coaching?', 'Yes. Beginner and foundation coaching is available across suitable programmes.'],
    ['Are adult sessions available?', 'Yes. Adult coaching options include beginner-friendly and skill-development sessions.'],
    ['Can I book individual coaching?', 'Yes. One-on-one personal coaching enquiries can be made directly through the contact options.'],
    ['How can I enquire about schedules?', 'Use the WhatsApp or contact form to request current programme and schedule information.'],
  ]
  return (
    <>
      <PageBanner eyebrow="PROVIX BADMINTON ACADEMY" title="Develop Your Game. Elevate Your Performance." copy="Professional badminton coaching designed to build skills, confidence and performance." image={images.badminton} />
      <section className="section academy-intro"><div><p className="eyebrow">COACHING PROGRAMMES</p><h2>Training with direction.</h2></div><div><p>Structured coaching for players at every stage, from first steps on court to advanced performance development.</p><WhatsAppButton message="Hello PROVIX, I am interested in your badminton academy. Could you please share more information?" label="Enquire About Coaching" /></div></section>
      <section className="programmes">
        {siteConfig.academyPrograms.map((program, i) => (
          <article className={i === 4 ? 'personal' : ''} key={program.name}>
            <span>0{i + 1}</span><h3>{program.name}</h3><p>{program.text}</p>
            <WhatsAppButton message={`Hello PROVIX, I am interested in your ${program.name} programme. Could you please share more information?`} label={`Enquire — ${program.name}`} />
          </article>
        ))}
      </section>
      <section className="section faq"><div><p className="eyebrow">ACADEMY FAQ</p><h2>Questions, answered.</h2></div><div className="faq-list">{faqs.map(([q, a], i) => <article key={q}><button onClick={() => setFaq(faq === i ? null : i)} aria-expanded={faq === i}><span>{q}</span><b>{faq === i ? '−' : '+'}</b></button>{faq === i && <p>{a}</p>}</article>)}</div></section>
    </>
  )
}

function Retail() {
  const [slide, setSlide] = useState(0)
  const slides = [
    [images.cricket, 'Everything Cricket', 'Equipment for players and teams'],
    [images.sport, 'Build Your Advantage', 'Premium sports essentials'],
    [images.badminton, 'Play Your Best', 'Badminton equipment and accessories'],
  ]
  useEffect(() => {
    const timer = window.setInterval(() => setSlide(s => (s + 1) % slides.length), 5000)
    return () => window.clearInterval(timer)
  }, [slides.length])

  const categories = ['Cricket Bats', 'Batting Pads', 'Batting Gloves', 'Cricket Helmets', 'Cricket Shoes', 'Cricket Bags', 'Cricket Balls', 'Wicket-Keeper Gear', 'Protective Gear', 'Training Accessories', 'Cricket Essentials']
  return (
    <>
      <PageBanner eyebrow="ONE+ SPORTS" title="Your Game. Your Gear. Your Advantage." copy="Quality sports equipment and accessories, serving athletes across the UAE and GCC." image={images.cricket} />
      <section className="carousel" aria-label="Promotional offers">
        {slides.map(([image, title, copy], i) => <article key={title} className={slide === i ? 'slide active' : 'slide'} style={{ backgroundImage: `linear-gradient(90deg, rgba(6,20,43,.85), rgba(6,20,43,.05)), url(${image})` }}><div><p>FEATURED COLLECTION</p><h2>{title}</h2><span>{copy}</span><WhatsAppButton message={`Hello ONE+ SPORTS, I would like to enquire about ${title}.`} label="Enquire Now" /></div></article>)}
        <button className="carousel-arrow prev" onClick={() => setSlide((slide - 1 + slides.length) % slides.length)} aria-label="Previous slide"><ChevronLeft /></button>
        <button className="carousel-arrow next" onClick={() => setSlide((slide + 1) % slides.length)} aria-label="Next slide"><ChevronRight /></button>
        <div className="dots">{slides.map((_, i) => <button key={i} onClick={() => setSlide(i)} className={slide === i ? 'active' : ''} aria-label={`Go to slide ${i + 1}`} />)}</div>
      </section>
      <section className="section cricket"><p className="eyebrow">CRICKET · THE ONE+ ADVANTAGE</p><h2>Everything Cricket.<br />All Under One Roof.</h2><div className="category-grid">{categories.map((category, i) => <article key={category}><span>{String(i + 1).padStart(2, '0')}</span><h3>{category}</h3><ArrowRight size={18} /></article>)}</div></section>
      <section className="brand-section"><p className="eyebrow">BRANDS THAT POWER YOUR GAME</p><h2>Leading sports names.</h2><p>Brand selection available through ONE+ SPORTS. Specific availability can be confirmed with our team.</p><div className="brand-placeholder"><span>CRICKET</span><span>BADMINTON</span><span>PADEL</span><span>TENNIS</span><span>SQUASH</span></div></section>
      <section className="section other-sports"><p className="eyebrow">EXPLORE MORE</p><h2>More sports. More possibility.</h2><div className="sport-grid">{['Badminton', 'Padel', 'Tennis', 'Squash'].map((sport, i) => <article key={sport}><img src={[images.badminton, images.court, images.team, images.sport][i]} alt={`${sport} equipment`} /><div><h3>{sport}</h3><WhatsAppButton message={`Hello ONE+ SPORTS, I am interested in ${sport} equipment.`} label="Enquire" /></div></article>)}</div></section>
      <section className="shipping"><div><p className="eyebrow">UAE & GCC SHIPPING</p><h2>Serving sports enthusiasts across the region.</h2></div><div><p>Contact our team for UAE service, GCC shipping enquiries, product recommendations and bulk orders.</p><WhatsAppButton message="Hello ONE+ SPORTS, I would like to enquire about product availability and shipping." /></div></section>
      <section className="section store"><div><p className="eyebrow">VISIT OUR STORE</p><h2>ONE+ SPORTS<br />Ras Al Khaimah</h2><p>{siteConfig.storeAddress}</p><div className="button-row"><a className="button button-primary" href="https://maps.google.com/?q=Ras+Al+Khaimah+United+Arab+Emirates" target="_blank" rel="noreferrer">Get Directions</a><WhatsAppButton message="Hello ONE+ SPORTS, I would like to visit your store." /></div></div><div className="map-placeholder"><span>MAP</span><p>Ras Al Khaimah, UAE</p></div></section>
    </>
  )
}

function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const next: Record<string, string> = {}
    ;(['name', 'email', 'phone', 'subject', 'message'] as const).forEach(key => {
      if (!String(data.get(key) || '').trim()) next[key] = 'This field is required.'
    })
    if (String(data.get('email') || '') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.get('email')))) next.email = 'Enter a valid email address.'
    setErrors(next)
    if (Object.keys(next).length) return
    setStatus('loading')
    window.setTimeout(() => setStatus('success'), 700)
  }
  return (
    <>
      <PageBanner eyebrow="CONTACT PROVIX" title="Let’s talk sports." copy="Choose the right enquiry path and our team will help you get started." image={images.sport} />
      <section className="section contact-layout">
        <aside><p className="eyebrow">CONTACT OPTIONS</p><h2>How can we help?</h2><div className="contact-options"><article><span>01</span><h3>General Enquiries</h3><p>Company, partnerships and general questions.</p></article><article><span>02</span><h3>Academy Enquiries</h3><p>Coaching programmes and training information.</p></article><article><span>03</span><h3>Retail Enquiries</h3><p>Products, equipment recommendations and shipping.</p></article></div></aside>
        <form className="contact-form" onSubmit={submit} noValidate>
          {status === 'success' ? <div className="form-success"><h2>Thank you.</h2><p>Your enquiry has been recorded. This demo form requires a backend email service for live submission.</p><button type="button" className="button button-primary" onClick={() => setStatus('idle')}>Send another enquiry</button></div> : <>
            <div className="form-grid">
              <label>Full Name<input name="name" placeholder="Your name" />{errors.name && <small>{errors.name}</small>}</label>
              <label>Email Address<input name="email" type="email" placeholder="you@example.com" />{errors.email && <small>{errors.email}</small>}</label>
              <label>Phone Number<input name="phone" type="tel" placeholder="+971" />{errors.phone && <small>{errors.phone}</small>}</label>
              <label>Enquiry Type<select name="type" defaultValue="General"><option>General</option><option>Academy</option><option>Retail</option><option>Partnership</option></select></label>
              <label className="full">Subject<input name="subject" placeholder="How can we help?" />{errors.subject && <small>{errors.subject}</small>}</label>
              <label className="full">Message<textarea name="message" rows={6} placeholder="Tell us about your enquiry" />{errors.message && <small>{errors.message}</small>}</label>
            </div>
            <button className="button button-primary" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : 'Send Enquiry'}<ArrowRight size={18} /></button>
          </>}
        </form>
      </section>
    </>
  )
}

function NotFound() {
  return <section className="not-found"><p className="eyebrow">404</p><h1>Page not found.</h1><Link className="button button-primary" to="/">Return Home</Link></section>
}

export default function App() {
  return (
    <>
      <PageEffects /><Header />
      <main><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/academy" element={<Academy />} /><Route path="/retail" element={<Retail />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Routes></main>
      <Footer />
    </>
  )
}
