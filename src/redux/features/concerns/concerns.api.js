import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/baseURL";

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/concerns`,
    credentials: "include",
    prepareHeaders: (Headers) => {
        const token = localStorage.getItem("token");
        if (token) {
          Headers.set("Authorization", `Bearer ${token}`);
        }
        return Headers;
      }
});

const concernsApi = createApi({
    reducerPath: "concernsApi",
    baseQuery,
    tagTypes: ['Concerns'],
    endpoints: (builder) => ({
        sendConcern: builder.mutation({
            query: (newConcern) => ({
                url: `/addConcern`,
                method: "POST",
                body: newConcern,
            }),
            invalidatesTags: ["Concerns"],
        })
    })
})

export const { useSendConcernMutation } = concernsApi;
export default concernsApi;