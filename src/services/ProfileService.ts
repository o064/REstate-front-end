import type { getAgentProfileResponse, getUserProfileResponse } from "../types/Responses";
import request from "../utils/request"


export const getUserProfile = async (id: string, userType: "agent" | "user" = "agent") => {
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