import { useFormContext } from 'react-hook-form';
import Input from '../../ui/Input';
import InputField from '../../ui/InputField';
import Step from './Step';
import {
  compoundDescriptionValidation,
  CompoundNameValidation,
  compundAddressValidation,
  compundCityValidation,
} from '../../utils/validation';
import ErrorMessage from '../../ui/ErrorMessage';
import TextArea from '../../ui/TextArea';

function CompoundStep() {
  const { register } = useFormContext();

  return (
    <Step title="compound info (Optional)">
      {/* compound name */}
      <InputField id="compound-name" label="compound Name ">
        <Input
          id="compound-name"
          type="text"
          placeholder="e.g., Madenty"
          {...register('compound.name', CompoundNameValidation)}
        />
        <ErrorMessage name="compound.name" />
      </InputField>
      {/* compound city */}
      <InputField id="city" label="compound city ">
        <Input
          id="compound-city"
          type="text"
          placeholder="compound city"
          {...register('compound.city', compundCityValidation)}
        />
        <ErrorMessage name="compound.city" />
      </InputField>
      {/* compound address */}
      <InputField id="address" label="address ">
        <Input
          id="compound-address"
          type="text"
          placeholder="compound address"
          {...register('compound.address', compundAddressValidation)}
        />
        <ErrorMessage name="compound.address" />
      </InputField>
      {/* Property Description  */}
      <InputField id="description" label="Property Description ">
        <TextArea
          {...register('compound.description', compoundDescriptionValidation)}
          placeholder="Describe your compound, its features, neighborhood, and what makes it special..."
          rows={6}
        />
        <ErrorMessage name="compound.description" />
      </InputField>
    </Step>
  );
}

export default CompoundStep;
