import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';


export const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_BASE_URL}/${import.meta.env.VITE_BASE_URL_VERSION}`,
  credentials: 'same-origin',

  prepareHeaders: (headers) => {

    headers.set('Authorization', `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`);
    return headers;
  },
});

