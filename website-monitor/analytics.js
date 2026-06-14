// Google Analytics 4 / Looker Studio dashboard loader for dashboard.4-eyes.eu/analytics/
(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // CONFIGURATION
  // Replace this with the embed URL from Looker Studio (Share → Embed report).
  // It should look like: https://lookerstudio.google.com/embed/reporting/<report-id>/page/<page-id>
  // ---------------------------------------------------------------------------
  const LOOKER_EMBED_URL = 'https://datastudio.google.com/embed/reporting/5a7c2bc6-954e-4ccd-872e-adba5ac3d965/page/z0E1F';

  const notice = document.getElementById('notice');
  const iframe = document.getElementById('looker-iframe');
  const frameContainer = document.querySelector('.report-frame');

  function setPlaceholder() {
    if (notice) notice.classList.remove('hidden');
    if (frameContainer) {
      frameContainer.classList.add('placeholder');
      frameContainer.textContent = 'Add the Looker Studio embed URL to analytics.js to see the live GA4 dashboard.';
    }
    if (iframe) iframe.style.display = 'none';
  }

  function loadReport(url) {
    if (!iframe || !frameContainer) return;
    if (notice) notice.classList.add('hidden');
    frameContainer.classList.remove('placeholder');
    frameContainer.textContent = '';
    iframe.style.display = 'block';
    iframe.src = url;
  }

  // Allow overriding via query string for quick testing: ?looker=<url>
  const params = new URLSearchParams(window.location.search);
  const overrideUrl = params.get('looker');

  if (overrideUrl) {
    loadReport(overrideUrl);
  } else if (LOOKER_EMBED_URL && LOOKER_EMBED_URL.startsWith('http')) {
    loadReport(LOOKER_EMBED_URL);
  } else {
    setPlaceholder();
  }
})();
