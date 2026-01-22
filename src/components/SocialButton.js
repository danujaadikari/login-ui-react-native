import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import colors from '../theme/colors';
import typography from '../theme/typography';

/**
 * SOCIAL AUTH BUTTON - OAuth Integration Ready
 * 
 * HCI Principles:
 * ✓ Recognizable brand colors
 * ✓ Icon + Text for clarity
 * ✓ Large touch target (50px)
 * ✓ Visual feedback on press
 */
const SocialButton = ({ provider, onPress, style = {} }) => {
  const getProviderConfig = () => {
    switch (provider) {
      case 'google':
        return { icon: '🔵', text: 'Continue with Google', color: colors.google };
      case 'github':
        return { icon: '⚫', text: 'Continue with GitHub', color: colors.github };
      case 'apple':
        return { icon: '⚫', text: 'Continue with Apple', color: colors.apple };
      default:
        return { icon: '🔘', text: 'Continue', color: colors.textSecondary };
    }
  };

  const config = getProviderConfig();

  return (
    <TouchableOpacity
      style={[styles.button, { borderColor: config.color }, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.icon}>{config.icon}</Text>
      <Text style={styles.text}>{config.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 20,
    marginVertical: 6,
    // Subtle shadow
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  icon: {
    fontSize: 20,
    marginRight: 12,
  },
  text: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
  },
});

export default SocialButton;
