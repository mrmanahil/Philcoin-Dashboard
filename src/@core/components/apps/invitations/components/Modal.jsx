import { useEffect } from "react";
import * as React from "react";

// ** MUI Imports
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box, { BoxProps } from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import closeIcon from "assets/assets/close-icon.svg";

import { useSelector } from "react-redux";

// ** Third Party Imports
import { useInvitation } from "@core/hooks/apps/useInvitation";

// ** import form support components
import { InputField, Select, DateTimePicker } from "@core/components/form";

// ** Icons Imports
import Close from "mdi-material-ui/Close";

// ** Types Imports
import { Grid, Modal, TextField } from "@mui/material";
import Input from "@core/components/form/InputField";
import { useAuth } from "hooks/useAuth";

const InvitationDrawer = (props) => {
  // ** Props
  const { open, toggle, serviceId } = props;

  // ** Hooks
  const {
    form: {
      control,
      reset,
      handleSubmit,
      formState: { errors },
      setValue,
      register,
      formState,
    },
    addInvitation,
    updateInvitation,
    store,
  } = useInvitation(serviceId);

  const {
    user: { _id },
  } = useAuth();

  const onSubmit = async (data) => {
    data.userId = _id;
    if (serviceId) {
      await updateInvitation(serviceId, data);
    } else {
      await addInvitation(data);
    }
  };

  const handleClose = () => {
    reset();
    toggle();
  };

  return (
    <Modal
      open={open}
      anchor="right"
      variant="temporary"
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
    >
      <div
        // className="modal fade"
        id="addUserModal"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-centered modal-box">
          <div class="modal-content">
            <div class="row">
              <div class="col-12">
                <div class="modal-header-text">
                  <h2 class="modal-title">Invite Friends</h2>
                  <button
                    type="button"
                    class="btn-close user"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={handleClose}
                  >
                    <img src={closeIcon} alt="" />
                  </button>
                </div>
              </div>
            </div>

            <div class="modal-body">
              <div class="adduser-form">
                <form
                  action=""
                  class="signup-form user-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <label for="name" class="form-label">
                          Name
                        </label>
                        <Input
                          type="text"
                          placeholder="Enter Name"
                          label="name"
                          register={register}
                          formState={formState}
                          maxLength={50}
                          id="name"
                          className="form-control"
                          errors={errors?.name?.type}
                        />
                        {/* <input
                          type="text"
                          class="form-control"
                          id="name"
                          name="name"
                        /> */}
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="email" class="form-label">
                          Email
                        </label>
                        <Input
                          type="email"
                          placeholder="Enter Email"
                          label="email"
                          register={register}
                          formState={formState}
                          maxLength={50}
                          id="email"
                          className="form-control"
                          errors={errors?.email?.type}
                        />
                        {/* <input
                          type="email"
                          class="form-control"
                          id="email"
                          name="email"
                        /> */}
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="btn-box text-center">
                        <button class="add-userBtn" type="submit">
                          Invite
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default InvitationDrawer;
