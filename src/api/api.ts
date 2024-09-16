import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';

export const api = createApi({
  reducerPath: 'visaver',
  tagTypes: [
    'videos',
    'playlist',
    'playlists',
    'personal_playlist',
    'personal_playlists',
    'searchAI',
    'searchInPlaylist',
    'quiz',
    'quizzes',
  ],
  baseQuery,
  endpoints: () => ({}),
  refetchOnReconnect: true,
  // refetchOnFocus: true,
});
