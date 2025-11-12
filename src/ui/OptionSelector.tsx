import type { ReactNode } from 'react';
<<<<<<< HEAD
import OptionSelectorOption from './OptionSelectorOption'; // Assuming OptionSelectorOption is in a separate file
=======
import OptionSelectorOption from './OptionSelectorOption';
>>>>>>> 78f30e4 (finish basic info step)

type Option<T> = {
  value: T;
  icon: ReactNode;
  label?: string;
};

<<<<<<< HEAD
type SingleSelectProps<T extends string> = {
  multiple?: false; // default
  title: string;
  value: T;
  onChange: (value: T) => void;
=======
type OptionSelectorProps<T> = {
  title: string;
  value: T;
  onChange: (type: T) => void;
>>>>>>> 78f30e4 (finish basic info step)
  options: Option<T>[];
  className?: string;
};

<<<<<<< HEAD
type MultiSelectProps<T extends string> = {
  multiple: true; // explicitly multi
  title: string;
  value: T[];
  onChange: (value: T[]) => void;
  options: Option<T>[];
  className?: string;
};

type OptionSelectorProps<T extends string> = SingleSelectProps<T> | MultiSelectProps<T>;

=======
>>>>>>> 78f30e4 (finish basic info step)
function OptionSelector<T extends string>({
  title,
  value,
  onChange,
  options,
<<<<<<< HEAD
  multiple = false,
  className = '',
}: OptionSelectorProps<T>) {
  return (
    <div className={`mb-6 pb-4 ${className}`}>
      <label className="block text-base font-semibold text-gray-700 mb-3">{title}</label>
      <div className="grid grid-cols-2 gap-3">
        {options.map((opt) => {
          if (multiple) {
            // Type casting to MultiSelectProps<T> to satisfy OptionSelectorOptionProps<T>
            const multiProps = { value, onChange } as Pick<
              MultiSelectProps<T>,
              'value' | 'onChange'
            >;
            return (
              <OptionSelectorOption
                key={opt.value}
                multiple={true}
                icon={opt.icon}
                option={opt.value}
                value={multiProps.value}
                onChange={multiProps.onChange}
                label={opt.label}
              />
            );
          } else {
            // Type casting to SingleSelectProps<T> to satisfy OptionSelectorOptionProps<T>
            const singleProps = { value, onChange } as Pick<
              SingleSelectProps<T>,
              'value' | 'onChange'
            >;
            return (
              <OptionSelectorOption
                key={opt.value}
                multiple={false} // Explicitly set to false
                icon={opt.icon}
                option={opt.value}
                value={singleProps.value}
                onChange={singleProps.onChange}
                label={opt.label}
              />
            );
          }
        })}
=======
  className = '',
}: OptionSelectorProps<T>) {
  return (
    <div className={`mb-6 border-b border-gray-300 pb-4 ${className}`}>
      <label className="block text-base font-semibold text-gray-700 mb-3">{title}</label>
      <div className="grid grid-cols-2 gap-3">
        {options.map((opt) => (
          <OptionSelectorOption
            key={opt.value}
            icon={opt.icon}
            option={opt.value}
            onChange={onChange}
            value={value}
          />
        ))}
>>>>>>> 78f30e4 (finish basic info step)
      </div>
    </div>
  );
}

export default OptionSelector;
