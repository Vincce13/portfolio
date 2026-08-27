// ========== Theme Toggle ==========
const toggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved preference or system preference
const saved = localStorage.getItem('theme');
if (saved) {
  html.setAttribute('data-theme', saved);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  html.setAttribute('data-theme', 'dark');
}

toggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});


// ========== Mobile Menu ==========
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

// Close the menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
  });
});

// ========== Photo Flip ==========
const photo = document.getElementById('photoFlip');

photo.addEventListener('click', () => {
  photo.classList.toggle('flipped');
});