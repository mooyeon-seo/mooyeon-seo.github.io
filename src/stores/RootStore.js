import { configureStore } from '@reduxjs/toolkit';
import dark from './darkStore';

const store = configureStore({
  reducer: {
    dark,
  },
});

export default store;