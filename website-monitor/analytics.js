// Google Analytics 4 / Looker Studio dashboard loader for dashboard.4-eyes.eu/analytics/
(function () {
  'use strict';

  const LOOKER_EMBED_URL = 'https://lookerstudio.google.com/embed/reporting/5a7c2bc6-954e-4ccd-872e-adba5ac3d965/page/z0E1F';
  const LOOKER_VIEW_URL = 'https://datastudio.google.com/reporting/5a7c2bc6-954e-4ccd-872e-adba5ac3d965';

  const notice = document.getElementById('notice');
  const iframe = document.getElementById('looker-iframe');
  const fallback = document.getElementById('fallback');
  const frameContainer = document.querySelector('.report-frame');

  // Allow overriding via query string for quick testing: ?looker=<url>
  const params = new URLSearchParams(window.location.search);
  const overrideUrl = params.get('looker');
  const targetUrl = overrideUrl && overrideUrl.startsWith('http') ? overrideUrl : LOOKER_EMBED_URL;

  function showNotice(text) {
    if (notice) {
      notice.classList.remove('hidden');
      notice.querySelector('p').textContent = text;
    }
  }

  function showFallback() {
    if (fallback) fallback.style.display = 'block';
  }

  function hideNotice() {
    if (notice) notice.classList.add('hidden');
  }

  if (!iframe) {
    showNotice('Could not find the report frame. Please refresh the page.');
    return;
  }

  // If the iframe src is already set in HTML, only update when overridden.
  if (overrideUrl) {
    iframe.src = targetUrl;
  }

  hideNotice();

  // Looker Studio can take a few seconds to render; show fallback if still blank after 10s.
  setTimeout(function () {
    try {
      // If the iframe content document is inaccessible or empty, show fallback.
      var doc = iframe.contentDocument || iframe.contentWindow.document;
      if (!doc || !doc.body || (doc.body.innerHTML || '').length < 50) {
        showFallback();
      }
    } catch (e) {
      // Cross-origin: we can't inspect, assume it loaded (browser blocks introspection).
    }
  }, 10000);

  iframe.addEventListener('load', function () {
    hideNotice();
  });

  iframe.addEventListener('error', function () {
    showFallback();
  });
})();
