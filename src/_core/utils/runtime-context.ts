export const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined'

export const isJsDom =
  (typeof window !== 'undefined' && window.name === 'nodejs') ||
  (typeof navigator !== 'undefined' && (navigator.userAgent.includes('Node.js') || navigator.userAgent.includes('jsdom')))

export const isServer = typeof process !== 'undefined' && process.versions != null && process.versions.node != null
