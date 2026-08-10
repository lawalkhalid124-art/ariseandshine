// Minimal JS: mobile nav toggle, lightweight form handlers, and lazy placeholder handling
document.addEventListener('DOMContentLoaded',function(){
  var navToggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');
  if(navToggle && nav){
    navToggle.addEventListener('click',function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      nav.style.display = expanded ? 'none' : 'flex';
    });
  }

  // Simple form handlers — prevents actual submission and provides quick confirmation.
  var enroll = document.getElementById('enroll-form');
  if(enroll){
    enroll.addEventListener('submit',function(e){
      e.preventDefault();
      alert('Thank you — enrollment inquiry sent. We will contact you. [FORM HANDLER: Replace with server endpoint or mailto action]');
      enroll.reset();
    });
  }
  var contact = document.getElementById('contact-form');
  if(contact){
    contact.addEventListener('submit',function(e){
      e.preventDefault();
      alert('Message sent — thank you. [FORM HANDLER: Replace with server endpoint or mailto action]');
      contact.reset();
    });
  }
});