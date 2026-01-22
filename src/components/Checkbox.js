import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import colors from '../theme/colors';
import typography from '../theme/typography';

/**
 * CHECKBOX COMPONENT - Modern Design
 * 
 * HCI Principles:
 * ✓ Large touch target (24px checkbox + padding)
 * ✓ Clear visual states (checked/unchecked)
 * ✓ Accessible label with proper spacing
 */
const Checkbox = ({ checked, onPress, label, style = {} }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.7}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkmark: {
    color: colors.textInverse,
    fontSize: 14,
    fontWeight: typography.fontWeight.bold,
  },
  label: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    flex: 1,
    lineHeight: typography.lineHeight.normal * typography.fontSize.sm,
  },
});

export default Checkbox;
