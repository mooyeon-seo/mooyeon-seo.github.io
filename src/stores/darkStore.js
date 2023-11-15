import { createSlice } from '@reduxjs/toolkit';

const darkSlice = createSlice({
  name: 'dark',
  initialState: {
    isDark: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { toggleTheme } = darkSlice.actions;
export default darkSlice.reducer;
