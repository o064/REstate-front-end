import type { ReactNode } from 'react';
import OptionSelectorOption from './OptionSelectorOption'; // Assuming OptionSelectorOption is in a separate file

type Option<T> = {
  value: T;
  icon: ReactNode;
  label?: string;
};

type SingleSelectProps<T extends string> = {
  multiple?: false; // default
  title: string;
  value: T;
  onChange: (value: T) => void;
  options: Option<T>[];
  className?: string;
};

type MultiSelectProps<T extends string> = {
  multiple: true; // explicitly multi
  title: string;
  value: T[];
  onChange: (value: T[]) => void;
  options: Option<T>[];
  className?: string;
};

type OptionSelectorProps<T extends string> = SingleSelectProps<T> | MultiSelectProps<T>;

function OptionSelector<T extends string>({
  title,
  value,
  onChange,
  options,
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
      </div>
    </div>
  );
}

export default OptionSelector;
