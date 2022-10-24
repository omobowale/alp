import { configureStore } from '@reduxjs/toolkit';
import templateReducer from '../features/template/templateSlice';

export const store = configureStore({
  reducer: {
    template: templateReducer,
  },
});

export const dispatch = store.dispatch;

