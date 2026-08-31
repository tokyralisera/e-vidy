import {
  type LoginErrors,
  type LoginFields,
  type LoginFormData,
  type TouchedFields,
} from "../../types/auth";
import Button from "../common/Button";
import Input from "../common/Input";
import { validateLogin } from "../../utils/validation";
import { useState } from "react";

export default function LoginForm() {
  const [form, setForm] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<LoginErrors>({});

  const [touched, setTouched] = useState<TouchedFields<LoginFormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const updatedForm = {
      ...form,
      [name]: value,
    };

    setForm(updatedForm);

    const fieldname = name as LoginFields;

    if (touched[fieldname]) {
      const validationErrors = validateLogin(updatedForm);

      setErrors((previous) => ({
        ...previous,
        [name]: validationErrors[name as keyof LoginFormData] || "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateLogin(form);

    setErrors(validationErrors);

    setTouched({
      email: true,
      password: true,
    });

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log(form);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;

    setTouched((previous) => ({
      ...previous,
      [name]: true,
    }));

    const validationErrors = validateLogin(form);

    setErrors((previous) => ({
      ...previous,
      [name]: validationErrors[name as keyof LoginErrors] || "",
    }));
  };

  const handleReset = () => {
    setForm({
      email: "",
      password: "",
    });
    setTouched({});
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
      <div className="flex flex-col gap-2">
        <Button type="submit" variant="primary">
          Se connecter
        </Button>
        <Button type="button" onClick={handleReset} variant="ghost">
          Effacer tout
        </Button>
      </div>
    </form>
  );
}
