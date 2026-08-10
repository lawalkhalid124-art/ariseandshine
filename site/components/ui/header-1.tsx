import React, { useState, useEffect } from 'react';

export default function Header1({ siteTitle = 'Arise & Shine FA' }: { siteTitle?: string }){
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return ()=> window.removeEventListener('scroll', onScroll);
  },[]);

  // Close menu on route change or Escape
  useEffect(()=>{
    function onKey(e: KeyboardEvent){ if(e.key === 'Escape') setMenuOpen(false); }
    window.addEventListener('keydown', onKey);
    return ()=> window.removeEventListener('keydown', onKey);
  },[]);

  const links = [
    {href: '/', label: 'Home'},
    {href: '/about', label: 'About'},
    {href: '/programs', label: 'Programs'},
    {href: '/teams', label: 'Teams'},
    {href: '/coaching', label: 'Coaching Staff'},
    {href: '/players', label: 'Players'},
    {href: '/achievements', label: 'Achievements'},
    {href: '/news', label: 'News'},
    {href: '/gallery', label: 'Gallery'},
    {href: '/membership', label: 'Membership'},
    {href: '/contact', label: 'Contact'},
  ];

  return (
    <header className={`site-header header-1 ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <div className="brand">
          <div className="crest" aria-hidden>ASFA</div>
          <div className="brand-text">
            <div className="site-title">{siteTitle}</div>
            <div className="motto">IN GOD WE TRUST</div>
          </div>
        </div>

        <nav className="desktop-nav" aria-label="Primary Navigation">
          {links.map(l=> (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="btn cta-gold" href="/get-involved#enroll">Enroll Now</a>
          <button className="hamburger" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="hamburger-icon">☰</span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} role="dialog" aria-hidden={!menuOpen}>
        <div className="mobile-menu-inner">
          <button className="mobile-close" aria-label="Close menu" onClick={()=>setMenuOpen(false)}>✕</button>
          <nav className="mobile-nav">
            {links.map(l=> (
              <a key={l.href} href={l.href} className="mobile-nav-link" onClick={()=>setMenuOpen(false)}>{l.label}</a>
            ))}
            <a className="btn cta-gold fullwidth" href="/get-involved#enroll">Enroll Now</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
