import { createSlice } from "@reduxjs/toolkit";

const localStorageTheme = localStorage.getItem("theme");

const initialState: { dayTheme: boolean } = {
  dayTheme: localStorageTheme ? JSON.parse(localStorageTheme) : true,
};
const themeSlice = createSlice({
  name: "myThemeSlice",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.dayTheme = !state.dayTheme;
      localStorage.setItem("theme", JSON.stringify(state.dayTheme));
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
