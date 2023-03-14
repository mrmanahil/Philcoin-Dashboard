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

  const onSubmit = async (data) => {
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
        <div className="modal-dialog  modal-dialog-centered modal-box">
          <div className="modal-content">
            <div className="row">
              <div className="col-12">
                <div className="modal-header-text">
                  <h2 className="modal-title">Invite Friends</h2>
                  <button
                    type="button"
                    className="btn-close user"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={handleClose}
                  >
                    <img src={closeIcon} alt="" />
                  </button>
                </div>
              </div>
            </div>

            <div className="modal-body">
              <div className="adduser-form">
                <form
                  action=""
                  className="signup-form user-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label for="name" className="form-label">
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
                    <div className="col-12">
                      <div className="form-group">
                        <label for="email" className="form-label">
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
                    <div className="col-12">
                      <div className="btn-box text-center">
                        <button className="add-userBtn" type="submit">
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
