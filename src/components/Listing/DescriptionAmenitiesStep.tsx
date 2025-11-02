import InputField from '../../ui/InputField';
import TextArea from '../../ui/TextArea';
import Step from './Step';
import { useFormContext } from 'react-hook-form';
import { descriptionValidation } from '../../utils/validation';
import ErrorMessage from '../../ui/ErrorMessage';
import Grid from '../../ui/Grid';
import BooleanInputField from '../../ui/BooleanInputFIeld';

function DescriptionAmenitiesStep() {
  const { register } = useFormContext();
  return (
    <Step title="Description & Amenities">
      {/* Property Description  */}
      <InputField id="description" label="Property Description *">
        <TextArea
          {...register('description', descriptionValidation)}
          placeholder="Describe your property, its features, neighborhood, and what makes it special..."
          rows={6}
        />
        <ErrorMessage name="description" />
      </InputField>

      {/* amenity options */}
      <Grid className="grid-cols-3 gap-6">
        <InputField id="amenities.hasElectricityLine" label="has Electricity Line">
          <BooleanInputField
            id="amenities.hasElectricityLine"
            className="w-5 h-5 accent-blue-600"
            {...register('amenities.hasElectricityLine')}
          />
          <ErrorMessage name="amenities.hasElectricityLine" />
        </InputField>
        <InputField id="amenities.hasWaterLine" label="Has Water Line">
          <BooleanInputField
            id="amenities.hasWaterLine"
            className="w-5 h-5 accent-blue-600"
            {...register('amenities.hasWaterLine')}
          />
          <ErrorMessage name="amenities.hasWaterLine" />
        </InputField>
        <InputField id="amenities.hasGasLine" label="Has Gas Line">
          <BooleanInputField
            id="amenities.hasGasLine"
            className="w-5 h-5 accent-blue-600"
            {...register('amenities.hasGasLine')}
          />
          <ErrorMessage name="amenities.hasGasLine" />
        </InputField>
      </Grid>
    </Step>
  );
}

export default DescriptionAmenitiesStep;
