import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView,
  TouchableOpacity 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import SocialButton from '../components/SocialButton';
import Checkbox from '../components/Checkbox';
import PasswordStrength from '../components/PasswordStrength';
import colors from '../theme/colors';
import typography from '../theme/typography';

/**
 * PREMIUM SIGNUP SCREEN - 2025 Design
 * 
 * Features:
 * ✓ Password strength indicator (real-time)
 * ✓ Social signup options
 * ✓ Terms & Privacy checkbox
 * ✓ Progressive validation
 * ✓ Error prevention (confirm password)
 * ✓ Modern card layout
 * ✓ Accessible and mobile-first
 */
const SignupScreen = ({ onNavigateToLogin }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [termsError, setTermsError] = useState('');
  const [loading, setLoading] = useState(false);

  // Email validation with regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Real-time email validation
  const handleEmailChange = (text) => {
    setEmail(text);
    if (text && !validateEmail(text)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  // Real-time password confirmation check
  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    if (text && password && text !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  // Comprehensive form validation
  const handleSignup = async () => {
    // Clear all errors
    setFullNameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setTermsError('');

    let isValid = true;

    // Full name validation
    if (!fullName.trim()) {
      setFullNameError('Full name is required');
      isValid = false;
    } else if (fullName.trim().length < 2) {
      setFullNameError('Please enter your full name');
      isValid = false;
    }

    // Email validation
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }

    // Password validation
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    }

    // Confirm password validation
    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password');
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }

    // Terms agreement validation
    if (!agreedToTerms) {
      setTermsError('Please agree to the Terms and Privacy Policy');
      isValid = false;
    }

    if (isValid) {
      setLoading(true);
      // Simulate API call (UI only)
      setTimeout(() => {
        setLoading(false);
        console.log('✅ Account created successfully (UI only)');
      }, 1500);
    }
  };

  // Social signup handlers (UI only)
  const handleGoogleSignup = () => {
    console.log('🔵 Google OAuth Signup (UI only)');
  };

  const handleGitHubSignup = () => {
    console.log('⚫ GitHub OAuth Signup (UI only)');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar style="dark" />
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Premium Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>✨</Text>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>
            Join us and start your journey today
          </Text>
        </View>

        {/* Premium Card Container */}
        <View style={styles.card}>
          {/* Social Signup */}
          <View style={styles.socialSection}>
            <SocialButton provider="google" onPress={handleGoogleSignup} />
            <SocialButton provider="github" onPress={handleGitHubSignup} />
          </View>

          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or sign up with email</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Signup Form */}
          <View style={styles.form}>
            <InputField
              label="Full Name"
              placeholder="John Doe"
              value={fullName}
              onChangeText={setFullName}
              autoCapitalize="words"
              error={fullNameError}
            />

            <InputField
              label="Email Address"
              placeholder="you@example.com"
              value={email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
              autoCapitalize="none"
              error={emailError}
            />

            <InputField
              label="Password"
              placeholder="Create a strong password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              error={passwordError}
            />

            {/* Password Strength Indicator - HCI: Real-time Feedback */}
            <PasswordStrength password={password} />

            <InputField
              label="Confirm Password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChangeText={handleConfirmPasswordChange}
              secureTextEntry
              error={confirmPasswordError}
            />

            {/* Terms & Privacy - HCI: Legal Compliance */}
            <View style={styles.termsSection}>
              <Checkbox
                checked={agreedToTerms}
                onPress={() => {
                  setAgreedToTerms(!agreedToTerms);
                  setTermsError('');
                }}
                label=""
              />
              <View style={styles.termsTextContainer}>
                <Text style={styles.termsText}>
                  I agree to the{' '}
                  <Text style={styles.termsLink}>Terms of Service</Text>
                  {' '}and{' '}
                  <Text style={styles.termsLink}>Privacy Policy</Text>
                </Text>
              </View>
            </View>
            {termsError ? <Text style={styles.termsError}>{termsError}</Text> : null}

            {/* Create Account Button */}
            <PrimaryButton
              title="Create Account"
              onPress={handleSignup}
              loading={loading}
              style={styles.signupButton}
            />

            {/* Login Link */}
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Already have an account? </Text>
              <TouchableOpacity onPress={onNavigateToLogin}>
                <Text style={styles.loginLink}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  header: {
    marginBottom: 32,
    alignItems: 'center',
  },
  greeting: {
    fontSize: 48,
    marginBottom: 16,
  },
  title: {
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: typography.fontSize.base,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: typography.lineHeight.relaxed * typography.fontSize.base,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 24,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  socialSection: {
    gap: 10,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  dividerText: {
    marginHorizontal: 16,
    fontSize: typography.fontSize.sm,
    color: colors.textTertiary,
    fontWeight: typography.fontWeight.medium,
  },
  form: {
    width: '100%',
  },
  termsSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  termsTextContainer: {
    flex: 1,
    marginLeft: -12,
  },
  termsText: {
    fontSize: typography.fontSize.xs,
    color: colors.textSecondary,
    lineHeight: typography.lineHeight.relaxed * typography.fontSize.xs,
  },
  termsLink: {
    color: colors.primary,
    fontWeight: typography.fontWeight.semibold,
  },
  termsError: {
    fontSize: typography.fontSize.xs,
    color: colors.error,
    marginBottom: 12,
    marginLeft: 24,
  },
  signupButton: {
    marginTop: 16,
    marginBottom: 20,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  loginText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  loginLink: {
    fontSize: typography.fontSize.sm,
    color: colors.primary,
    fontWeight: typography.fontWeight.semibold,
  },
});

export default SignupScreen;
