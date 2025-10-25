import { MapPinHouse } from 'lucide-react';
import Input from '../../ui/Input';
import InputField from '../../ui/InputField';
import Step from './Step';
import { useFormContext } from 'react-hook-form';
import { addressValidation, cityValidation } from '../../utils/validation';
import ErrorMessage from '../../ui/ErrorMessage';

function LocationStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
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
        {errors.address && <ErrorMessage>{errors.address.message}</ErrorMessage>}
      </InputField>
      {/* city */}
      <InputField id="city" label="city *">
        <Input id="city" type="text" placeholder="city" {...register('city', cityValidation)} />
        {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
      </InputField>
    </Step>
  );
}

export default LocationStep;
