import { useMutation } from "@tanstack/react-query";
import type { ListingFormInputs } from "../types/property";
import { postComProperty, postResProperty } from "../services/PropertyService";
import { postImages } from "../services/imagesService";

export function useMutateProperty() {
    return useMutation({
        mutationFn: async (formData: ListingFormInputs) => {
            const { images, ...property } = formData;

            //  post property first
            const propertyRes =
                property.propertyType === 0
                    ? await postResProperty(property)
                    : await postComProperty(property);


            if (!propertyRes.isSuccess) {
                throw new Error(propertyRes.message);
            }
            const propertyId = propertyRes.data?.propertyId
            // Step 2️⃣ upload images after property is created
            if (propertyId && images && images.length > 0) {
                await postImages({
                    propertyId,
                    images,
                });
            }

            return propertyRes;
        },
    });
}
