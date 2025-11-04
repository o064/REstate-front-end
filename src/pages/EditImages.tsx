import { FormProvider, useForm } from 'react-hook-form';
import ImageUploadStep from '../components/Listing/ImageUploadStep';
import Button from '../ui/Button';
import Container from '../ui/Continer';
import type { ListingImagesFormInputs } from '../types/property';

function EditImages() {
  const methods = useForm<ListingImagesFormInputs>({
    mode: 'onChange',
    defaultValues: {
      images: [],
    },
  });
  function onSubmit() {}
  return (
    <Container>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="bg-white rounded-lg shadow-sm p-6 mb-20"
        >
          <ImageUploadStep required={true} />
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

export default EditImages;
