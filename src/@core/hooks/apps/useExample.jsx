import { useEffect, useMemo } from "react";

// ** Third Party Imports
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

// ** Store Imports
import { useDispatch, useSelector } from "react-redux";

// ** Actions Imports
import {
  fetchAllAction,
  fetchOneAction,
  addAction,
  updateAction,
  deleteAction,
} from "store/apps/example";

// ** Import Custom hooks
import useToggleDrawer from "@core/hooks/useToggleDrawer";

const defaultValues = {
  first_name: "",
};

export const useExample = (serviceId) => {
  // ** Hook

  const form = useForm({
    defaultValues,
    mode: "onChange",
  });

  const { handleDrawer, handleModal } = useToggleDrawer();

  const store = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    serviceId && dispatch(fetchOneAction(serviceId));
  }, [serviceId]);

  useMemo(() => {
    if (store?.entity && serviceId) {
      "first_name" in store.entity &&
        form.setValue("first_name", store.entity.first_name);
    } else {
      form.reset();
    }
  }, [store?.entity, serviceId]);

  const getUser = async (id) => {
    dispatch(fetchOneAction(id));
  };

  const getUsers = async ({ query }) => {
    dispatch(fetchAllAction({ query }));
  };

  const addUser = async (data) => {
    dispatch(addAction({ ...data })).then(({ payload }) => {
      if (payload?.statusCode === "10000") {
        handleDrawer(null);
      } else {
        // console.log('============API_ERROR===============')
        // console.log(payload)
        // console.log('====================================')
      }
    });
  };

  const updateUser = async (id, data) => {
    dispatch(updateAction({ id, data })).then(({ payload }) => {
      if (payload?.statusCode === "10000") {
        handleDrawer(null);
      } else {
        // console.log('============API_ERROR===============')
        // console.log(payload)
        // console.log('====================================')
      }
    });
  };

  const deleteUser = async (id) => {
    dispatch(deleteAction(id)).then(({ payload }) => {
      if (payload?.statusCode === "10000") {
        handleModal(null);
      } else {
        // console.log('============API_ERROR===============')
        // console.log(payload)
        // console.log('====================================')
      }
    });
  };

  const exportUsers = async () => {};

  return {
    form,
    store,
    getUser,
    getUsers,
    addUser,
    updateUser,
    deleteUser,
    exportUsers,
  };
};
