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
} from "store/apps/invitation";

// ** Import Custom hooks
import useToggleDrawer from "@core/hooks/useToggleDrawer";

const defaultValues = {
  name: "",
  email: "",
};

export const useInvitation = (serviceId) => {
  // ** Hook

  const form = useForm({
    defaultValues,
    mode: "onChange",
  });

  const { handleDrawer, handleModal } = useToggleDrawer();

  const store = useSelector((state) => state.invitation);

  const dispatch = useDispatch();

  useEffect(() => {
    serviceId && dispatch(fetchOneAction(serviceId));
  }, [serviceId]);

  useMemo(() => {
    if (store?.entity && serviceId) {
      "name" in store.entity && form.setValue("name", store.entity.name);
      "email" in store.entity && form.setValue("email", store.entity.email);
    } else {
      form.reset();
    }
  }, [store?.entity, serviceId]);

  const getInvitation = async (id) => {
    dispatch(fetchOneAction(id));
  };

  const getInvitations = async ({ query }) => {
    dispatch(fetchAllAction({ query }));
  };

  const addInvitation = async (data) => {
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

  const updateInvitation = async (id, data) => {
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

  const deleteInvitation = async (id) => {
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

  const exportInvitations = async () => {};

  return {
    form,
    store,
    getInvitation,
    getInvitations,
    addInvitation,
    updateInvitation,
    deleteInvitation,
    exportInvitations,
  };
};
