import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import colors from '../theme/colors';
import typography from '../theme/typography';

/**
 * SOCIAL AUTH BUTTON - OAuth Integration Ready
 * 
 * HCI Principles:
 * ✓ Recognizable brand icons
 * ✓ Icon + Text for clarity
 * ✓ Large touch target (50px)
 * ✓ Visual feedback on press
 */
const SocialButton = ({ provider, onPress, style = {} }) => {
  const getProviderConfig = () => {
    switch (provider) {
      case 'google':
        return { 
          IconComponent: AntDesign,
          iconName: 'google',
          text: 'Continue with Google', 
          color: colors.google,
          iconColor: '#4285F4'
        };
      case 'github':
        return { 
          IconComponent: AntDesign,
          iconName: 'github',
          text: 'Continue with GitHub', 
          color: colors.github,
          iconColor: '#24292E'
        };
      case 'apple':
        return { 
          IconComponent: AntDesign,
          iconName: 'apple1',
          text: 'Continue with Apple', 
          color: colors.apple,
          iconColor: '#000000'
        };
      default:
        return { 
          IconComponent: FontAwesome,
          iconName: 'circle-o',
          text: 'Continue', 
          color: colors.textSecondary,
          iconColor: colors.textSecondary
        };
    }
  };

  const config = getProviderConfig();
  const { IconComponent, iconName, iconColor } = config;

  return (
    <TouchableOpacity
      style={[styles.button, { borderColor: config.color }, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <IconComponent name={iconName} size={20} color={iconColor} style={styles.icon} />
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
    marginRight: 12,
  },
  text: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
  },
});

export default SocialButton;
