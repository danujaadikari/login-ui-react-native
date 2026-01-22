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
import colors from '../theme/colors';

/**
 * Sign Up Screen Component
 * HCI Principles Applied:
 * - Progressive disclosure (fields in logical order)
 * - Clear visual hierarchy (Create Account → Inputs → Button → Link)
 * - Consistent layout with Login screen (familiarity)
 * - Immediate validation feedback
 * - Password confirmation prevents user errors
 */
const SignupScreen = ({ onNavigateToLogin }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // Comprehensive validation for better UX (HCI: Error Prevention)
  const handleSignup = () => {
    // Clear all previous errors
    setFullNameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    let isValid = true;

    // Validate full name
    if (!fullName.trim()) {
      setFullNameError('Full name is required');
      isValid = false;
    } else if (fullName.trim().length < 2) {
      setFullNameError('Please enter your full name');
      isValid = false;
    }

    // Validate email
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!email.includes('@') || !email.includes('.')) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }

    // Validate password
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    }

    // Validate password confirmation
    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password');
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }

    if (isValid) {
      // HCI: Provide feedback on successful action
      console.log('Account created successfully (UI only)');
      // In a real app, this would call an API
    }
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
        {/* HCI: Visual Hierarchy - Header establishes context */}
        <View style={styles.header}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>
            Sign up to get started
          </Text>
        </View>

        {/* HCI: Logical field order (name → email → password) */}
        <View style={styles.form}>
          <InputField
            label="Full Name"
            placeholder="Enter your full name"
            value={fullName}
            onChangeText={setFullName}
            autoCapitalize="words"
            error={fullNameError}
          />

          <InputField
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            error={emailError}
          />

          <InputField
            label="Password"
            placeholder="Create a password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            error={passwordError}
          />

          <InputField
            label="Confirm Password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            error={confirmPasswordError}
          />

          {/* HCI: Clear primary action */}
          <PrimaryButton
            title="Create Account"
            onPress={handleSignup}
            style={styles.signupButton}
          />

          {/* HCI: Easy navigation to alternative action */}
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity onPress={onNavigateToLogin}>
              <Text style={styles.loginLink}>Login</Text>
            </TouchableOpacity>
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
    justifyContent: 'center',
    paddingHorizontal: 24, // HCI: Consistent with Login screen
    paddingVertical: 40,
  },
  header: {
    marginBottom: 40, // HCI: Consistent spacing
  },
  title: {
    fontSize: 32, // HCI: Consistent typography
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary, // HCI: Visual hierarchy
  },
  form: {
    width: '100%',
  },
  signupButton: {
    marginTop: 8, // HCI: Consistent spacing
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24, // HCI: Separated from primary action
  },
  loginText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  loginLink: {
    fontSize: 14,
    color: colors.primary, // HCI: Consistent link styling
    fontWeight: '600',
  },
});

export default SignupScreen;
