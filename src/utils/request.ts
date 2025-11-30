import Cookies from 'js-cookie';

export const API_URL = "https://re-estate.runasp.net";
let authToken: string | null = null;

export function setAuthToken(token: string | null) {
  if (!token) return authToken = null;
  authToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
}

function getAuthToken(): string | null {
  // First try to use the cached token
  if (authToken) return authToken;
  
  // If no cached token, try to get it from cookies
  const cookie = Cookies.get('Authentication');
  if (cookie) {
    try {
      const parsed = JSON.parse(cookie);
      if (parsed.jwtToken) {
        const token = parsed.jwtToken.startsWith('Bearer ') ? parsed.jwtToken : `Bearer ${parsed.jwtToken}`;
        setAuthToken(token); // Cache it for future use
        return token;
      }
    } catch (error) {
      console.error('Failed to parse auth cookie', error);
    }
  }
  
  return null;
}

export default async function request<T>(endpoint: string, options: RequestInit): Promise<T> {
  const isFormData = options.body instanceof FormData;
  const token = getAuthToken();
  const { headers: optionHeaders, ...restOptions } = options;
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...optionHeaders,
      ...(token ? { Authorization: token } : {})
    },
    ...restOptions
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "Request failed");
  }
  return response.json();
}
