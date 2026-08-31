import type { ChangeEvent, FocusEvent, HTMLInputTypeAttribute } from "react";

type InputProps = {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  label?: string;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  value: string;
  error?: string;
};

export default function Input({
  type = "text",
  placeholder = "",
  label,
  name,
  onChange,
  onBlur,
  value,
  error,
}: InputProps) {
  return (
    <div className="form-control w-full">
      <label htmlFor={name} className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        className={`input input-bordered w-full ${error ? "input-error" : ""}`}
      />
      {error && <p className="text-error text-sm mt-1">{error}</p>}
    </div>
  );
}
