import React from "react";

export type InputFieldProps = {
  label: string;
  type: string;
  name: string;
  id: string;
  value?: string | number;
  placeholder?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  id,
  placeholder,
  required,
  onChange,
  value,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputField;
