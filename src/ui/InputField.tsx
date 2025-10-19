import type { ReactNode } from 'react';

type InputProps = {
  id: string;
  label: string;
  icon?: ReactNode;
  children: ReactNode;
};
function InputField({ id, label, icon, children }: InputProps) {
  return (
    <div className="text-left">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        {icon && <div className="absolute left-3 top-4 text-gray-400">{icon}</div>}
        {children}
      </div>
    </div>
  );
}

export default InputField;
