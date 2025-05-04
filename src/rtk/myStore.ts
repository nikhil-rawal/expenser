import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";

const myStore = configureStore({
  reducer: { myThemeSlice: themeReducer },
});

export default myStore;

export type RootState = ReturnType<typeof myStore.getState>;
export type AppDispatch = typeof myStore.dispatch;
