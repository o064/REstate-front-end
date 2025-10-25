import { FormProvider, useForm } from 'react-hook-form';
import BasicInfoStep from '../components/AddListing/BasicInfoStep';
import DescriptionAmenitiesStep from '../components/AddListing/DescriptionAmenitiesStep';
import LocationStep from '../components/AddListing/LocationStep';
import PricePropertyDetailsStep from '../components/AddListing/PricePropertyDetailsStep';
import Button from '../ui/Button';
import { useEffect, useState } from 'react';
import ImageUploadStep from '../components/AddListing/ImageUploadStep';
import { CheckCircle } from 'lucide-react';
import type { ListingFormInputs } from '../types/property';
export const stepFields: Record<number, (keyof ListingFormInputs)[]> = {
  1: ['name', 'purpose', 'type'],
  2: ['address', 'city'],
  3: ['price', 'square', 'bedrooms', 'bathrooms'],
  4: ['description', 'amenities'],
  5: ['images'],
};
function AddListing() {
  const methods = useForm<ListingFormInputs>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      purpose: 'sale',
      type: 'residentail',
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
  const [step, setStep] = useState<number>(1);

  async function nextStep() {
    if (step >= 5) return;
    const isStepValid = await methods.trigger(stepFields[step]);
    if (!isStepValid) return; // stop if validation fails
    setStep((step) => step + 1);
  }
  function prevStep() {
    if (step <= 1) return;
    setStep((step) => step - 1);
  }
  function onSubmit(data: any) {
    console.log(data);
  }
  //  scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  if (step === 6) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Listing Created!</h2>
          <p className="text-gray-600 mb-4">
            Your property has been successfully listed on First Estate.
          </p>
          <p className="text-sm text-gray-500">Redirecting to home page...</p>
        </div>
      </div>
    );
  }

  return (
    <main className=" min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Create New Listing</h1>
            <div className="text-sm text-gray-500">Step {step} of 5</div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 5) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Content */}
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="bg-white rounded-lg shadow-sm p-6 mb-20"
          >
            {/*  information steps */}

            {step == 1 && <BasicInfoStep />}
            {step == 2 && <LocationStep />}
            {step == 3 && <PricePropertyDetailsStep />}
            {step == 4 && <DescriptionAmenitiesStep />}
            {step == 5 && <ImageUploadStep />}
            {/* Navigation Buttons */}
            <div className="flex justify-between gap-6 mt-8 pt-6 border-t border-gray-200">
              {step >= 1 && (
                <Button
                  variant="secondary"
                  fullWidth={false}
                  onClick={prevStep}
                  type="button"
                  disabled={step == 1}
                >
                  Previous
                </Button>
              )}
              {step < 5 ? (
                <Button variant="primary" fullWidth={false} onClick={nextStep} type="button">
                  Next
                </Button>
              ) : (
                <Button variant="primary" fullWidth={false} onClick={nextStep} type="submit">
                  Create Listing
                </Button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </main>
  );
}

export default AddListing;
