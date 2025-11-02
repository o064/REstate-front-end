import { FormProvider, useForm } from 'react-hook-form';
import type { ListingFormInputs } from '../types/property';
import BasicInfoStep from '../components/Listing/BasicInfoStep';
import LocationStep from '../components/Listing/LocationStep';
import PricePropertyDetailsStep from '../components/Listing/PricePropertyDetailsStep';
import DescriptionAmenitiesStep from '../components/Listing/DescriptionAmenitiesStep';
import ImageUploadStep from '../components/Listing/ImageUploadStep';

import StepDivider from '../components/Listing/StepDivider';
import Button from '../ui/Button';

function EditLisiting() {
  const methods = useForm<ListingFormInputs>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      purpose: 'sale',
      type: 'residential',
      address: '',
      city: '',
      price: 0,
      square: 0,
      bedrooms: 0,
      bathrooms: 1,
      description: '',
      amenities: [],
      images: [],
    },
  });
  function onSubmit(data: any) {
    console.log(data);
  }
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="bg-white rounded-lg shadow-sm p-6 mb-20"
        >
          {/*  information steps */}
          <BasicInfoStep />
          <StepDivider />
          {/* Location */}
          <LocationStep />
          <StepDivider />

          {/* Price */}
          <PricePropertyDetailsStep />
          <StepDivider />
          {/* Description */}
          <DescriptionAmenitiesStep />
          <StepDivider />
          {/* Image */}
          <ImageUploadStep />
          {/* Navigation Buttons */}
          <div className="flex justify-between gap-6 mt-8 pt-6 border-t border-gray-200">
            <Button variant="secondary" fullWidth={false} type="button">
              Cancel
            </Button>
            <Button variant="primary" fullWidth={false} type="button">
              Confirm Edits
            </Button>
          </div>
        </form>
      </FormProvider>
    </main>
  );
}

export default EditLisiting;
