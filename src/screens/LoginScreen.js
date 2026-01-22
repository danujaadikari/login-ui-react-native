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
 * Login Screen Component
 * HCI Principles Applied:
 * - Clear visual hierarchy (Welcome → Inputs → Button → Link)
 * - Minimal cognitive load (only essential fields)
 * - Consistent spacing and alignment
 * - Clear call-to-action with primary button
 * - Secondary action clearly distinguished as text link
 */
const LoginScreen = ({ onNavigateToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Simple validation for demonstration (HCI: User Feedback)
  const handleLogin = () => {
    // Clear previous errors
    setEmailError('');
    setPasswordError('');

    // Basic validation
    let isValid = true;

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!email.includes('@')) {
      setEmailError('Please enter a valid email');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    }

    if (isValid) {
      // HCI: Provide feedback on successful action
      console.log('Login successful (UI only)');
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
        {/* HCI: Visual Hierarchy - Welcome section draws attention */}
        <View style={styles.header}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>
            Sign in to continue
          </Text>
        </View>

        {/* HCI: Grouped inputs reduce cognitive load */}
        <View style={styles.form}>
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
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            error={passwordError}
          />

          {/* HCI: Primary action is prominent and easy to tap */}
          <PrimaryButton
            title="Login"
            onPress={handleLogin}
            style={styles.loginButton}
          />

          {/* HCI: Secondary action is visually distinct but accessible */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <TouchableOpacity onPress={onNavigateToSignup}>
              <Text style={styles.signupLink}>Sign Up</Text>
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
    paddingHorizontal: 24, // HCI: Comfortable side margins
    paddingVertical: 40,
  },
  header: {
    marginBottom: 40, // HCI: Clear separation between sections
  },
  title: {
    fontSize: 32, // HCI: Large, readable heading
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary, // HCI: Visual hierarchy with color
  },
  form: {
    width: '100%',
  },
  loginButton: {
    marginTop: 8, // HCI: Consistent spacing
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24, // HCI: Clear separation from primary action
  },
  signupText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  signupLink: {
    fontSize: 14,
    color: colors.primary, // HCI: Link color indicates interactivity
    fontWeight: '600',
  },
});

export default LoginScreen;
