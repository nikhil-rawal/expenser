import "./App.css";
import { toggleTheme } from "./rtk/slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./rtk/myStore";
import UserAuthentication from "./UserAuthentication";

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
    transition: "all 0.3s ease",
  };
  return (
    <div style={appStyle} className="app-section">
      <div className="btn-section">
        <button
          type="submit"
          onClick={() => dispatch(toggleTheme())}
          className="theme-btn"
        >
          Change Theme
        </button>{" "}
        &nbsp;
        {`It is ${isDayTheme ? "Day Mode 🌞" : "Night Mode 🌙"}`}
      </div>
      <div className="user-section">
        <UserAuthentication />
      </div>
    </div>
  );
};

export default App;
