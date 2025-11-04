import { FormProvider, useForm } from 'react-hook-form';
import type { ListingFormInputs } from '../types/property';
import BasicInfoStep from '../components/Listing/BasicInfoStep';
import LocationStep from '../components/Listing/LocationStep';
import PricePropertyDetailsStep from '../components/Listing/PricePropertyDetailsStep';
import DescriptionAmenitiesStep from '../components/Listing/DescriptionAmenitiesStep';
import StepDivider from '../components/Listing/StepDivider';
import Button from '../ui/Button';
import Loader from '../ui/Loader';
import { useEditProperty, usePrevData } from '../hooks/useProperty';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import Container from '../ui/Continer';

function EditLisiting() {
  const { data: prevData, isLoading, isError: isErrorPrevData, error } = usePrevData();
  const methods = useForm<Omit<ListingFormInputs, 'images' | 'agentId'>>({
    mode: 'onChange',
  });
  const { propertyId } = useParams<{ propertyId: string }>();
  const { reset } = methods;
  const navigate = useNavigate();
  //  Reset form when previous data is loaded
  useEffect(() => {
    if (prevData && Object.keys(prevData).length > 0) {
      // const { dateListed, agentName, compoundName, ...rest } = prevData;
      console.log('reset', prevData);
      const { compoundName, dateListed, agentName, images, ...rest } = prevData;
      reset({ ...rest, propertyStatus: 0, compoundId: '' } as Omit<
        ListingFormInputs,
        'images' | 'agentId'
      >); // fill all fields
    }
  }, [prevData, reset]);
  // mutuate fun to make put req
  if (!propertyId) {
    return <p>Error: Missing property ID</p>;
  }
  const { mutate: EditProperty, isPending, isError: isErrorMutate } = useEditProperty(propertyId);
  if (isLoading || isPending) return <Loader />;
  if (isErrorPrevData || isErrorMutate) {
    const errorMessage = error instanceof Error ? error.message : 'An error occurred';
    return <p>Error: {errorMessage}</p>;
  }
  function onSubmit(formData: Omit<ListingFormInputs, 'images' | 'agentId'>) {
    EditProperty(formData);
    navigate('/', { replace: true });
  }
  return (
    <Container>
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
          {/* Navigation Buttons */}
          <div className="flex justify-between gap-6 mt-8 pt-6 border-t border-gray-200">
            <Button variant="secondary" fullWidth={false} type="button">
              Cancel
            </Button>
            <Button variant="primary" fullWidth={false} type="submit">
              Confirm Edits
            </Button>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}

export default EditLisiting;
// {
//     "propertyId": "123123",
//     "title": "omar property title",
//     "city": "Cairo",
//     "address": "123 Nile Street",
//     "googleMapsUrl": "https://maps.google.com/example",
//     "propertyType": 0,
//     "propertyPurpose": 0,
//     "propertyStatus": 1,
//     "price": 2000000,
//     "square": 150,
//     "description": "A beautiful residential apartment near the Nile.",
//     "dateListed": "2025-11-03T23:48:49.001Z",
//     "agentName": "Agent Example",
//     "compoundName": "Compound Example",
//     "bedrooms": 3,
//     "bathrooms": 2,
//     "floors": 5,
//     "kitchenType": 1,
//     "amenity": {
//         "hasElectricityLine": true,
//         "hasWaterLine": true,
//         "hasGasLine": true
//     },
//     "images": [
//         "https://placehold.co/600x400/residential1.jpg",
//         "https://placehold.co/600x400/residential2.jpg"
//     ]
// }
