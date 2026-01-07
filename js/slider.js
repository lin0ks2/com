/* MOYAMOVA landing slider (no dependencies)
 *
 * Features:
 *  - Prev/Next buttons (optional)
 *  - Dots navigation
 *  - Basic touch swipe
 *  - Optional autoplay via data-autoplay="2000" (ms)
 *  - Respects prefers-reduced-motion
 */
(function () {
  'use strict';

  function prefersReducedMotion() {
    return Boolean(
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function initSlider(root) {
    const track = root.querySelector('.mm-slider__track');
    const slides = Array.from(root.querySelectorAll('.mm-slider__slide'));
    const prevBtn = root.querySelector('.mm-slider__btn--prev');
    const nextBtn = root.querySelector('.mm-slider__btn--next');
    const dotsWrap = root.querySelector('.mm-slider__dots');

    if (!track || slides.length === 0) return;

    let index = 0;
    let startX = 0;
    let deltaX = 0;
    let isDragging = false;
    let autoplayId = null;
    let isPaused = false;

    const autoplayMs = (() => {
      const raw = root.getAttribute('data-autoplay');
      const n = raw ? parseInt(raw, 10) : 0;
      return Number.isFinite(n) ? n : 0;
    })();

    // Build dots
    const dots = slides.map((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'mm-slider__dot';
      b.setAttribute('aria-label', 'Слайд ' + (i + 1));
      b.addEventListener('click', () => goTo(i));
      dotsWrap && dotsWrap.appendChild(b);
      return b;
    });

    function update() {
      const x = -index * 100;
      if (prefersReducedMotion()) {
        track.style.transitionDuration = '0ms';
      }
      track.style.transform = 'translate3d(' + x + '%, 0, 0)';

      dots.forEach((d, i) => {
        if (i === index) d.classList.add('is-active');
        else d.classList.remove('is-active');
      });

      if (prevBtn) prevBtn.disabled = slides.length <= 1;
      if (nextBtn) nextBtn.disabled = slides.length <= 1;
    }

    function goTo(i) {
      index = clamp(i, 0, slides.length - 1);
      update();
    }

    function next() {
      index = (index + 1) % slides.length;
      update();
    }

    function prev() {
      index = (index - 1 + slides.length) % slides.length;
      update();
    }

    if (prevBtn) prevBtn.addEventListener('click', prev);
    if (nextBtn) nextBtn.addEventListener('click', next);

    function stopAutoplay() {
      if (autoplayId) {
        clearInterval(autoplayId);
        autoplayId = null;
      }
    }

    function startAutoplay() {
      if (!autoplayMs || autoplayMs < 600) return;
      if (prefersReducedMotion()) return;
      stopAutoplay();
      autoplayId = setInterval(() => {
        if (!isPaused) next();
      }, autoplayMs);
    }

    // Keyboard (only when focused inside)
    root.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      }
    });

    // Touch swipe
    const viewport = root.querySelector('.mm-slider__viewport') || root;

    viewport.addEventListener(
      'touchstart',
      (e) => {
        if (!e.touches || e.touches.length !== 1) return;
        isDragging = true;
        startX = e.touches[0].clientX;
        deltaX = 0;
        isPaused = true;
      },
      { passive: true }
    );

    viewport.addEventListener(
      'touchmove',
      (e) => {
        if (!isDragging || !e.touches || e.touches.length !== 1) return;
        deltaX = e.touches[0].clientX - startX;
      },
      { passive: true }
    );

    viewport.addEventListener(
      'touchend',
      () => {
        if (!isDragging) return;
        isDragging = false;
        const threshold = 40; // px
        if (deltaX > threshold) prev();
        else if (deltaX < -threshold) next();
        isPaused = false;
      },
      { passive: true }
    );

    // Pause on hover/focus (desktop)
    root.addEventListener('mouseenter', () => { isPaused = true; });
    root.addEventListener('mouseleave', () => { isPaused = false; });
    root.addEventListener('focusin', () => { isPaused = true; });
    root.addEventListener('focusout', () => { isPaused = false; });

    // Stop autoplay when the user explicitly clicks arrows/dots
    if (prevBtn) prevBtn.addEventListener('click', stopAutoplay);
    if (nextBtn) nextBtn.addEventListener('click', stopAutoplay);

    // Initial state
    goTo(0);

    // Autoplay
    startAutoplay();
  }

  function boot() {
    document
      .querySelectorAll('.mm-slider')
      .forEach((slider) => initSlider(slider));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
