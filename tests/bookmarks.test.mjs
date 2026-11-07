import test from 'node:test';
import assert from 'node:assert/strict';
import { nextSlug, normalizeUrl, parseBookmarks } from '../src/lib/bookmarks.mjs';

test('nextSlug makes deterministic base62 mona aliases', () => {
  assert.equal(nextSlug(1), 'mona-1');
  assert.equal(nextSlug(62), 'mona-10');
  assert.equal(nextSlug(3844), 'mona-100');
});
test('normalizeUrl accepts http(s) URLs', () => {
  assert.equal(normalizeUrl(' https://example.com/path '), 'https://example.com/path');
  assert.equal(normalizeUrl('http://example.com'), 'http://example.com/');
});
test('normalizeUrl rejects unsafe or empty URLs', () => {
  for (const raw of ['', '  ', 'javascript:alert(1)', 'file:///etc/passwd', '/relative']) {
    assert.throws(() => normalizeUrl(raw));
  }
});
test('parseBookmarks ignores broken records and malformed storage', () => {
  assert.deepEqual(parseBookmarks('not-json'), []);
  assert.deepEqual(parseBookmarks('{}'), []);
  assert.deepEqual(parseBookmarks(JSON.stringify([
    { url: 'https://example.com', slug: 'mona-1' },
    { url: 'javascript:alert(1)', slug: 'mona-2' },
    { url: 'https://safe.test', slug: '<img>' }
  ])), [{ url: 'https://example.com/', slug: 'mona-1' }]);
});
