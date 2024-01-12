import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    logout: builder.query({
      query: () => ({
        url: "/logout",
        method: "GET",
        credentials: "include",
      })
    }),
    checkAuthentication: builder.query({
      query: () =>({
        url: "/me",
        method: "GET",
        credentials: "include",
      }) 
      
    }),
  }),
});
export const { useLoginMutation, useLogoutQuery, useCheckAuthenticationQuery } =
  authApiSlice;
