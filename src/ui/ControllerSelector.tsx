import { Controller, type Control, type Path } from 'react-hook-form';
import TypeSelector from './TypeSelector';

type ControlledSelectorProps<T extends Record<string, any>> = {
  name: Path<T>;
  control: Control<T>;
  rules?: object;
  title: string;
  options: { value: string; icon: React.ReactNode; label?: string }[];
};

export function ControlledSelector<T extends Record<string, any>>({
  name,
  control,
  rules,
  title,
  options,
}: ControlledSelectorProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <TypeSelector
          title={title}
          value={field.value}
          onChange={field.onChange}
          options={options}
        />
      )}
    />
  );
}
