

const API_URL = "https://re-estate.runasp.net";
let authToken: string | null = null;

export function setAuthToken(token: string | null) {
  if (!token) return authToken = null;
  authToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
}

export default async function request<T>(endpoint: string, options: RequestInit): Promise<T> {
  const isFormData = options.body instanceof FormData;
  (authToken);
  const { headers: optionHeaders, ...restOptions } = options;
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...optionHeaders,
      ...(authToken ? { Authorization: authToken } : {})
    },
    ...restOptions
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "Request failed");
  }
  return response.json();
}


// import Cookies from "js-cookie";

// const API_URL = "https://re-estate.runasp.net";

// export default async function request<T>(
//   endpoint: string,
//   options: RequestInit = {}
// ): Promise<T> {
//   // get token from cookies
//   const token = Cookies.get("Authentication");
//   const jwt = token ? JSON.parse(token).jwtToken : null;

//   const headers: Record<any, any> = {
//     "Content-Type": "application/json",
//     ...(options.headers || {}),
//   };

//   if (jwt) {
//     headers["Authorization"] = `Bearer ${jwt}`;
//   }

//   const response = await fetch(`${API_URL}${endpoint}`, {
//     ...options,
//     headers,
//   });

//   if (!response.ok) {
//     const error = await response.text();
//     throw new Error(error || "Request failed");
//   }

//   return response.json();
// }
