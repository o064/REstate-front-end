import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ListingFormInputs } from "../types/property";
import { postImages } from "../services/imagesService";
import { delPropertyById, getPropertyById, postProperty, putProperty } from "../services/PropertyService";
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

            if (propertyId && images && images.length > 0) {
                await postImages({
                    propertyId,
                    images,
                });
            }
            console.log(propertyRes);
            return propertyRes;
        },
    });
}

export function useEditProperty() {
    return useMutation({
        mutationFn: async ({ formData, propertyId }: { formData: Omit<ListingFormInputs, 'images' | 'agentId'>, propertyId: string }) => {
            const property = formData;
            //  post property first
            const propertyRes = await putProperty(propertyId, property)
            if (!propertyRes.isSuccess) {
                throw new Error(propertyRes.message);
            }
            return propertyRes;
        },
    });
}
export function useDeleteProperty() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ propertyId, propertyType }: { propertyId: string, propertyType: number }) => {
            const propertyRes = await delPropertyById(propertyId, propertyType)
            if (!propertyRes.isSuccess) {
                throw new Error(propertyRes.message);
            }
            return propertyRes;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["userProfile"] });
        },
    });
}

export function usePrevData() {
    const { propertyId, propertyType } = useParams<{ propertyId: string; propertyType: string }>();
    const numericType = propertyType === "residential" ? 0 : 1;

    const query = useQuery({
        queryKey: ["property", propertyId, numericType],
        queryFn: () => getPropertyById(propertyId!, numericType),
        enabled: !!propertyId && !!propertyType,
        staleTime: Infinity,
    });

    const { data: queryData, isLoading, isError, error } = query;

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
