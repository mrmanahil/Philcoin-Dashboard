import { useContext, useMemo } from "react";
import { DrawerContext } from "@core/context/DrawerContext";

const useToggleDrawer = () => {
  const {
    serviceId,
    toggleDrawer,
    isDrawerOpen,
    toggleModal,
    isModalOpen,
    toggleView,
    view,
  } = useContext(DrawerContext);

  const handleDrawer = (id) => {
    toggleDrawer(id);
  };

  const handleModal = (id) => toggleModal(id);

  return {
    serviceId,
    isDrawerOpen,
    isModalOpen,
    handleDrawer,
    handleModal,
    view,
    toggleView,
  };
};

export default useToggleDrawer;
