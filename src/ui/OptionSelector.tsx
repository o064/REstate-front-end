import type { ReactNode } from 'react';
import OptionSelectorOption from './OptionSelectorOption';

type Option<T> = {
  value: T;
  icon: ReactNode;
  label?: string;
};

type OptionSelectorProps<T> = {
  title: string;
  value: T;
  onChange: (type: T) => void;
  options: Option<T>[];
  className?: string;
};

function OptionSelector<T extends string>({
  title,
  value,
  onChange,
  options,
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
      </div>
    </div>
  );
}

export default OptionSelector;
