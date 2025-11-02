import Input from '../../ui/Input';
import InputField from '../../ui/InputField';
import Step from './Step';
import Select from '../../ui/Select';
import Option from '../../ui/Option';
import { PropertyPurposeOptions, PropertyTypeOptions } from '../../constants/options';
import { useFormContext } from 'react-hook-form';
import { PropertyNameValidation } from '../../utils/validation';
import { ControlledSelector } from '../../ui/ControllerSelector';
import ErrorMessage from '../../ui/ErrorMessage';

function BasicInfoStep() {
  const { register, control } = useFormContext();
  return (
    <Step title="basic information">
      {/* property name */}
      <InputField id="name" label="Property Name *">
        <Input
          id="name"
          type="text"
          placeholder="e.g., Beautiful 3BR House with Garden"
          {...register('name', PropertyNameValidation)}
        />
        <ErrorMessage name="name" />
      </InputField>
      {/*  Listing Type */}
      <ControlledSelector
        control={control}
        name="type"
        options={PropertyTypeOptions}
        title="Listing Type *"
      />
      {/* Property purpose  */}
      <InputField id="purpose" label="Property Purpose *">
        <Select {...register('purpose', { required: 'Please select a purpose' })}>
          {PropertyPurposeOptions.map((opt) => (
            <Option label={opt.label} value={opt.value} key={opt.value} />
          ))}
        </Select>
        <ErrorMessage name="purpose" />
      </InputField>
    </Step>
  );
}

export default BasicInfoStep;
