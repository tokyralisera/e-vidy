import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import {
  type SignupFormData,
  type SignupErrors,
  type SignupFields,
  type TouchedFields,
} from "../../types/auth";
import { validateSignup } from "../../utils/validation";

export default function SignupForm() {
  const [form, setForm] = useState<SignupFormData>({
    identifiant: "",
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<SignupErrors>({});

  const [touched, setTouched] = useState<TouchedFields<SignupFormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const updatedForm = {
      ...form,
      [name]: value,
    };

    setForm(updatedForm);

    const fieldname = name as SignupFields;

    if (touched[fieldname]) {
      const validationErrors = validateSignup(updatedForm);

      setErrors((previous) => ({
        ...previous,
        [name]: validationErrors[name as keyof SignupFormData] || "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateSignup(form);

    setErrors(validationErrors);

    setTouched({
      identifiant: true,
      fullname: true,
      email: true,
      password: true,
      confirmPassword: true,
    });

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log("Inscription réussie : ", form);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;

    setTouched((previous) => ({
      ...previous,
      [name]: true,
    }));

    const validationErrors = validateSignup(form);

    setErrors((previous) => ({
      ...previous,
      [name]: validationErrors[name as keyof SignupErrors] || "",
    }));
  };

  const handleReset = () => {
    setForm({
      identifiant: "",
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setTouched({});
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        name="identifiant"
        placeholder="Veuillez insérer votre nom d'utilisateur"
        label="Identifiant"
        value={form.identifiant}
        onBlur={handleBlur}
        onChange={handleChange}
        error={touched.identifiant ? errors.identifiant : ""}
      />
      <Input
        type="text"
        name="fullname"
        placeholder="Veuillez insérer votre nom complet"
        label="Nom et/ou prénom"
        value={form.fullname}
        onBlur={handleBlur}
        onChange={handleChange}
        error={touched.fullname ? errors.fullname : ""}
      />
      <Input
        type="email"
        name="email"
        placeholder="votre e-mail ici"
        label="Adresse e-mail"
        value={form.email}
        onBlur={handleBlur}
        onChange={handleChange}
        error={touched.email ? errors.email : ""}
      />
      <Input
        name="password"
        type="password"
        placeholder="Mot de passe"
        label="Mot de passe"
        value={form.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password ? errors.password : ""}
      />
      <Input
        name="confirmPassword"
        type="password"
        placeholder="Veuillez confirmer le mdp"
        label="Confirmation du mot de passe"
        value={form.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.confirmPassword ? errors.confirmPassword : ""}
      />
      <div className="flex flex-col gap-2">
        <Button type="submit" variant="primary">
          Créer mon compte
        </Button>
        <Button type="button" onClick={handleReset} variant="ghost">
          Effacer tout
        </Button>
      </div>
    </form>
  );
}
