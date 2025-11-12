import InputField from '../../ui/InputField';
import TextArea from '../../ui/TextArea';
import Step from './Step';
import { amenityOptions } from '../../constants/options';
import { useFormContext } from 'react-hook-form';
import { descriptionValidation } from '../../utils/validation';
import { ControlledSelector } from '../../ui/ControllerSelector';

function DescriptionAmenitiesStep() {
  const { register, control } = useFormContext();
  return (
    <Step title="Description & Amenities">
      {/* Property Description  */}
      <InputField id="description" label="Property Description *">
        <TextArea
          {...register('description', descriptionValidation)}
          placeholder="Describe your property, its features, neighborhood, and what makes it special..."
          rows={6}
        />
<<<<<<< HEAD
=======
        <ErrorMessage name="description" />
>>>>>>> 1708d8d (modify error msg)
      </InputField>
      {/* amenity options */}
      {/* allow multiple choice */}
      <ControlledSelector
        control={control}
        name="aminty"
        options={amenityOptions}
        title="Amenities & Features"
      />
    </Step>
  );
}

export default DescriptionAmenitiesStep;
