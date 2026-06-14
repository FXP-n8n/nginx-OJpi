const ENDPOINTS = [
  { name: 'Homepage', url: 'https://www.4-eyes.eu/', type: 'page', checks: ['canonical', 'og', 'jsonld', 'charset', 'nobrand'] },
  { name: 'Workshops', url: 'https://www.4-eyes.eu/workshops', type: 'page', checks: ['canonical', 'og', 'jsonld', 'charset', 'nobrand'] },
  { name: 'About', url: 'https://www.4-eyes.eu/about', type: 'page', checks: ['canonical', 'charset', 'nobrand'] },
  { name: 'Resources', url: 'https://www.4-eyes.eu/resources', type: 'page', checks: ['canonical', 'charset', 'nobrand'] },
  { name: 'Contact', url: 'https://www.4-eyes.eu/contact', type: 'page', checks: ['canonical', 'charset', 'nobrand'] },
  { name: 'Sitemap XML', url: 'https://www.4-eyes.eu/sitemap.xml', type: 'sitemap', checks: ['xml', 'urls'] },
  { name: 'Robots TXT', url: 'https://www.4-eyes.eu/robots.txt', type: 'robots', checks: ['allows', 'sitemap'] },
  { name: 'Chatbot site', url: 'https://chatbot.4-eyes.eu/', type: 'page', checks: ['charset', 'nobrand'] },
  { name: 'Dashboard site', url: 'https://dashboard.4-eyes.eu/', type: 'page', checks: ['charset', 'nobrand'] },
];

const OLD_BRAND_RE = /#(0075de|2C5F5D|C9A468|615d59|f6f5f4)/gi;

function now() {
  return new Date().toLocaleString('en-GB', { timeZone: 'Europe/Brussels' });
}

async function fetchText(url) {
  const start = performance.now();
  const res = await fetch(url, { cache: 'no-store' });
  const text = await res.text();
  const duration = Math.round(performance.now() - start);
  return { ok: res.ok, status: res.status, duration, text, headers: res.headers };
}

function runChecks(text, type, checks, url) {
  const results = [];

  if (checks.includes('canonical')) {
    const m = text.match(/<link rel="canonical" href="([^"]+)"/i);
    results.push({ name: 'Canonical', ok: !!m && m[1] === url, detail: m ? m[1] : 'missing' });
  }

  if (checks.includes('og')) {
    const m = text.match(/<meta property="og:title" content="([^"]+)"/i);
    results.push({ name: 'Open Graph', ok: !!m, detail: m ? m[1] : 'missing' });
  }

  if (checks.includes('jsonld')) {
    const ok = text.includes('application/ld+json');
    results.push({ name: 'JSON-LD', ok, detail: ok ? 'present' : 'missing' });
  }

  if (checks.includes('charset')) {
    const ok = text.toLowerCase().includes('charset="utf-8"') || text.toLowerCase().includes('charset=utf-8');
    results.push({ name: 'Charset UTF-8', ok, detail: ok ? 'OK' : 'missing' });
  }

  if (checks.includes('nobrand')) {
    const hits = text.match(OLD_BRAND_RE) || [];
    results.push({ name: 'No old brand', ok: hits.length === 0, detail: `${hits.length} old-brand hits` });
  }

  if (type === 'sitemap') {
    const ok = text.includes('<urlset') && text.includes('</url>');
    results.push({ name: 'Valid sitemap', ok, detail: ok ? 'XML urlset found' : 'invalid' });
    const urls = (text.match(/<loc>/g) || []).length;
    results.push({ name: 'URL count', ok: urls >= 1, detail: `${urls} URLs` });
  }

  if (type === 'robots') {
    const allows = /^User-agent: \*\s*\nAllow: \//m.test(text) || text.includes('User-agent: *') && text.includes('Allow: /');
    results.push({ name: 'Allows all', ok: allows, detail: allows ? 'OK' : 'check rules' });
    const sitemap = text.includes('Sitemap:');
    results.push({ name: 'Sitemap link', ok: sitemap, detail: sitemap ? 'present' : 'missing' });
  }

  return results;
}

function aggregate(checks) {
  if (!checks.length) return 'ok';
  if (checks.some(c => !c.ok)) return 'down';
  return 'ok';
}

async function runAll() {
  const tbody = document.getElementById('checks-body');
  const runBtn = document.getElementById('run-btn');
  tbody.innerHTML = '<tr><td colspan="6">Running checks...</td></tr>';
  runBtn.disabled = true;

  let up = 0, down = 0, warn = 0;
  const rows = [];

  for (const ep of ENDPOINTS) {
    let result;
    try {
      result = await fetchText(ep.url);
    } catch (err) {
      result = { ok: false, status: 0, duration: 0, text: '', headers: new Headers(), error: err.message };
    }

    const checks = result.error
      ? [{ name: 'Reachability', ok: false, detail: result.error }]
      : runChecks(result.text, ep.type, ep.checks, ep.url);

    const status = result.error ? 'down' : aggregate(checks);
    if (status === 'ok') up++; else if (status === 'down') down++; else warn++;

    const checkDetails = checks.map(c => `<span class="badge ${c.ok ? 'ok' : 'down'}">${c.name}: ${c.ok ? 'OK' : 'FAIL'}</span>`).join(' ');

    rows.push({
      status,
      html: `<tr>
        <td><span class="badge ${status}">${status.toUpperCase()}</span></td>
        <td>${ep.name}</td>
        <td><a href="${ep.url}" target="_blank" style="color:#E8A020">${ep.url.replace('https://','')}</a></td>
        <td class="time">${result.status || '-'}</td>
        <td class="time">${result.duration ? result.duration + ' ms' : '-'}</td>
        <td class="message">${checkDetails}</td>
      </tr>`
    });
  }

  tbody.innerHTML = rows.map(r => r.html).join('');
  document.getElementById('total-up').textContent = up;
  document.getElementById('total-down').textContent = down;
  document.getElementById('total-warn').textContent = warn;
  document.getElementById('last-run').textContent = 'Last run: ' + now();

  const overall = document.getElementById('overall-dot');
  overall.className = 'status-dot ' + (down > 0 ? 'down' : warn > 0 ? 'warn' : 'ok');

  runBtn.disabled = false;
}

document.getElementById('run-btn').addEventListener('click', runAll);
runAll();
// Auto-refresh every 5 minutes
setInterval(runAll, 300000);
