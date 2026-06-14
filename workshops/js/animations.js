// 4-Eyes Workshops — GSAP animation layer
// Minimal scope: ScrollTrigger entrance animations + trust-number count-ups.
// Respects prefers-reduced-motion and disables complex motion on small screens.

(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  // If user wants reduced motion or GSAP is unavailable, let CSS handle it.
  if (prefersReducedMotion.matches || !window.gsap || !window.ScrollTrigger) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Reusable entrance helper.
  function reveal(elements, options = {}) {
    const defaults = {
      y: isMobile ? 16 : 24,
      opacity: 1,
      duration: isMobile ? 0.45 : 0.6,
      ease: 'power2.out',
      stagger: 0.08,
      scrollTrigger: {
        trigger: elements,
        start: 'top 85%',
        once: true,
        toggleActions: 'play none none none',
      },
    };

    const config = { ...defaults, ...options };
    if (options.scrollTrigger) {
      config.scrollTrigger = { ...defaults.scrollTrigger, ...options.scrollTrigger };
    }

    const scrollTrigger = config.scrollTrigger;
    delete config.scrollTrigger;

    gsap.fromTo(elements,
      { y: config.y, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: config.duration,
        ease: config.ease,
        stagger: config.stagger,
        scrollTrigger,
      }
    );
  }

  // 1. Hero sequence (only on homepage)
  const hero = document.querySelector('.hero');
  if (hero) {
    const heroTag = hero.querySelector('.document-tag');
    const heroTitle = hero.querySelector('h1');
    const heroSubtitle = hero.querySelector('.hero-subtitle');
    const heroCtas = hero.querySelector('.hero-cta');
    const heroTrust = hero.querySelector('.hero-trust');

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    if (heroTag) tl.from(heroTag, { y: 12, opacity: 0, duration: 0.5 }, 0);
    if (heroTitle) tl.from(heroTitle, { y: 20, opacity: 0, duration: 0.6 }, 0.1);
    if (heroSubtitle) tl.from(heroSubtitle, { y: 16, opacity: 0, duration: 0.5 }, 0.25);
    if (heroCtas) tl.from(heroCtas, { y: 16, opacity: 0, duration: 0.5 }, 0.4);
    if (heroTrust) tl.from(heroTrust, { opacity: 0, duration: 0.6 }, 0.55);
  }

  // 2. Trust bar numbers — count up.
  document.querySelectorAll('.trust-number').forEach(el => {
    const raw = el.textContent.trim();
    const hasPlus = raw.includes('+');
    const hasPercent = raw.includes('%');
    const hasText = /[a-z]/i.test(raw);

    if (hasText) return; // e.g. "90 min" or "0" — skip animated count-up

    const numeric = parseFloat(raw.replace(/[^0-9.]/g, ''));
    if (Number.isNaN(numeric)) return;

    const suffix = hasPercent ? '%' : hasPlus ? '+' : '';
    const obj = { value: 0 };

    gsap.to(obj, {
      value: numeric,
      duration: 1.2,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        once: true,
      },
      onUpdate: () => {
        const display = Number.isInteger(numeric)
          ? Math.round(obj.value)
          : obj.value.toFixed(1);
        el.textContent = `${display}${suffix}`;
      },
    });
  });

  // 3. Staggered section reveals.
  reveal('.problem-item', { scrollTrigger: { trigger: '.problem-grid', start: 'top 85%', once: true } });
  reveal('.workshop-card', { scrollTrigger: { trigger: '.workshops-grid', start: 'top 80%', once: true }, stagger: 0.12 });
  reveal('.why-item', { scrollTrigger: { trigger: '.why-grid', start: 'top 85%', once: true }, stagger: 0.1 });
  reveal('.testimonial-card', { scrollTrigger: { trigger: '.testimonial-grid', start: 'top 85%', once: true }, stagger: 0.15 });

  // 4. Section headers.
  document.querySelectorAll('.section-header').forEach(header => {
    reveal(header, { stagger: 0, scrollTrigger: { trigger: header, start: 'top 88%', once: true } });
  });

  // 5. CTA section.
  const ctaSection = document.querySelector('.cta-section');
  if (ctaSection) {
    reveal(ctaSection.querySelectorAll('h2, p, .cta-buttons'), {
      scrollTrigger: { trigger: ctaSection, start: 'top 80%', once: true },
      stagger: 0.1,
    });
  }

  // 6. Trust items (non-number).
  const trustGrid = document.querySelector('.trust-grid');
  if (trustGrid) {
    reveal(trustGrid.querySelectorAll('.trust-item'), {
      scrollTrigger: { trigger: trustGrid, start: 'top 88%', once: true },
      stagger: 0.08,
    });
  }

  // Cleanup ScrollTriggers on page unload to avoid memory leaks.
  window.addEventListener('beforeunload', () => {
    ScrollTrigger.getAll().forEach(st => st.kill());
  });

  // Refresh ScrollTrigger after fonts load so trigger positions are accurate.
  if (document.fonts) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
}());
