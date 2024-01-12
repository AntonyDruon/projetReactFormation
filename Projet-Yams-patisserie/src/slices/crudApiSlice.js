// Importez les fonctions nécessaires de @reduxjs/toolkit/query/react
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Créez une instance de l'API pour la gestion des pâtisseries
export const crudApiSlice = createApi({
  reducerPath: "crudApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }), // Assurez-vous d'ajuster l'URL de base selon votre configuration
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    // Endpoint pour récupérer la liste de toutes les pâtisseries
    getPastries: builder.query({
      query: () => ({
        url: "/pastries",
        credentials: "include",
      }),
      providesTags: ['Post'],
    }),

    // Endpoint pour récupérer une pâtisserie par ID
    getPastryById: builder.query({
      query: (id) => ({
        url: `/pastrie/${id}`,
        credentials: "include",
      }),
    }),

    // Endpoint pour rechercher une pâtisserie par mot-clé
    searchPastries: builder.query({
      query: (word) => ({
        url: `/pastries-search/${word}`,
        credentials: "include",
      }),
    }),

    // Endpoint pour récupérer une liste paginée de pâtisseries
    getPagedPastries: builder.query({
      query: ({ offset, limit }) => ({
        url: `/pastries/${offset}/${limit}`,
        credentials: "include",
      }),
    }),

    // Endpoint pour récupérer une liste paginée de pâtisseries triées par quantité décroissante
    getOrderedPastries: builder.query({
      query: ({ offset, limit }) => ({
        url: `/pastries/order-quantity/${offset}/${limit}`,
        credentials: "include",
      }),
    }),

    // Endpoint pour récupérer le nombre total de pâtisseries
    getPastriesCount: builder.query({
      query: () => ({
        url: "/pastries-count",
        credentials: "include",
      }),
    }),

    // Endpoint pour ajouter une nouvelle pâtisserie
    addPastry: builder.mutation({
      query: (data) => ({
        url: "/pastrie",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ['Post'],
    }),

    // Endpoint pour modifier une pâtisserie existante
    updatePastry: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/pastrie/${id}`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),

    // Endpoint pour supprimer une pâtisserie
    deletePastry: builder.mutation({
      query: (id) => ({
        url: `/pastrie/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
  }),
});

// Exportez les hooks d'interrogation et de mutation
export const {
  useGetPastriesQuery,
  useGetPastryByIdQuery,
  useSearchPastriesQuery,
  useGetPagedPastriesQuery,
  useGetOrderedPastriesQuery,
  useGetPastriesCountQuery,
  useAddPastryMutation,
  useUpdatePastryMutation,
  useDeletePastryMutation,
} = crudApiSlice;
