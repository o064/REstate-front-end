import Cookies from "js-cookie";

const API_URL = "https://re-estate.runasp.net";

export default async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  // get token from cookies
  const token = Cookies.get("Authentication");
  const jwt = token ? JSON.parse(token).jwtToken : null;

  const headers: Record<any, any> = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (jwt) {
    headers["Authorization"] = `Bearer ${jwt}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "Request failed");
  }

  return response.json();
}
