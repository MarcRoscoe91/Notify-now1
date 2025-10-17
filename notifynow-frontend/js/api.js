// Set this to your backend URL on Vercel once deployed, or keep the current Render domain
// Example: const API_BASE = "https://notify-now-backend.vercel.app";
const API_BASE = (window.__API_BASE__) || "https://api.notify-now.co.uk"; // fallback

export async function ping() {
  const r = await fetch(`${API_BASE}/`);
  return r.text();
}

export async function whoAmI() {
  const r = await fetch(`${API_BASE}/api/auth/me`, { credentials: 'include' });
  if (!r.ok) return null;
  return r.json();
}

export async function listItems() {
  const r = await fetch(`${API_BASE}/api/items`, { credentials: 'include' });
  if (!r.ok) throw new Error('Failed to fetch items');
  return r.json();
}

export async function addItem(payload) {
  const r = await fetch(`${API_BASE}/api/items`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return r.json();
}
