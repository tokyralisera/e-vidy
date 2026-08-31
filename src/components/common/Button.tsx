import type { ReactNode, MouseEvent } from "react";
type ButtonProps = {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary" | "soft" | "ghost";
};

const variantClasses = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
  soft: "btn-soft",
};

export default function Button({
  type = "button",
  children,
  onClick,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
}
