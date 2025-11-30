import type { getAgentProfileResponse, getUserProfileResponse } from "../types/Responses";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { getUserProfile } from "../services/ProfileService";
export function formatPrice(value: number): string {
    return new Intl.NumberFormat("en", {
        style: "currency",
        currency: "EGP",
    }).format(value);
}


export function formatDate(dateStr: string): string {
    return new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
    }).format(new Date(dateStr));
}

export function capitalize(str: string) {
    return str
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');;

}
export function destructUserProfile(
  data?: getUserProfileResponse | getAgentProfileResponse
) {
  if (!data || !data.isSuccess || !data.data) {
    return { user: null, listings: [] };
  }

  const profileData = data.data;

  // لو المستخدم وكيل
  if ('agencyName' in profileData) {
    const properties = Array.isArray(profileData.properties) ? profileData.properties : [];
    const userInfo = profileData.user || {};
    const agentInfo = { ...profileData, ...userInfo };

    return {
      user: agentInfo,
      listings: properties,
    };
  }

  // مستخدم عادي
  return {
    user: profileData || null,
    listings: [],
  };
}


