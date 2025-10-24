import type { ReactNode } from 'react';

type OptionSelectorOptionProps<T extends string> = {
  value: T;
  onChange: (type: T) => void;
  icon: ReactNode;
  option: T;
  label?: string;
};

function OptionSelectorOption<T extends string>({
  onChange,
  value,
  icon,
  option,
  label,
}: OptionSelectorOptionProps<T>) {
  const isSelected = value === option;

  return (
    <button
      type="button"
      onClick={() => onChange(option)}
      className={`p-4 rounded-xl border-2 transition-all duration-200 shadow-sm flex flex-col items-center group ${
        isSelected
          ? 'border-blue-500 bg-blue-50 text-blue-700 font-semibold'
          : 'border-gray-200 bg-white hover:bg-gray-50'
      }`}
    >
      <span className="h-6 w-6 mb-1 transition-colors group-hover:text-blue-600">{icon}</span>
      <span className="text-l  font-semibold capitalize">{option}</span>
      {label && <span className="text-xs font-medium">{label}</span>}
    </button>
  );
}

export default OptionSelectorOption;
