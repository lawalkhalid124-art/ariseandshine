// Global JS: mobile nav, form handlers, and scroll-reveal initialization
document.addEventListener('DOMContentLoaded', function(){
  // Mobile menu (hamburger)
  var hamburger = document.querySelector('.hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');
  var mobileClose = document.querySelector('.mobile-close');
  if(hamburger && mobileMenu){
    hamburger.addEventListener('click', function(){
      var open = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(open));
      mobileMenu.setAttribute('aria-hidden', String(!open));
    });
  }
  if(mobileClose && mobileMenu){
    mobileClose.addEventListener('click', function(){
      mobileMenu.classList.remove('open');
      if(hamburger) hamburger.setAttribute('aria-expanded','false');
      mobileMenu.setAttribute('aria-hidden','true');
    });
  }

  // Legacy nav-toggle (for pages that still use #nav-toggle)
  var navToggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');
  if(navToggle && nav){
    navToggle.addEventListener('click', function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      nav.style.display = expanded ? 'none' : 'flex';
    });
  }

  // Simple form handlers
  var enroll = document.getElementById('enroll-form');
  if(enroll){
    enroll.addEventListener('submit', function(e){ e.preventDefault(); alert('Thank you — enrollment inquiry sent. We will contact you. [FORM HANDLER: Replace with server endpoint or mailto action]'); enroll.reset(); });
  }
  var contact = document.getElementById('contact-form');
  if(contact){
    contact.addEventListener('submit', function(e){ e.preventDefault(); alert('Message sent — thank you. [FORM HANDLER: Replace with server endpoint or mailto action]'); contact.reset(); });
  }

  // Close mobile menu on Escape
  window.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ if(mobileMenu && mobileMenu.classList.contains('open')){ mobileMenu.classList.remove('open'); if(hamburger) hamburger.setAttribute('aria-expanded','false'); mobileMenu.setAttribute('aria-hidden','true'); } } });

  // Scroll-reveal
  try {
    var revealTargets = document.querySelectorAll('main section, .gallery-grid .photo, .card, .hero-fullbleed');
    if(revealTargets.length){
      revealTargets.forEach(function(el){ el.classList.add('reveal-section'); });
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            entry.target.classList.add('reveal');
            io.unobserve(entry.target);
          }
        });
      }, { root:null, rootMargin:'0px 0px -10% 0px', threshold:0.08 });
      revealTargets.forEach(function(el){ io.observe(el); });
    }
  } catch(e){ console.warn('Scroll reveal init failed', e); }
});