import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { SidebarContextProvider } from "./context/sidebarContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DarkModeContextProvider>
        <SidebarContextProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </SidebarContextProvider>
      </DarkModeContextProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
