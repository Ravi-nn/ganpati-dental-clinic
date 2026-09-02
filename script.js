// Ganpati Dental Clinic — script.js

document.addEventListener('DOMContentLoaded', () => {

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Mobile menu ---------------- */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const body = document.body;

  function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    body.classList.remove('menu-open');
  }
  function toggleMenu() {
    const isActive = navMenu.classList.toggle('active');
    hamburger.classList.toggle('active', isActive);
    hamburger.setAttribute('aria-expanded', String(isActive));
    body.classList.toggle('menu-open', isActive);
  }

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', toggleMenu);
    navMenu.querySelectorAll('.nav-link, .btn').forEach(el => el.addEventListener('click', closeMenu));
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !hamburger.contains(e.target)) closeMenu();
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  }

  /* ---------------- Smooth scroll with header offset ---------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const top = target.getBoundingClientRect().top + window.pageYOffset - 84;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

  /* ---------------- Contact form validation + WhatsApp submit ---------------- */
  const form = document.getElementById('appointmentForm');
  const formSuccess = document.getElementById('formSuccess');

  const fields = {
    name: { el: document.getElementById('name'), errorEl: document.getElementById('nameError') },
    email: { el: document.getElementById('email'), errorEl: document.getElementById('emailError') },
    phone: { el: document.getElementById('phone'), errorEl: document.getElementById('phoneError') },
    message: { el: document.getElementById('message'), errorEl: document.getElementById('messageError') }
  };

  function validateField(key) {
    const { el, errorEl } = fields[key];
    const value = el.value.trim();
    let error = '';

    if (!value) {
      error = 'This field is required.';
    } else if (key === 'email') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Please enter a valid email address.';
    } else if (key === 'phone') {
      if (!/^[+]?[\d\s-]{7,15}$/.test(value)) error = 'Please enter a valid phone number.';
    } else if (key === 'name') {
      if (value.length < 2) error = 'Please enter your full name.';
    } else if (key === 'message') {
      if (value.length < 5) error = 'Please add a short message.';
    }

    errorEl.textContent = error;
    el.classList.toggle('invalid', !!error);
    return !error;
  }

  if (form) {
    Object.keys(fields).forEach(key => {
      fields[key].el.addEventListener('blur', () => validateField(key));
      fields[key].el.addEventListener('input', () => {
        if (fields[key].el.classList.contains('invalid')) validateField(key);
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;
      Object.keys(fields).forEach(key => { if (!validateField(key)) isValid = false; });
      if (!isValid) { formSuccess.classList.remove('show'); return; }

      const name = fields.name.el.value.trim();
      const email = fields.email.el.value.trim();
      const phone = fields.phone.el.value.trim();
      const message = fields.message.el.value.trim();

      const whatsappMessage =
        `Hello Ganpati Dental Clinic,%0A%0A` +
        `*Name:* ${encodeURIComponent(name)}%0A` +
        `*Email:* ${encodeURIComponent(email)}%0A` +
        `*Phone:* ${encodeURIComponent(phone)}%0A` +
        `*Message:* ${encodeURIComponent(message)}`;

      window.open(`https://wa.me/919992652681?text=${whatsappMessage}`, '_blank', 'noopener');

      formSuccess.textContent = 'Thanks — opening WhatsApp to send your message.';
      formSuccess.classList.add('show');
      form.reset();
      Object.values(fields).forEach(f => f.el.classList.remove('invalid'));
    });
  }

});
