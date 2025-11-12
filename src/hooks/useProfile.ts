import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { getUserProfile } from "../services/ProfileService";
import type { getAgentProfileResponse, getUserProfileResponse } from "../types/Responses";

export function useUserProfile() {
    const stored = Cookies.get("Authentication");
    if (!stored) throw new Error("User not found in cookies");

    const { userId } = JSON.parse(stored);

    return useQuery<getAgentProfileResponse | getUserProfileResponse>({
        queryKey: ["userProfile", userId],
        queryFn: () => getUserProfile(userId),
    });
}
