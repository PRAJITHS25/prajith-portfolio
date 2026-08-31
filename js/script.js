// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(open));
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('is-open'));
});

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Scroll reveal — sections fade/slide in as they enter view
const revealEls = document.querySelectorAll('.reveal');
if (!prefersReduced && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}

// Highlight the current section's nav link while scrolling
const navAnchors = navLinks.querySelectorAll('a');
const observedSections = document.querySelectorAll('section[id]');
if ('IntersectionObserver' in window) {
  const navIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + id));
      }
    });
  }, { threshold: 0.5 });
  observedSections.forEach(s => navIo.observe(s));
}

// Contact form — shows a local confirmation only; no backend wired up yet
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  formStatus.textContent = "Message received — I'll get back to you soon.";
  formStatus.classList.add('is-visible');
  form.reset();
});
