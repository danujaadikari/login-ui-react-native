// ================================================================
// MODERN TYPOGRAPHY SYSTEM - 2025 DESIGN STANDARDS
// ================================================================
// Font Stack: System fonts for optimal performance & native feel
// Follows type scale principles for consistent hierarchy

export default {
  // ===== FONT FAMILIES =====
  fontFamily: {
    // Primary: Clean, modern, professional
    primary: Platform.select({
      ios: 'SF Pro Display',
      android: 'Roboto',
      web: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      default: 'System',
    }),
    
    // Monospace for codes, technical data
    mono: Platform.select({
      ios: 'SF Mono',
      android: 'Roboto Mono',
      web: '"Fira Code", "Courier New", monospace',
      default: 'monospace',
    }),
  },
  
  // ===== FONT SIZES (Type Scale: 1.25 ratio) =====
  fontSize: {
    xs: 12,    // Captions, labels
    sm: 14,    // Body small, secondary text
    base: 16,  // Body text, inputs (Recommended for readability)
    lg: 18,    // Large body, subtitles
    xl: 20,    // Section headings
    '2xl': 24, // Card titles
    '3xl': 30, // Page headings
    '4xl': 36, // Hero headings
    '5xl': 48, // Display text (rarely used on mobile)
  },
  
  // ===== FONT WEIGHTS =====
  fontWeight: {
    normal: '400',    // Regular body text
    medium: '500',    // Emphasized text
    semibold: '600',  // Headings, buttons
    bold: '700',      // Strong emphasis
    extrabold: '800', // Hero text
  },
  
  // ===== LINE HEIGHTS (For readability) =====
  lineHeight: {
    tight: 1.2,   // Headings
    normal: 1.5,  // Body text (optimal for reading)
    relaxed: 1.75, // Large paragraphs
  },
  
  // ===== LETTER SPACING =====
  letterSpacing: {
    tighter: -0.5,
    tight: -0.25,
    normal: 0,
    wide: 0.25,
    wider: 0.5,
  },
};

// Import Platform for font family selection
import { Platform } from 'react-native';
