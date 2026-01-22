import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import colors from '../theme/colors';

/**
 * Reusable Primary Button Component
 * HCI Principles Applied:
 * - Large touch target (height: 50, min 44pt) for accessibility
 * - High contrast colors for visibility
 * - Visual feedback on press (opacity change)
 * - Loading state to prevent multiple submissions
 * - Disabled state for form validation feedback
 */
const PrimaryButton = ({ 
  title, 
  onPress, 
  loading = false,
  disabled = false,
  style = {}
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.buttonDisabled,
        style
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8} // HCI: Visual feedback on press
    >
      {loading ? (
        // Loading indicator provides user feedback (HCI: User Feedback)
        <ActivityIndicator color={colors.buttonText} />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50, // HCI: Large touch target (min 44-48pt)
    backgroundColor: colors.primary,
    borderRadius: 8, // HCI: Consistent rounded corners
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    // HCI: Visual depth with subtle shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonDisabled: {
    backgroundColor: colors.inputBorder, // HCI: Clear disabled state
    opacity: 0.6,
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 16, // HCI: Readable font size
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default PrimaryButton;
