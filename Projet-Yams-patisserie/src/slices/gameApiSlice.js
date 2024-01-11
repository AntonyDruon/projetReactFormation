import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gameApiSlice = createApi({
  reducerPath: "gameApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getPastries: builder.query({
      query: () => "/game/pastries",
    }),
  }),
});

export const { useGetPastriesQuery } = gameApiSlice;
