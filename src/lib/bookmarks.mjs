const BASE62 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function nextSlug(index) {
  if (!Number.isSafeInteger(index) || index < 1) throw new TypeError('Invalid bookmark counter');
  let value = index;
  let encoded = '';
  while (value > 0) {
    encoded = BASE62[value % 62] + encoded;
    value = Math.floor(value / 62);
  }
  return `mona-${encoded}`;
}

export function normalizeUrl(input) {
  if (typeof input !== 'string' || !input.trim()) throw new TypeError('Enter a URL');
  let parsed;
  try { parsed = new URL(input.trim()); } catch { throw new TypeError('Enter a valid URL'); }
  if (!['http:', 'https:'].includes(parsed.protocol) || !parsed.hostname) {
    throw new TypeError('Only http and https URLs are supported');
  }
  return parsed.href;
}

export function parseBookmarks(raw) {
  let items;
  try { items = JSON.parse(raw); } catch { return []; }
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  const output = [];
  for (const item of items) {
    if (!item || typeof item.url !== 'string' || typeof item.slug !== 'string' ||
        !/^mona-[0-9a-zA-Z]+$/.test(item.slug) || seen.has(item.slug)) continue;
    try {
      const url = normalizeUrl(item.url);
      output.push({ url, slug: item.slug });
      seen.add(item.slug);
    } catch { /* Ignore corrupted browser storage entries. */ }
  }
  return output;
}
