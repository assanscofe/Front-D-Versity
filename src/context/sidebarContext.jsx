import { useState, useEffect } from "react";
import { createContext } from "react";

export const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(
    JSON.parse(localStorage.getItem("sidebar")) || false
  );
  const toggle = () => {
    setOpenSidebar(!openSidebar);
  };

  useEffect(() => {
    localStorage.setItem("sidebar", openSidebar);
  }, [openSidebar]);

  return (
    <SidebarContext.Provider value={{ openSidebar, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};
