import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { PropertyRes } from "../types/property";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const PropertyApi = createApi({
  reducerPath: "PropertyApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Property"],
  endpoints: (builder) => ({
    getPropertyById: builder.query<any, { propertyType: string; propertyId: string }>({
      query: ({ propertyType, propertyId }) => `${propertyType}/${propertyId}`,
      transformResponse: (response: { isSuccess: boolean; data: PropertyRes }) => response.data,
      providesTags: ["Property"],
    }),
    getProperties: builder.query<any, void>({
      query: () => `Property`,
      transformResponse: (response: { isSuccess: boolean; data: PropertyRes[] }) => response.data,
      providesTags: ["Property"],
    }),
    toggleLike: builder.mutation<{ data: "Added" | "Deleted" }, string>({
      query: (propertyId) => ({
        url: `Like/ToggleLikeProperty/${propertyId}`,
        method: "POST",
      }),
      // إزالة invalidatesTags لأننا سنستخدم optimistic update
    }),
  }),
});

export const {
  useGetPropertyByIdQuery,
  useGetPropertiesQuery,
  useToggleLikeMutation,
} = PropertyApi;
