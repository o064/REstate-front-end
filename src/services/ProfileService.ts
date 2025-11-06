import type { getAgentProfileResponse, getUser, getUserProfileResponse } from "../types/Responses";
import request from "../utils/request"


export const getUserProfile = async (id: string, userType: "agent" | "customer" = "agent") => {
    const res = userType === "agent" ? await request<getAgentProfileResponse>(`/Agent/${id}`, {
        method: "GET"
    }) : await request<getUserProfileResponse>(`/User/${id}`, {
        method: "GET"
    });
    if (!res.isSuccess) {
        throw new Error(res.message || "Failed to fetch compounds");
    }

    return res;

}
export const getUserById = async (id: string) => {
    const res = await request<getUser>(`/User/${id}`, {
        method: "GET"
    })
    if (!res.isSuccess) {
        throw new Error(res.message || "Failed to fetch compounds");
    }

    return res;

}