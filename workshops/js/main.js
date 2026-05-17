document.addEventListener('DOMContentLoaded', function () {
  initMobileMenu();
  initSmoothScroll();
  initActiveNav();
  initNavScroll();
  initScrollAnimations();
  initContactForm();
  initGuideForms();
});

function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    const open = nav.classList.toggle('active');
    const spans = toggle.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      const spans = toggle.querySelectorAll('span');
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

function initActiveNav() {
  const path = window.location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a:not(.btn)').forEach(link => {
    const href = link.getAttribute('href').replace(/\.html$/, '').replace(/\/$/, '') || '/';
    if (href === path || (href !== '/' && path.startsWith(href))) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

function initNavScroll() {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initScrollAnimations() {
  if (!window.IntersectionObserver) return;

  const selectors = [
    '.problem-item', '.workshop-card', '.why-item',
    '.testimonial-card', '.process-step', '.resource-card',
    '.trust-item', '.workshop-detail-card',
    '.about-grid > *', '.principle-list', '.custom-content',
  ];

  const targets = document.querySelectorAll(selectors.join(', '));

  targets.forEach(el => {
    const siblings = Array.from(el.parentElement?.children || []);
    const idx = siblings.indexOf(el);
    el.style.transitionDelay = `${Math.min(idx * 0.08, 0.32)}s`;
    el.classList.add('animate-on-scroll');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

  targets.forEach(el => observer.observe(el));
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const btn = form.querySelector('[type="submit"]');
  const originalText = btn.textContent;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    clearFormError(form);

    const data = {};
    new FormData(form).forEach((v, k) => { data[k] = v; });

    btn.disabled = true;
    btn.textContent = 'Sending…';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok || res.status === 200) {
        showContactSuccess();
      } else {
        throw new Error(`status ${res.status}`);
      }
    } catch {
      btn.disabled = false;
      btn.textContent = originalText;
      showFormError(form, 'Something went wrong. Please email us at <a href="mailto:contact@4-eyes.eu">contact@4-eyes.eu</a>.');
    }
  });
}

function initGuideForms() {
  document.querySelectorAll('form[data-guide]').forEach(form => {
    const btn = form.querySelector('[type="submit"]');

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      clearFormError(form);

      const data = {};
      new FormData(form).forEach((v, k) => { data[k] = v; });

      btn.disabled = true;
      btn.textContent = 'Sending…';

      try {
        const res = await fetch('/api/guide', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        if (res.ok || res.status === 200) {
          form.innerHTML = '<p class="guide-success">✓ Check your inbox — the guide is on its way!</p>';
        } else {
          throw new Error();
        }
      } catch {
        btn.disabled = false;
        btn.textContent = 'Download Free';
        showFormError(form, 'Something went wrong. Please try again.');
      }
    });
  });
}

function showContactSuccess() {
  window.location.href = ‘/thank-you’;
}

function showFormError(form, message) {
  clearFormError(form);
  const el = document.createElement('div');
  el.className = 'form-error';
  el.innerHTML = message;
  form.appendChild(el);
}

function clearFormError(form) {
  form.querySelector('.form-error')?.remove();
}
