import { useMutation, useQuery } from "@tanstack/react-query";
import type { ListingFormInputs } from "../types/property";
import { postImages } from "../services/imagesService";
import { getPropertyById, postProperty, putProperty } from "../services/PropertyService";
import { useParams } from "react-router";
import { useMemo } from "react";


export function useAddProperty() {
    return useMutation({
        mutationFn: async (formData: ListingFormInputs) => {
            const { images, ...property } = formData;

            //  post property first
            const propertyRes =
                property.propertyType === 0
                    ? await postProperty(0, property)
                    : await postProperty(1, property);
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

export function useEditProperty(id: string) {
    return useMutation({
        mutationFn: async (formData: Omit<ListingFormInputs, 'images' | 'agentId'>) => {
            const property = formData;
            //  post property first
            const propertyRes = await putProperty(id, property)
            if (!propertyRes.isSuccess) {
                throw new Error(propertyRes.message);
            }
            return propertyRes;
        },
    });
}

export function usePrevData() {
    const { id: propertyId, type: propertyType } = useParams<{ id: string; type: string }>();
    const numericType = propertyType === "residential" ? 0 : 1;

    const query = useQuery({
        queryKey: ["property", propertyId, numericType],
        queryFn: () => getPropertyById(propertyId!, numericType),
        enabled: !!propertyId && !!propertyType,
        staleTime: Infinity,
    });

    const { data: queryData, isLoading, isError, error } = query;

    // We memoize the final data object.
    // This hook will now return the *same object reference* on re-renders
    // as long as queryData and agentId haven't changed.
    const memoizedData = useMemo(() => {
        if (queryData?.isSuccess && queryData.data) {
            return { ...queryData.data };
        }
        return undefined;
    }, [queryData]); // Dependencies are the source data

    return {
        data: memoizedData, // Return the stable, memoized data
        isLoading,
        isError,
        error,
    };
}