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
  console.log("toggle drawer", toggleDrawer);
  const handleDrawer = (id) => {
    console.log(id);
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
