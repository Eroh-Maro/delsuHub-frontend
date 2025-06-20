import { configureStore } from '@reduxjs/toolkit';
import eventsApi from './features/events/events.api.js';
import concernsApi from './features/concerns/concerns.api.js';

export const store = configureStore({
  reducer: {
    [eventsApi.reducerPath]: eventsApi.reducer,
    [concernsApi.reducerPath]: concernsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(eventsApi.middleware)
      .concat(concernsApi.middleware),
});

