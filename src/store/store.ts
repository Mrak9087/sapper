import { configureStore } from '@reduxjs/toolkit';

import reducers from './reducers/sapperSlice';

export const store = configureStore({
  reducer: reducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;
