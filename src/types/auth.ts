export type LoginFormData = {
  email: string;
  password: string;
};

export type SignupFormData = {
  identifiant: string;
  fullname?: string | "";
  email: string;
  password: string;
  confirmPassword: string;
};

export type FormErrors<T> = Partial<Record<keyof T, string>>;

export type LoginErrors = FormErrors<LoginFormData>;

// générique pour touched et setTouched des loginForm et SignUpForm
export type TouchedFields<T> = Partial<Record<keyof T, boolean>>;

export type LoginFields = keyof LoginFormData;

export type SignupErrors = FormErrors<SignupFormData>;

export type SignupFields = keyof SignupFormData;
