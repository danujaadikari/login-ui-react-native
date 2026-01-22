# Login UI - React Native (Expo)

A clean and modern Login and Sign Up UI built with React Native and Expo, following Human-Computer Interaction (HCI) principles. This is a UI-only project designed as a portfolio piece.

## 🎨 Features

- **Login Screen** - Email and password authentication UI
- **Sign Up Screen** - Full registration form with validation
- **Reusable Components** - InputField and PrimaryButton components
- **Professional Design** - Blue-based color palette with clean aesthetics
- **HCI Principles** - Accessibility, consistency, and user feedback built-in
- **Form Validation** - Client-side validation with error messages

## 🎯 HCI Principles Applied

### 1. **Consistency**
- Centralized color palette in `src/theme/colors.js`
- Consistent spacing, typography, and component styling across screens
- Uniform button and input field designs

### 2. **Minimal Cognitive Load**
- Simple, uncluttered interface
- Only essential fields on each screen
- Clear labels and placeholders

### 3. **Visual Hierarchy**
- Large, bold titles (32pt) for screen headers
- Secondary text in muted colors
- Primary actions prominently displayed with color and size

### 4. **Accessibility**
- High contrast ratios (dark text on light background)
- Minimum touch target size of 50pt
- Readable font sizes (16pt for inputs, 14-16pt for body text)
- Error messages with clear visual feedback

### 5. **User Feedback**
- Form validation with error messages
- Visual state changes (button press feedback)
- Password confirmation to prevent errors

## 📂 Project Structure

```
login-ui-react-native/
├── App.js                          # Main app with screen navigation
├── src/
│   ├── screens/
│   │   ├── LoginScreen.js         # Login UI with email/password
│   │   └── SignupScreen.js        # Signup UI with full form
│   ├── components/
│   │   ├── InputField.js          # Reusable text input component
│   │   └── PrimaryButton.js       # Reusable button component
│   └── theme/
│       └── colors.js              # Centralized color palette
├── package.json
├── app.json
└── babel.config.js
```

## 🎨 Color Palette

```javascript
Primary:       #2563EB  // Trustworthy blue
Background:    #F9FAFB  // Soft white
Text Primary:  #111827  // High contrast black
Text Secondary:#6B7280  // Muted gray
Input Border:  #D1D5DB  // Subtle gray
Button Text:   #FFFFFF  // Pure white
Error:         #DC2626  // Clear red
Success:       #059669  // Positive green
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or newer)
- npm or yarn
- Expo CLI

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/danujaadikari/login-ui-react-native.git
cd login-ui-react-native
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npx expo start
```

4. **Run on your device**
- Scan the QR code with Expo Go app (iOS/Android)
- Press `i` for iOS simulator
- Press `a` for Android emulator
- Press `w` for web browser

## 📱 Screens

### Login Screen
- Welcome message
- Email input field
- Password input field
- Login button
- Sign Up navigation link

### Sign Up Screen
- Header with "Create Account"
- Full Name input
- Email input
- Password input
- Confirm Password input
- Create Account button
- Login navigation link

## 🧩 Components

### InputField Component
```javascript
<InputField
  label="Email"
  placeholder="Enter your email"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
  error={emailError}
/>
```

**Features:**
- Configurable label and placeholder
- Error state with visual feedback
- Support for secure text entry
- Keyboard type customization

### PrimaryButton Component
```javascript
<PrimaryButton
  title="Login"
  onPress={handleLogin}
  loading={false}
  disabled={false}
/>
```

**Features:**
- Loading state with spinner
- Disabled state with visual feedback
- Touch feedback with opacity change
- Customizable styling

## 📝 Form Validation

Both screens include client-side validation:

**Login Screen:**
- Email format validation
- Password length requirement (min 6 characters)

**Sign Up Screen:**
- Full name presence and length
- Email format validation
- Password length requirement
- Password confirmation match

## 🎓 Learning Outcomes

This project demonstrates:
- React Native fundamentals
- Component reusability and props
- State management with hooks
- Form handling and validation
- Styling with StyleSheet
- HCI and UX best practices
- Clean code organization

## 🔄 Future Enhancements

Potential improvements for a production app:
- [ ] React Navigation for screen transitions
- [ ] Backend API integration
- [ ] Secure token storage
- [ ] Password strength indicator
- [ ] Social login options
- [ ] Forgot password flow
- [ ] Biometric authentication
- [ ] Dark mode support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Danuja Adikari**
- GitHub: [@danujaadikari](https://github.com/danujaadikari)

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev/)
- Designed following [Apple's Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- Inspired by modern mobile app design patterns

---

**Note:** This is a UI-only project for portfolio purposes. No backend functionality or API integration is included.