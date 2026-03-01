// ================================================
// BiasLens — Hand-drawn SVG Icons
// ================================================

const BiasIcons = {
  // Theater masks — Emotional Tone Analysis
  emotionalTone: `
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 18c0-6 8-12 18-12s18 6 18 12v6c0 10-8 20-18 20S12 34 12 24z" opacity="0.85"/>
      <circle cx="22" cy="22" r="2.5" fill="currentColor"/>
      <circle cx="38" cy="22" r="2.5" fill="currentColor"/>
      <path d="M22 34c3 4 9 5 14 2" stroke-width="2.4"/>
      <path d="M8 38c0-4 6-9 14-9s14 5 14 9v4c0 8-6 16-14 16S8 50 8 42z" opacity="0.45" stroke-dasharray="4 3"/>
      <path d="M16 46c2-3 7-4 10-1" opacity="0.5" stroke-dasharray="3 2"/>
    </svg>`,

  // Magnifying glass — Loaded Language Detection
  loadedLanguage: `
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="26" cy="26" r="16" stroke-width="2.5"/>
      <line x1="38" y1="38" x2="56" y2="56" stroke-width="3.5"/>
      <path d="M20 22c1-3 4-5 7-5" stroke-width="1.8" opacity="0.5"/>
      <path d="M18 28h16" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6"/>
      <path d="M20 32h12" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.4"/>
    </svg>`,

  // Picture frame — Framing Analysis
  framingAnalysis: `
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="6" y="10" width="52" height="44" rx="4" stroke-width="2.5"/>
      <rect x="12" y="16" width="40" height="32" rx="2" stroke-width="1.5" stroke-dasharray="5 3"/>
      <path d="M12 38l12-10 8 6 10-8 10 12" stroke-width="2" opacity="0.7"/>
      <circle cx="24" cy="24" r="4" stroke-width="1.5" opacity="0.6"/>
    </svg>`,

  // Balance scale — Balance & Omission Check
  balanceCheck: `
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="32" y1="8" x2="32" y2="56" stroke-width="2.5"/>
      <line x1="8" y1="20" x2="56" y2="20" stroke-width="2.5"/>
      <path d="M8 20l8 18h-16z" stroke-width="2" fill="none"/>
      <path d="M56 20l-8 18h16z" stroke-width="2" fill="none" opacity="0.6"/>
      <circle cx="32" cy="8" r="3" fill="currentColor" opacity="0.7"/>
      <line x1="24" y1="56" x2="40" y2="56" stroke-width="3"/>
    </svg>`,

  // Flag — Political Leaning Signal Detection
  politicalLeaning: `
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="8" x2="12" y2="56" stroke-width="2.8"/>
      <path d="M12 8c8-4 16 2 24-2 8-4 16 0 16 0v24c-8-2-12 4-16 2-8-4-16 2-24-2z" stroke-width="2" opacity="0.8"/>
      <path d="M20 16h8" stroke-width="1.5" opacity="0.4" stroke-dasharray="3 2"/>
      <path d="M20 22h12" stroke-width="1.5" opacity="0.4" stroke-dasharray="3 2"/>
    </svg>`,

  // Megaphone — Propaganda Technique Identification
  propaganda: `
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 26h8v12h-8z" stroke-width="2.2"/>
      <path d="M16 24l28-14v44l-28-14z" stroke-width="2.5"/>
      <path d="M44 20v24" stroke-width="2.5"/>
      <path d="M48 24c4 2 6 5 6 8s-2 6-6 8" stroke-width="2" opacity="0.5"/>
      <path d="M52 20c6 3 9 7 9 12s-3 9-9 12" stroke-width="1.5" opacity="0.3" stroke-dasharray="4 3"/>
      <path d="M12 38l-2 14h8l-2-14" stroke-width="2" opacity="0.7"/>
    </svg>`,

  // Gauge/dashboard — Quantitative Bias Score
  biasScore: `
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 44a24 24 0 1 1 48 0" stroke-width="3" opacity="0.3"/>
      <path d="M8 44a24 24 0 1 1 48 0" stroke-width="3" stroke-dasharray="6 4"/>
      <circle cx="32" cy="44" r="4" fill="currentColor"/>
      <line x1="32" y1="44" x2="24" y2="22" stroke-width="2.5"/>
      <path d="M14 44h4" stroke-width="2" opacity="0.5"/>
      <path d="M46 44h4" stroke-width="2" opacity="0.5"/>
      <path d="M32 16v4" stroke-width="2" opacity="0.5"/>
      <path d="M18 22l3 3" stroke-width="1.5" opacity="0.4"/>
      <path d="M46 22l-3 3" stroke-width="1.5" opacity="0.4"/>
    </svg>`,

  // Arrow expand — Detail expander
  expand: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7 17L17 7"/>
      <path d="M7 7h10v10"/>
    </svg>`,

  // Refresh — Re-analyze
  refresh: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M1 4v6h6"/>
      <path d="M23 20v-6h-6"/>
      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
    </svg>`,

  // Code brackets — JSON output
  json: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 3H6a2 2 0 0 0-2 2v3c0 1.1-.9 2-2 2 1.1 0 2 .9 2 2v3a2 2 0 0 0 2 2h2"/>
      <path d="M16 3h2a2 2 0 0 1 2 2v3c0 1.1.9 2 2 2-1.1 0-2 .9-2 2v3a2 2 0 0 1-2 2h-2"/>
    </svg>`,

  // Lightbulb — Neutral rewrite suggestions
  lightbulb: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 18h6"/>
      <path d="M10 22h4"/>
      <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>
    </svg>`,

  // Clipboard — Summary
  clipboard: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
      <rect x="8" y="2" width="8" height="4" rx="1"/>
      <line x1="8" y1="12" x2="16" y2="12" opacity="0.5"/>
      <line x1="8" y1="16" x2="14" y2="16" opacity="0.5"/>
    </svg>`
};
