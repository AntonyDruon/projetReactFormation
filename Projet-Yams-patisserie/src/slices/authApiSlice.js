import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        body: { email, password },
        credentials: "include",
      }),
    }),
    logout: builder.query({
      query: () => "/logout",
      method: "GET",
      credentials: "include",
    }),
    checkAuthentication: builder.query({
      query: () => "/me",
      method: "GET",
      credentials: "include",
    }),
  }),
});
export const { useLoginMutation, useLogoutQuery, useCheckAuthenticationQuery } =
  authApiSlice;
