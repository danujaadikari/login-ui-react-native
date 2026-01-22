import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import colors from './src/theme/colors';

/**
 * Main App Component
 * Simple navigation between Login and Signup screens
 * In a production app, you would use React Navigation or similar
 */
export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login'); // 'login' or 'signup'

  const navigateToSignup = () => {
    setCurrentScreen('signup');
  };

  const navigateToLogin = () => {
    setCurrentScreen('login');
  };

  return (
    <SafeAreaView style={styles.container}>
      {currentScreen === 'login' ? (
        <LoginScreen onNavigateToSignup={navigateToSignup} />
      ) : (
        <SignupScreen onNavigateToLogin={navigateToLogin} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
