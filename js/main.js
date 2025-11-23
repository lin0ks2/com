(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Burger menu toggle
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
    });

    nav.addEventListener('click', (e) => {
      if (e.target.closest('.nav-link')) {
        nav.classList.remove('nav-open');
      }
    });
  }

  // Scroll to "How it works"
  const howBtn = document.querySelector('[data-role="how-it-works"]');
  const howSection = document.getElementById('how');

  if (howBtn && howSection) {
    howBtn.addEventListener('click', () => {
      howSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Smart opening of trainer
  const startBtn = document.querySelector('[data-role="start-trainer"]');
  const TRAINER_URL = 'https://moyamova.online/';

  if (startBtn) {
    startBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
        || window.innerWidth < 768;

      if (isMobile) {
        window.location.href = TRAINER_URL;
      } else {
        window.open(TRAINER_URL, '_blank', 'noopener');
      }
    });
  }
})();