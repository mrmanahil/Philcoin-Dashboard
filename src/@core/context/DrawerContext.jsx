import React, { useState, useMemo, createContext } from "react";

export const DrawerContext = createContext({});

export const DrawerProvider = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [serviceId, setServiceId] = useState(null);
  const [view, setView] = useState("TABLE");

  const closeDrawer = () => {
    setServiceId(null);
    setIsDrawerOpen(false);
  };
  const toggleDrawer = (id) => {
    setServiceId(id);
    setIsDrawerOpen((drawer) => !drawer);
  };

  const closeModal = () => {
    setServiceId(null);
    setIsModalOpen(false);
  };
  const toggleModal = (id) => {
    setServiceId(id);
    setIsModalOpen((modal) => !modal);
  };

  const toggleView = () => {
    setView((view) => (view === "TABLE" ? "CARD" : "TABLE"));
  };

  const value = {
    serviceId,

    isDrawerOpen,
    toggleDrawer,
    closeDrawer,

    isModalOpen,
    toggleModal,
    closeModal,

    view,
    toggleView,
  };
  // useMemo(
  //   () => ({
  //     serviceId,

  //     isDrawerOpen,
  //     toggleDrawer,
  //     closeDrawer,

  //     isModalOpen,
  //     toggleModal,
  //     closeModal,

  //     view,
  //     toggleView,
  //   }),
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [isDrawerOpen, isModalOpen, view]
  // );

  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
};
