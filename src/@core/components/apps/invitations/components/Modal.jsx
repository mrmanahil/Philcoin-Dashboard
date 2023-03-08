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
import { useExample } from "@core/hooks/apps/useExample";

// ** import form support components
import { InputField, Select, DateTimePicker } from "@core/components/form";

// ** Icons Imports
import Close from "mdi-material-ui/Close";

// ** Types Imports
import { Grid, Modal, TextField } from "@mui/material";

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
    },
    addUser,
    updateUser,
    store,
  } = useExample(serviceId);

  const onSubmit = async (data) => {
    if (serviceId) {
      await updateUser(serviceId, data);
    } else {
      await addUser(data);
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
                <form action="" class="signup-form user-form">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <label for="name" class="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="email" class="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          name="email"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="btn-box text-center">
                        <button class="add-userBtn">Invite</button>
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
