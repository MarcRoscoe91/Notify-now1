import { ping } from '/js/api.js';
(async () => {
  const el = document.getElementById('api-ping');
  if (!el) return;
  try {
    const txt = await ping();
    el.textContent = 'API OK: ' + txt;
  } catch {
    el.textContent = 'API not reachable yet.';
  }
})();