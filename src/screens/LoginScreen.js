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
import colors from '../theme/colors';
import typography from '../theme/typography';

/**
 * PREMIUM LOGIN SCREEN - 2025 Design
 * 
 * Features:
 * ✓ Social authentication options (Google, GitHub)
 * ✓ Remember Me functionality
 * ✓ Forgot Password link
 * ✓ Real-time validation
 * ✓ Modern card-based layout
 * ✓ Smooth animations
 * ✓ Mobile-first responsive design
 */
const LoginScreen = ({ onNavigateToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);

  // Email validation with regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Real-time email validation (HCI: Immediate Feedback)
  const handleEmailChange = (text) => {
    setEmail(text);
    if (text && !validateEmail(text)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  // Form submission with validation
  const handleLogin = async () => {
    // Clear previous errors
    setEmailError('');
    setPasswordError('');

    let isValid = true;

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

    if (isValid) {
      setLoading(true);
      // Simulate API call (UI only)
      setTimeout(() => {
        setLoading(false);
        console.log('✅ Login successful (UI only)');
        console.log('Remember Me:', rememberMe);
      }, 1500);
    }
  };

  // Social auth handlers (UI only)
  const handleGoogleLogin = () => {
    console.log('🔵 Google OAuth (UI only)');
  };

  const handleGitHubLogin = () => {
    console.log('⚫ GitHub OAuth (UI only)');
  };

  const handleForgotPassword = () => {
    console.log('🔑 Forgot Password flow (UI only)');
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
        {/* Premium Header Section */}
        <View style={styles.header}>
          <Text style={styles.greeting}>👋</Text>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>
            Sign in to continue to your account
          </Text>
        </View>

        {/* Premium Card Container */}
        <View style={styles.card}>
          {/* Social Authentication - HCI: Reduce Friction */}
          <View style={styles.socialSection}>
            <SocialButton provider="google" onPress={handleGoogleLogin} />
            <SocialButton provider="github" onPress={handleGitHubLogin} />
          </View>

          {/* Divider with Text */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or continue with email</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Email & Password Form */}
          <View style={styles.form}>
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
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              error={passwordError}
            />

            {/* Remember Me & Forgot Password Row */}
            <View style={styles.optionsRow}>
              <Checkbox
                checked={rememberMe}
                onPress={() => setRememberMe(!rememberMe)}
                label="Remember me"
              />
              
              <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            {/* Login Button */}
            <PrimaryButton
              title="Sign In"
              onPress={handleLogin}
              loading={loading}
              style={styles.loginButton}
            />

            {/* Sign Up Link */}
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account? </Text>
              <TouchableOpacity onPress={onNavigateToSignup}>
                <Text style={styles.signupLink}>Create Account</Text>
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
    // Premium card shadow
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
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  forgotText: {
    fontSize: typography.fontSize.sm,
    color: colors.primary,
    fontWeight: typography.fontWeight.semibold,
  },
  loginButton: {
    marginTop: 8,
    marginBottom: 20,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  signupText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  signupLink: {
    fontSize: typography.fontSize.sm,
    color: colors.primary,
    fontWeight: typography.fontWeight.semibold,
  },
});

export default LoginScreen;
