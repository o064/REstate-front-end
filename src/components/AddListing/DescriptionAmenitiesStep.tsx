import { useState } from 'react';
import InputField from '../../ui/InputField';
import OptionSelector from '../../ui/OptionSelector';
import TextArea from '../../ui/TextArea';
import Step from './Step';
import { amenityOptions } from '../../constants/options';

function DescriptionAmenitiesStep() {
  const [amenity, setAmenity] = useState('parking');
  return (
    <Step title="Description & Amenities">
      {/* Property Description  */}
      <InputField id="description" label="Property Description *">
        <TextArea
          placeholder="Describe your property, its features, neighborhood, and what makes it special..."
          rows={6}
        />
      </InputField>
      {/* amenity options */}
      {/* allow multiple choice */}
      <OptionSelector
        onChange={setAmenity}
        value={amenity}
        options={amenityOptions}
        title="Listing Type *"
      />
    </Step>
  );
}

export default DescriptionAmenitiesStep;
