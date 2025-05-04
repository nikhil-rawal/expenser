import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import myStore from "./rtk/myStore";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </StrictMode>
);
