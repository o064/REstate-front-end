const API_URL = "https://re-estate.runasp.net/";
export default async function request<T>(endpoint: string, options: RequestInit): Promise<T> {
    const response = await fetch(`${API_URL}${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
        ...options,
    });
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error || "Request failed");
    }
    return response.json();
}