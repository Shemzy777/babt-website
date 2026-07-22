/**
 * Convert a string to a URL-friendly slug.
 * e.g. "Financial Advisory" → "financial-advisory"
 */
export function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

/**
 * Truncate a string to a given length, adding ellipsis if needed.
 */
export function truncate(str, length = 120) {
  if (!str) return ''
  if (str.length <= length) return str
  return str.slice(0, length).trim() + '...'
}

/**
 * Format a date string (ISO) to a human-readable format.
 * e.g. "2025-03-15" → "15 March 2025"
 */
export function formatDate(dateStr, locale = 'en-NG') {
  if (!dateStr) return ''
  try {
    return new Date(dateStr).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return dateStr
  }
}

/**
 * Clamp a number between min and max.
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

/**
 * Build a full internal URL for the NG site.
 */
export function buildUrl(path = '') {
  const base = '/ng/en'
  const cleaned = path.startsWith('/') ? path : `/${path}`
  return `${base}${cleaned}`
}

/**
 * Debounce a function call.
 */
export function debounce(fn, delay = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}
