import type { CommercialProperty, residentialProperty } from "../types/property";
import type { getCommercialPropertyById, getResidentialPropertyById, postComPropertyResponse, postResPropertyResponse } from "../types/Responses";
import request from "../utils/request";


export async function postProperty(
    propertyType: 0 | 1,
    property: Omit<residentialProperty | CommercialProperty, "images">
) {
    try {
        const endpoint =
            propertyType === 0
                ? "/ResidentialProperty/AddResidentialProperty"
                : "/CommercialProperty/AddCommercialProperty";
        const res = propertyType ? await request<postResPropertyResponse>(endpoint, {
            method: "POST",
            body: JSON.stringify(property),
        }) : await request<postComPropertyResponse>(endpoint, {
            method: "POST",
            body: JSON.stringify(property),
        });

        if (res.isSuccess) {
            return {
                isSuccess: true,
                message: res.message,
                data: res.data,
            };
        }
        return { isSuccess: false, message: "Failed", data: "" } as const;
    } catch (error) {
        return { isSuccess: false, message: `Error occurred: ${error}` };
    }
}
export async function putProperty(
    id: string | undefined,
    property: Omit<residentialProperty | CommercialProperty, 'images' | 'agentId'>
) {
    try {
        const endpoint =
            property.propertyType === 0
                ? `/ResidentialProperty/${id}`
                : `/CommercialProperty/${id}`;
        const res = property.propertyType ? await request<postResPropertyResponse>(endpoint, {
            method: "PUT",
            body: JSON.stringify(property),
        }) : await request<postComPropertyResponse>(endpoint, {
            method: "PUT",
            body: JSON.stringify(property),
        });
        if (res.isSuccess) {
            return {
                isSuccess: true,
                message: res.message,
                data: res.data,
            };
        }
        return { isSuccess: false, message: "Failed", data: "" } as const;
    } catch (error) {
        return { isSuccess: false, message: `Error occurred: ${error}` };
    }
}

export async function getPropertyById(id: string, type: 0 | 1) {
    try {
        const url =
            type === 0
                ? `/ResidentialProperty/${id}`
                : `/CommercialProperty/${id}`;

        // Dynamically pick the correct response type
        const res =
            type === 0
                ? await request<getResidentialPropertyById>(url, { method: "GET" })
                : await request<getCommercialPropertyById>(url, { method: "GET" });

        if (res.isSuccess) {
            return {
                isSuccess: true,
                message: res.message,
                data: res.data,
            };
        }

        return { isSuccess: false, message: "Failed", data: "" } as const;
    } catch (error) {
        return { isSuccess: false, message: `Error occurred: ${error}` };
    }
}
