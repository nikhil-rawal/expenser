// import { useState, useEffect } from "react";
import { toggleTheme } from "./rtk/slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./rtk/myStore";

export const App = () => {
  const isDayTheme = useSelector(
    (state: RootState) => state.myThemeSlice.dayTheme
  );
  const dispatch = useDispatch<AppDispatch>();

  const appStyle = {
    backgroundColor: isDayTheme ? "#ffffff" : "#121212",
    color: isDayTheme ? "#333333" : "#ffffff",
    minHeight: "100vh",
    minWidth: "100vw",
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    transition: "all 0.3s ease",
  };
  return (
    <div style={appStyle}>
      App
      <br />
      <button type="submit" onClick={() => dispatch(toggleTheme())}>
        Change Theme
      </button>
      {isDayTheme ? "Day Mode 🌞" : "Night Mode 🌙"}
    </div>
  );
};

export default App;
