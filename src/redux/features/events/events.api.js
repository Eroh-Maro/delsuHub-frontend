import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/baseURL";

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api/events`,
  credentials: "include",
  prepareHeaders: (Headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      Headers.set("Authorization", `Bearer ${token}`);
    }
    return Headers;
  }
});

const eventsApi = createApi({
  reducerPath: "eventsApi",
  baseQuery,
  tagTypes: ['Events'],
  endpoints: (builder) => ({
    fetchAllEvents: builder.query({
      query: () => "/",
      providesTags: ["Events"]
    }),
    fetchEventById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: "Events", id }],
    }),
    addEvent: builder.mutation({
      query: (newEvent) => ({
        url: `/create`,
        method: "POST",
        body: newEvent,
      }),
      invalidatesTags: ["Events"],
    }),
    updateEvent: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/edit/${id}`,
        method: "PATCH",
        body: rest,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Events"],
    }),
    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Events"],
    }),
  }),
});

export const { useFetchAllEventsQuery } = eventsApi;
export default eventsApi;
