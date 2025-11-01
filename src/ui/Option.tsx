import { capitalize } from '../utils/helper';

type optionProps = {
  value: string | number;
  label: string;
};
function Option({ value, label }: optionProps) {
  return (
    <option value={typeof value === 'string' ? value.toLowerCase() : value} className="">
      {capitalize(label)}
    </option>
  );
}

export default Option;
