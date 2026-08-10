// @ts-ignore
import React from 'react';

interface HeroProps {
  imageSrc?: string;
  imageAlt?: string;
}

export default function Hero({ imageSrc, imageAlt = '[PLACEHOLDER: training/match photo]' }: HeroProps){
  return (
    <section className="hero hero-fullbleed reveal-section" aria-label="Hero — Arise & Shine Football Academy">
      <div className="hero-media" aria-hidden="true">
        {imageSrc ? (
          <img src={imageSrc} alt={imageAlt} />
        ) : (
          <div className="placeholder">[PLACEHOLDER: training/match photo or video — replace with real image]</div>
        )}
      </div>

      <div className="hero-overlay">
        <div className="hero-inner">
          <div style={{display:'flex',alignItems:'center',gap:'1rem',flexWrap:'wrap'}}>
            <div className="champions-badge" aria-hidden>2026 IKORODU DIVISIONAL LEAGUE CHAMPIONS 🏆</div>
            <div style={{flex:1}}></div>
          </div>

          <h1 className="hero-headline font-hero">ARISE &amp; SHINE FOOTBALL ACADEMY</h1>
          <p className="hero-sub"><strong>IN GOD WE TRUST</strong> — Raising champions on and off the pitch since 2012.</p>

          <div style={{display:'flex',gap:'0.75rem',flexWrap:'wrap',marginTop:'1rem'}}>
            <a className="btn primary" href="/membership">Enroll Your Child</a>
            <a className="btn outline" href="/about">Our Story</a>
          </div>
        </div>
      </div>
    </section>
  );
}
