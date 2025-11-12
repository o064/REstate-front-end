import { MapPinHouse } from 'lucide-react';
import Input from '../../ui/Input';
import InputField from '../../ui/InputField';
import Step from './Step';

function LocationStep() {
  return (
    <Step title="Location Details">
      {/* street  address */}
      <InputField id="adress" label="street address *" icon={<MapPinHouse />}>
        <Input />
      </InputField>
    </Step>
  );
}

export default LocationStep;
