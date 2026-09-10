/**
 * Secure User Authentication Form
 * Main entry point for form initialization and validation
 * 
 * This module initializes the LoginValidator component
 * and manages the application lifecycle.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize the LoginValidator with form selectors
  new LoginValidator({
    usernameInput: '.username',
    passwordInput: '.password',
    eyeButton: '.eye',
    submitBtn: '.btn',
    hintText: '.hint-text',
  });

  console.log('✅ Login form initialized successfully');
});
