import React, { useState, useMemo, createContext } from "react";

export const SidebarContext = createContext({});

export const SidebarProvider = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const closeDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const value = {
    isDrawerOpen,
    closeDrawer,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
