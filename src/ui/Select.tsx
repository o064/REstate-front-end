import { type ReactNode } from 'react';

type SelectProps = {
  children: ReactNode;
  disabled?: boolean;
};
function Select({ children, disabled, ...res }: SelectProps) {
  return (
    <select
      disabled={disabled}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      {...res}
    >
      {children}
    </select>
  );
}

export default Select;
