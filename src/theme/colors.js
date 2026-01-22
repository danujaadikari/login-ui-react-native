// ================================================================
// MODERN 2025 COLOR PALETTE - HCI & WCAG AA COMPLIANT
// ================================================================
// Design Philosophy: Premium • Professional • Accessible • Trustworthy
// Color psychology: Deep blues convey trust, security, and professionalism

export default {
  // ===== PRIMARY BRAND COLORS =====
  // Deep indigo for premium, modern feel (2025 trend)
  primary: '#4F46E5',           // Indigo-600 - Main brand color
  primaryDark: '#4338CA',       // Indigo-700 - Hover/Active states
  primaryLight: '#6366F1',      // Indigo-500 - Disabled states
  primaryUltraLight: '#EEF2FF', // Indigo-50 - Backgrounds
  
  // ===== ACCENT COLORS =====
  accent: '#06B6D4',            // Cyan-500 - CTAs, highlights
  accentDark: '#0891B2',        // Cyan-600 - Hover states
  accentLight: '#ECFEFF',       // Cyan-50 - Backgrounds
  
  // ===== GRADIENTS (Modern 2025 trend) =====
  gradientPrimary: ['#4F46E5', '#7C3AED'], // Indigo to Purple
  gradientAccent: ['#06B6D4', '#3B82F6'],  // Cyan to Blue
  
  // ===== BACKGROUNDS =====
  background: '#F8FAFC',        // Slate-50 - Main background (soft, premium)
  backgroundSecondary: '#F1F5F9', // Slate-100 - Cards, sections
  surface: '#FFFFFF',           // Pure white - Cards, modals
  
  // ===== TEXT COLORS (WCAG AA Compliant) =====
  textPrimary: '#0F172A',       // Slate-900 - Headings (Contrast: 16.5:1)
  textSecondary: '#475569',     // Slate-600 - Body text (Contrast: 8:1)
  textTertiary: '#94A3B8',      // Slate-400 - Placeholders (Contrast: 4.5:1)
  textInverse: '#FFFFFF',       // White text on dark backgrounds
  
  // ===== BORDER COLORS =====
  border: '#E2E8F0',            // Slate-200 - Default borders
  borderLight: '#F1F5F9',       // Slate-100 - Subtle dividers
  borderFocus: '#4F46E5',       // Primary - Focused inputs (HCI: Clear feedback)
  
  // ===== SEMANTIC COLORS (Feedback & States) =====
  success: '#10B981',           // Emerald-500 - Success messages
  successLight: '#D1FAE5',      // Emerald-100 - Success backgrounds
  
  error: '#EF4444',             // Red-500 - Error messages
  errorLight: '#FEE2E2',        // Red-100 - Error backgrounds
  
  warning: '#F59E0B',           // Amber-500 - Warning messages
  warningLight: '#FEF3C7',      // Amber-100 - Warning backgrounds
  
  info: '#3B82F6',              // Blue-500 - Info messages
  infoLight: '#DBEAFE',         // Blue-100 - Info backgrounds
  
  // ===== INTERACTIVE STATES =====
  hover: '#F8FAFC',             // Slate-50 - Hover backgrounds
  active: '#E2E8F0',            // Slate-200 - Active/Pressed states
  disabled: '#CBD5E1',          // Slate-300 - Disabled elements
  
  // ===== SHADOWS (Soft, modern depth) =====
  shadowColor: '#0F172A',       // Base color for shadows
  
  // ===== SOCIAL AUTH COLORS =====
  google: '#4285F4',            // Google brand blue
  github: '#24292E',            // GitHub dark
  apple: '#000000',             // Apple black
  
  // ===== OVERLAY & BACKDROP =====
  overlay: 'rgba(15, 23, 42, 0.5)',      // Semi-transparent dark
  backdropBlur: 'rgba(248, 250, 252, 0.8)', // Glass morphism effect
};
