import { capitalize } from '../utils/helper';

type optionProps = {
  value: string;
  label: string;
};
function Option({ value, label }: optionProps) {
  return (
    <option value={value.toLowerCase()} className="">
      {capitalize(label)}
    </option>
  );
}

export default Option;
