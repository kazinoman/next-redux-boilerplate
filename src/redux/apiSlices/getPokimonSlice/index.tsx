import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// getPokemonByName: builder.query<Pokemon, string>({
//   query: (name) => `pokemon/${name}`,
// }),

export const getPokimonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({}),
});
