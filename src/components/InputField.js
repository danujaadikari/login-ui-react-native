import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';

/**
 * Reusable Input Field Component
 * HCI Principles Applied:
 * - Large touch target (height: 50) for better usability
 * - Clear visual feedback with border and focus states
 * - Accessible placeholder text with good contrast
 * - Consistent spacing and rounded corners
 */
const InputField = ({ 
  label, 
  placeholder, 
  value, 
  onChangeText, 
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  error = ''
}) => {
  return (
    <View style={styles.container}>
      {/* Label provides clear context (HCI: Visual Hierarchy) */}
      {label && <Text style={styles.label}>{label}</Text>}
      
      {/* Input field with proper sizing for touch interaction */}
      <TextInput
        style={[
          styles.input,
          error ? styles.inputError : null
        ]}
        placeholder={placeholder}
        placeholderTextColor={colors.textSecondary}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
      />
      
      {/* Error feedback for user guidance (HCI: User Feedback) */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  input: {
    height: 50, // HCI: Large touch target (min 44-48pt recommended)
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: 8, // HCI: Consistent rounded corners
    paddingHorizontal: 16,
    fontSize: 16, // HCI: Readable font size
    color: colors.textPrimary,
  },
  inputError: {
    borderColor: colors.error, // HCI: Visual feedback for errors
  },
  errorText: {
    fontSize: 12,
    color: colors.error,
    marginTop: 4,
  },
});

export default InputField;
