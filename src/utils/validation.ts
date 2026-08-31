import type {
  LoginFormData,
  LoginErrors,
  SignupFormData,
  SignupErrors,
} from "../types/auth";

export function validateLogin(data: LoginFormData): LoginErrors {
  const errors: LoginErrors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const { email, password } = data;

  if (!email) {
    errors.email = "Adresse e-mail obligatoire";
  } else if (!emailRegex.test(email)) {
    errors.email = "Veuillez insérer une adresse e-mail valide";
  }

  if (!password) {
    errors.password = "Veuillez saisir votre mdp";
  } else if (password.length < 8) {
    errors.password = "Le mdp doit contenir plus de 8 caractères";
  }

  return errors;
}

export function validateSignup(data: SignupFormData): SignupErrors {
  const errors: SignupErrors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const { identifiant, email, password, confirmPassword } = data;

  if (!identifiant.trim()) {
    errors.identifiant = "Vous devez entrer un identifiant";
  } else if (identifiant.length < 3) {
    errors.identifiant = "L'identifiant doit contenir au moins 3 caractères";
  }

  if (!email.trim()) {
    errors.email = "Adresse e-mail obligatoire";
  } else if (!emailRegex.test(email)) {
    errors.email = "Veuillez insérer une adresse e-mail valide";
  }

  if (!password.trim()) {
    errors.password = "Veuillez saisir votre mdp";
  } else if (password.length < 8) {
    errors.password = "Le mdp doit contenir plus de 8 caractères";
  }

  if (!confirmPassword.trim()) {
    errors.confirmPassword = "Veuillez confirmer votre mot de passe";
  } else if (confirmPassword !== password) {
    errors.confirmPassword = "Veuillez vérifier et confirmer le mot de passe";
  }

  return errors;
}
