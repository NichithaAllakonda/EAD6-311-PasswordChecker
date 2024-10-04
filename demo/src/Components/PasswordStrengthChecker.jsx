import React, { useState } from 'react';
function PasswordStrengthChecker() {
 const [password, setPassword] = useState('');
 const [strength, setStrength] = useState('');
 const evaluatePasswordStrength = (pwd) => {
 const hasUpperCase = /[A-Z]/.test(pwd);
 const hasLowerCase = /[a-z]/.test(pwd);
 const hasDigit = /\d/.test(pwd);
 const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);
 if (pwd.length >= 12 && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar) {
 return 'Strong';
 } else if (pwd.length >= 8 && hasUpperCase && hasLowerCase && (hasDigit || hasSpecialChar)) {
 return 'Medium';
 } else if (pwd.length > 0 && (hasUpperCase || hasLowerCase || hasDigit || hasSpecialChar)) {
 return 'Weak';
 } else {
 return 'Very Weak';
 }
 };
 // Handle password input change
 const handlePasswordChange = (event) => {
 const newPassword = event.target.value;
 setPassword(newPassword);
 setStrength(evaluatePasswordStrength(newPassword));
 };
 return (
 <div>
 <h2>Password Strength Checker</h2>
 <input
 type="password"
 placeholder="Enter your password"
 value={password}
 onChange={handlePasswordChange}
 style={{ padding: '10px', marginBottom: '10px', width: '100%' }}
 />
 <p>Password Strength: <strong>{strength}</strong></p>
 </div>
 )
}
export default PasswordStrengthChecker;