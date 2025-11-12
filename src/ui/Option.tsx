import { capitalize } from '../utils/helper';

type optionProps = {
<<<<<<< HEAD
  value: string | number;
=======
  value: string;
>>>>>>> 78f30e4 (finish basic info step)
  label: string;
};
function Option({ value, label }: optionProps) {
  return (
<<<<<<< HEAD
    <option value={typeof value === 'string' ? value.toLowerCase() : value} className="">
=======
    <option value={value.toLowerCase()} className="">
>>>>>>> 78f30e4 (finish basic info step)
      {capitalize(label)}
    </option>
  );
}

export default Option;
