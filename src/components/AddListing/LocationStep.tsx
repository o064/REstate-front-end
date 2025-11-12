import { MapPinHouse } from 'lucide-react';
import Input from '../../ui/Input';
import InputField from '../../ui/InputField';
import Step from './Step';
import { useFormContext } from 'react-hook-form';
import { addressValidation, cityValidation } from '../../utils/validation';

function LocationStep() {
  const { register } = useFormContext();
  return (
    <Step title="Location Details">
      {/* street  address */}
      <InputField id="adress" label="street address *" icon={<MapPinHouse />}>
        <Input
          {...register('address', addressValidation)}
          className="pl-10 "
          id="adress"
          type="text"
          placeholder="enter the property address e.g., 15 El Tahrir St, Cairo, Egypt"
        />
<<<<<<< HEAD
=======
        <ErrorMessage name="address" />
>>>>>>> 1708d8d (modify error msg)
      </InputField>
      {/* city */}
      <InputField id="city" label="city *">
        <Input id="city" type="text" placeholder="city" {...register('city', cityValidation)} />
<<<<<<< HEAD
=======
        <ErrorMessage name="city" />
>>>>>>> 1708d8d (modify error msg)
      </InputField>
    </Step>
  );
}

export default LocationStep;
