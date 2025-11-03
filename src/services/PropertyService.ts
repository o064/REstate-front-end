import type { CommercialProperty, residentialProperty } from "../types/property";
import type { postComPropertyResponse, postResPropertyResponse } from "../types/Responses";
import request from "../utils/request";


export async function postResProperty(
    property: Omit<residentialProperty, "images">
) {
    try {
        const res = await request<postResPropertyResponse>("/ResidentialProperty/AddResidentialProperty", {
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
        return { isSuccess: false, message: `Error occurred : ${error}` };
    }
}
export async function postComProperty(
    property: Omit<CommercialProperty, "images">
) {
    try {
        const res = await request<postComPropertyResponse>("/CommercialProperty/AddCommercialProperty", {
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
        return { isSuccess: false, message: `Error occurred : ${error}` };
    }
}
