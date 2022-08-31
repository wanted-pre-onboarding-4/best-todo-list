export function UserValidation(email, password) {
  if (email.includes('@') && password.length > 7) {
    return false;
  } else return true;
}
