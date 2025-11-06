import type { CommercialProperty, residentialProperty } from "../types/property";
import type { deletePropertyResponse, getCommercialPropertyById, getResidentialPropertyById, postComPropertyResponse, postResPropertyResponse } from "../types/Responses";
import request from "../utils/request";


export async function postProperty(
    propertyType: 0 | 1,
    property: Omit<residentialProperty | CommercialProperty, "images">
) {
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

    if (!res.isSuccess) {
        throw new Error(res.message || "Failed to fetch compounds");
    }
    return res;
}

export async function putProperty(
    id: string,
    property: Omit<residentialProperty | CommercialProperty, 'images' | 'agentId'>
) {
    const endpoint =
        property.propertyType === 0
            ? `/ResidentialProperty/${id}`
            : `/CommercialProperty/${id}`;
    const res = property.propertyType == 0 ? await request<postResPropertyResponse>(endpoint, {
        method: "PUT",
        body: JSON.stringify(property),
    }) : await request<postComPropertyResponse>(endpoint, {
        method: "PUT",
        body: JSON.stringify(property),
    });
    if (!res.isSuccess) {
        throw new Error(res.message || "Failed to fetch compounds");
    }
    return res;


}
export async function delPropertyById(
    id: string,
    propertyType: number
) {
    const res = propertyType ? await request<deletePropertyResponse>(`/ResidentialProperty/${id}`, {
        method: "DELETE",
    }) : await request<deletePropertyResponse>(`/CommercialProperty/${id}`, {
        method: "DELETE",
    });
    if (!res.isSuccess) {
        throw new Error(res.message || "Failed to fetch compounds");
    }
    return res;
}

export async function getPropertyById(id: string, type: 0 | 1) {
    const url =
        type === 0
            ? `/ResidentialProperty/${id}`
            : `/CommercialProperty/${id}`;
    // Dynamically pick the correct response type
    const res =
        type === 0
            ? await request<getResidentialPropertyById>(url, { method: "GET" })
            : await request<getCommercialPropertyById>(url, { method: "GET" });

    if (!res.isSuccess) {
        throw new Error(res.message || "Failed to fetch compounds");
    }
    return res;

}
