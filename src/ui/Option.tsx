import { capitalize } from '../utils/helper';

type OptionProps = {
  value: string | number;
  label: string;
};

function Option({ value, label }: OptionProps) {
  const stringValue = typeof value === 'string' ? value.toLowerCase() : value.toString();

  return (
    <option value={stringValue} className="">
      {capitalize(label)}
    </option>
  );
}

export default Option;
