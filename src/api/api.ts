import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQueryWithReauth} from "@/api/baseQueryWithReauth";

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
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  refetchOnReconnect: true,
  // refetchOnFocus: true,
});
