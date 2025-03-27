export const validateEmail = (value: string): { error: string; isValid: boolean } => {
  const emailRegex = /@/;
  
  if (!value) {
    return { error: 'Email cannot be empty', isValid: false };
  } else if (!emailRegex.test(value)) {
    return { error: 'Email must contain @', isValid: false };
  } else {
    return { error: '', isValid: true };
  }
};
