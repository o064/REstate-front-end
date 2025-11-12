import type { ReactNode } from 'react';

<<<<<<< HEAD
type OptionSelectorOptionProps<T extends string> =
  | {
      multiple: false;
      value: T;
      onChange: (type: T) => void;
      icon: ReactNode;
      option: T;
      label?: string;
    }
  | {
      multiple: true;
      value: T[];
      onChange: (type: T[]) => void;
      icon: ReactNode;
      option: T;
      label?: string;
    };
=======
type OptionSelectorOptionProps<T extends string> = {
  value: T;
  onChange: (type: T) => void;
  icon: ReactNode;
  option: T;
  label?: string;
};
>>>>>>> 78f30e4 (finish basic info step)

function OptionSelectorOption<T extends string>({
  onChange,
  value,
  icon,
  option,
<<<<<<< HEAD
<<<<<<< HEAD
  label,
  multiple,
}: OptionSelectorOptionProps<T>) {
  const isSelected = multiple ? value?.includes(option) : value === option;

  function handleChange() {
    if (multiple) {
      const typedValue = Array.isArray(value) ? value : [];
      const typedOnChange = onChange as (type: T[]) => void;

      const newValue = typedValue?.includes(option)
        ? typedValue.filter((v) => v !== option)
        : [...typedValue, option];
      typedOnChange(newValue);
    } else {
      const typedOnChange = onChange as (type: T) => void;
      typedOnChange(option);
    }
  }
=======
=======
  label,
>>>>>>> d66c19d (add loc and price step , delete conact step)
}: OptionSelectorOptionProps<T>) {
  const isSelected = value === option;
>>>>>>> 78f30e4 (finish basic info step)

  return (
    <button
      type="button"
<<<<<<< HEAD
      onClick={handleChange}
=======
      onClick={() => onChange(option)}
>>>>>>> 78f30e4 (finish basic info step)
      className={`p-4 rounded-xl border-2 transition-all duration-200 shadow-sm flex flex-col items-center group ${
        isSelected
          ? 'border-blue-500 bg-blue-50 text-blue-700 font-semibold'
          : 'border-gray-200 bg-white hover:bg-gray-50'
      }`}
    >
      <span className="h-6 w-6 mb-1 transition-colors group-hover:text-blue-600">{icon}</span>
<<<<<<< HEAD
      {/* <span className="text-l  font-semibold capitalize">{option}</span> */}
      {label && <span className="text-l  font-semibold capitalize">{label}</span>}
=======
      <span className="text-l  font-semibold capitalize">{option}</span>
<<<<<<< HEAD
>>>>>>> 78f30e4 (finish basic info step)
=======
      {label && <span className="text-xs font-medium">{label}</span>}
>>>>>>> d66c19d (add loc and price step , delete conact step)
    </button>
  );
}

export default OptionSelectorOption;
