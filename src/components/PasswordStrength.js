import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';
import typography from '../theme/typography';

/**
 * PASSWORD STRENGTH INDICATOR - Real-time Feedback
 * 
 * HCI Principles:
 * ✓ Immediate feedback - Users see strength as they type
 * ✓ Color-coded system - Red/Yellow/Green for quick comprehension
 * ✓ Clear labels - Weak, Medium, Strong messaging
 * ✓ Visual progress bar - Shows improvement
 */
const PasswordStrength = ({ password }) => {
  // Calculate password strength
  const calculateStrength = (pwd) => {
    if (!pwd) return { level: 0, label: '', color: colors.textTertiary };
    
    let strength = 0;
    
    // Length check
    if (pwd.length >= 6) strength++;
    if (pwd.length >= 10) strength++;
    
    // Character variety checks
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++; // Mixed case
    if (/\d/.test(pwd)) strength++; // Numbers
    if (/[^a-zA-Z0-9]/.test(pwd)) strength++; // Special characters
    
    // Determine label and color
    if (strength <= 2) return { level: 1, label: 'Weak', color: colors.error };
    if (strength <= 3) return { level: 2, label: 'Medium', color: colors.warning };
    return { level: 3, label: 'Strong', color: colors.success };
  };

  const strength = calculateStrength(password);
  
  if (!password) return null;

  return (
    <View style={styles.container}>
      {/* Progress bar */}
      <View style={styles.barContainer}>
        {[1, 2, 3].map((level) => (
          <View
            key={level}
            style={[
              styles.bar,
              level <= strength.level && { backgroundColor: strength.color },
            ]}
          />
        ))}
      </View>
      
      {/* Label */}
      <Text style={[styles.label, { color: strength.color }]}>
        {strength.label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 4,
  },
  barContainer: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 6,
  },
  bar: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.border,
  },
  label: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
  },
});

export default PasswordStrength;
