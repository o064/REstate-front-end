import { type ReactNode } from 'react';

type SelectProps = {
  children: ReactNode;
};
function Select({ children, ...res }: SelectProps) {
  return (
    <select
      {...res}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    >
      {children}
    </select>
  );
}

export default Select;
