import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { SidebarContextProvider } from "./context/sidebarContext";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterMoment}>
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
