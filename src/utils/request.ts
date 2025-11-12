const API_URL = "https://re-estate.runasp.net";
let authToken: string | null = null;

export function setAuthToken(token: string | null) {
    if (!token) return authToken = null;
    authToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
}

export default async function request<T>(endpoint: string, options: RequestInit): Promise<T> {

    const response = await fetch(`${API_URL}${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
            ...(authToken ? { Authorization: authToken } : {}),

        },
        ...options,
    });
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error || "Request failed");
    }
    return response.json();
}